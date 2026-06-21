import { z } from "zod";
import { fromRefSchema, parseDataString } from "../refs";
import type { FromRef } from "../refs";

export const httpMethodSchema = z.enum([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
]);

export const resourceParamSchema: z.ZodType<unknown | FromRef> = z.lazy(() =>
  z.union([z.unknown(), fromRefSchema]),
);

export const resourceRefSchema = z
  .object({
    resource: z.string().min(1),
    params: z.record(resourceParamSchema).optional(),
  })
  .strict();

export const resourceInvalidationTargetSchema = z.union([
  z.string().min(1),
  z
    .object({
      key: z.array(z.string().min(1)).min(1),
    })
    .strict(),
]);

export const optimisticTargetSchema = z.union([
  z.string().min(1),
  z
    .object({
      resource: z.string().min(1),
      params: z.record(z.unknown()).optional(),
    })
    .strict(),
]);

export const optimisticConfigSchema = z
  .object({
    target: optimisticTargetSchema,
    merge: z.enum(["append", "prepend", "replace", "patch", "remove"]),
    idField: z.string().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (
      (value.merge === "replace" ||
        value.merge === "patch" ||
        value.merge === "remove") &&
      !value.idField
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["idField"],
        message: `optimistic.idField is required when merge is "${value.merge}"`,
      });
    }
  });

export const endpointTargetSchema = z.union([z.string(), resourceRefSchema]);

export const dataSourceSchema = z.union([
  z.string(),
  fromRefSchema,
  resourceRefSchema,
]);

export const resourceConfigSchema = z
  .object({
    method: httpMethodSchema.optional(),
    endpoint: z.string().min(1),
    client: z.string().min(1).optional(),
    params: z.record(z.unknown()).optional(),
    cacheMs: z.number().int().min(0).optional(),
    pollMs: z.number().int().positive().optional(),
    refetchOnMount: z.boolean().optional(),
    refetchOnWindowFocus: z.boolean().optional(),
    retry: z.number().int().min(0).optional(),
    retryDelayMs: z.number().int().min(0).optional(),
    dependsOn: z.array(z.string().min(1)).optional(),
    invalidates: z.array(resourceInvalidationTargetSchema).optional(),
    optimistic: optimisticConfigSchema.optional(),
  })
  .strict();

export type HttpMethod = z.infer<typeof httpMethodSchema>;
export type ResourceRef = z.infer<typeof resourceRefSchema>;
export type ResourceInvalidationTarget = z.infer<
  typeof resourceInvalidationTargetSchema
>;
export type OptimisticTarget = z.infer<typeof optimisticTargetSchema>;
export type OptimisticConfig = z.infer<typeof optimisticConfigSchema>;
export type ResourceConfig = z.infer<typeof resourceConfigSchema>;
export type ResourceMap = Record<string, ResourceConfig>;
export type EndpointTarget = z.infer<typeof endpointTargetSchema>;

export interface ResolvedRequest {
  method: HttpMethod;
  endpoint: string;
  params: Record<string, unknown>;
  client: string;
}

export function isResourceRef(value: unknown): value is ResourceRef {
  return (
    typeof value === "object" &&
    value !== null &&
    "resource" in value &&
    typeof (value as Record<string, unknown>)["resource"] === "string"
  );
}

export function isQueryKeyInvalidationTarget(
  value: ResourceInvalidationTarget,
): value is Extract<ResourceInvalidationTarget, { key: string[] }> {
  return typeof value !== "string";
}

export function isOptimisticResourceTarget(
  value: OptimisticTarget,
): value is Extract<OptimisticTarget, { resource: string }> {
  return typeof value !== "string";
}

export function resolveEndpointTarget(
  target: EndpointTarget,
  resources?: ResourceMap,
  params?: Record<string, unknown>,
  fallbackMethod: HttpMethod = "GET",
): ResolvedRequest {
  if (typeof target === "string") {
    const hasExplicitMethod = target.includes(" ");
    const [method, endpoint] = parseDataString(target);
    return {
      method: hasExplicitMethod
        ? (method.toUpperCase() as HttpMethod)
        : fallbackMethod,
      endpoint,
      params: params ?? {},
      client: "main",
    };
  }

  const resource = resources?.[target.resource];
  if (!resource) {
    throw new Error(`Unknown manifest resource "${target.resource}"`);
  }

  return {
    method: resource.method ?? fallbackMethod,
    endpoint: resource.endpoint,
    params: {
      ...(resource.params ?? {}),
      ...(target.params ?? {}),
      ...(params ?? {}),
    },
    client: resource.client ?? "main",
  };
}

export function buildRequestUrl(
  endpoint: string,
  params: Record<string, unknown> = {},
  pathParams: Record<string, unknown> = params,
): string {
  const usedPathParams = new Set<string>();
  const interpolatedPath = endpoint.replace(
    /\{([^}]+)\}/g,
    (_, token: string) => {
      const [rawName, ...templateParts] = token.split(":");
      const name = rawName ?? "";
      const template = templateParts.join(":");

      if ((name === "date" || name === "today") && template) {
        return formatDateTemplate(new Date(), template);
      }

      if (name === "date" || name === "today") {
        return formatDateTemplate(new Date(), "YYYY-MM-DD");
      }

      usedPathParams.add(name);
      const value = pathParams[name];
      return value == null ? `{${token}}` : encodeURIComponent(String(value));
    },
  );

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (usedPathParams.has(key) || value == null) continue;
    query.set(key, String(value));
  }

  const queryString = query.toString();
  return queryString ? `${interpolatedPath}?${queryString}` : interpolatedPath;
}

function formatDateTemplate(date: Date, template: string): string {
  const parts: Record<string, string> = {
    YYYY: String(date.getUTCFullYear()),
    YY: String(date.getUTCFullYear()).slice(-2),
    MM: String(date.getUTCMonth() + 1).padStart(2, "0"),
    M: String(date.getUTCMonth() + 1),
    DD: String(date.getUTCDate()).padStart(2, "0"),
    D: String(date.getUTCDate()),
    HH: String(date.getUTCHours()).padStart(2, "0"),
    H: String(date.getUTCHours()),
    mm: String(date.getUTCMinutes()).padStart(2, "0"),
    m: String(date.getUTCMinutes()),
    ss: String(date.getUTCSeconds()).padStart(2, "0"),
    s: String(date.getUTCSeconds()),
  };

  return template.replace(
    /YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s/g,
    (token) => parts[token] ?? token,
  );
}

export function extractResourceRefs(
  value: unknown,
  results: ResourceRef[] = [],
): ResourceRef[] {
  if (isResourceRef(value)) {
    results.push(value);
    if (value.params) {
      extractResourceRefs(value.params, results);
    }
    return results;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      extractResourceRefs(item, results);
    }
    return results;
  }

  if (value && typeof value === "object") {
    for (const nested of Object.values(value as Record<string, unknown>)) {
      extractResourceRefs(nested, results);
    }
  }

  return results;
}

export function collectDependentResources(
  resourceName: string,
  resources?: ResourceMap,
  visited: Set<string> = new Set(),
): string[] {
  if (!resources) {
    return [];
  }

  const dependents: string[] = [];
  for (const [candidateName, resource] of Object.entries(resources)) {
    if (
      candidateName !== resourceName &&
      resource.dependsOn?.includes(resourceName) &&
      !visited.has(candidateName)
    ) {
      visited.add(candidateName);
      dependents.push(candidateName);
      dependents.push(
        ...collectDependentResources(candidateName, resources, visited),
      );
    }
  }

  return dependents;
}

export function getResourceInvalidationTargets(
  resourceName: string,
  resources?: ResourceMap,
): string[] {
  const resource = resources?.[resourceName];
  if (!resource) {
    return [];
  }

  const targets = new Set<string>();
  for (const target of resource.invalidates ?? []) {
    if (typeof target !== "string") {
      continue;
    }

    targets.add(target);
    for (const dependent of collectDependentResources(target, resources)) {
      targets.add(dependent);
    }
  }

  return [...targets];
}
