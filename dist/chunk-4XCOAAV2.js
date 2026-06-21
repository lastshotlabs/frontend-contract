import {
  fromRefSchema
} from "./chunk-TQB3JHYG.js";
import {
  parseDataString
} from "./chunk-674UXIUU.js";

// src/resources/index.ts
import { z } from "zod";
var httpMethodSchema = z.enum([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
]);
var resourceParamSchema = z.lazy(
  () => z.union([z.unknown(), fromRefSchema])
);
var resourceRefSchema = z.object({
  resource: z.string().min(1),
  params: z.record(resourceParamSchema).optional()
}).strict();
var resourceInvalidationTargetSchema = z.union([
  z.string().min(1),
  z.object({
    key: z.array(z.string().min(1)).min(1)
  }).strict()
]);
var optimisticTargetSchema = z.union([
  z.string().min(1),
  z.object({
    resource: z.string().min(1),
    params: z.record(z.unknown()).optional()
  }).strict()
]);
var optimisticConfigSchema = z.object({
  target: optimisticTargetSchema,
  merge: z.enum(["append", "prepend", "replace", "patch", "remove"]),
  idField: z.string().optional()
}).strict().superRefine((value, ctx) => {
  if ((value.merge === "replace" || value.merge === "patch" || value.merge === "remove") && !value.idField) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["idField"],
      message: `optimistic.idField is required when merge is "${value.merge}"`
    });
  }
});
var endpointTargetSchema = z.union([z.string(), resourceRefSchema]);
var dataSourceSchema = z.union([
  z.string(),
  fromRefSchema,
  resourceRefSchema
]);
var resourceConfigSchema = z.object({
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
  optimistic: optimisticConfigSchema.optional()
}).strict();
function isResourceRef(value) {
  return typeof value === "object" && value !== null && "resource" in value && typeof value["resource"] === "string";
}
function isQueryKeyInvalidationTarget(value) {
  return typeof value !== "string";
}
function isOptimisticResourceTarget(value) {
  return typeof value !== "string";
}
function resolveEndpointTarget(target, resources, params, fallbackMethod = "GET") {
  if (typeof target === "string") {
    const hasExplicitMethod = target.includes(" ");
    const [method, endpoint] = parseDataString(target);
    return {
      method: hasExplicitMethod ? method.toUpperCase() : fallbackMethod,
      endpoint,
      params: params ?? {},
      client: "main"
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
      ...resource.params ?? {},
      ...target.params ?? {},
      ...params ?? {}
    },
    client: resource.client ?? "main"
  };
}
function buildRequestUrl(endpoint, params = {}, pathParams = params) {
  const usedPathParams = /* @__PURE__ */ new Set();
  const interpolatedPath = endpoint.replace(
    /\{([^}]+)\}/g,
    (_, token) => {
      const [rawName, ...templateParts] = token.split(":");
      const name = rawName ?? "";
      const template = templateParts.join(":");
      if ((name === "date" || name === "today") && template) {
        return formatDateTemplate(/* @__PURE__ */ new Date(), template);
      }
      if (name === "date" || name === "today") {
        return formatDateTemplate(/* @__PURE__ */ new Date(), "YYYY-MM-DD");
      }
      usedPathParams.add(name);
      const value = pathParams[name];
      return value == null ? `{${token}}` : encodeURIComponent(String(value));
    }
  );
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (usedPathParams.has(key) || value == null) continue;
    query.set(key, String(value));
  }
  const queryString = query.toString();
  return queryString ? `${interpolatedPath}?${queryString}` : interpolatedPath;
}
function formatDateTemplate(date, template) {
  const parts = {
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
    s: String(date.getUTCSeconds())
  };
  return template.replace(
    /YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s/g,
    (token) => parts[token] ?? token
  );
}
function extractResourceRefs(value, results = []) {
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
    for (const nested of Object.values(value)) {
      extractResourceRefs(nested, results);
    }
  }
  return results;
}
function collectDependentResources(resourceName, resources, visited = /* @__PURE__ */ new Set()) {
  if (!resources) {
    return [];
  }
  const dependents = [];
  for (const [candidateName, resource] of Object.entries(resources)) {
    if (candidateName !== resourceName && resource.dependsOn?.includes(resourceName) && !visited.has(candidateName)) {
      visited.add(candidateName);
      dependents.push(candidateName);
      dependents.push(
        ...collectDependentResources(candidateName, resources, visited)
      );
    }
  }
  return dependents;
}
function getResourceInvalidationTargets(resourceName, resources) {
  const resource = resources?.[resourceName];
  if (!resource) {
    return [];
  }
  const targets = /* @__PURE__ */ new Set();
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

export {
  httpMethodSchema,
  resourceParamSchema,
  resourceRefSchema,
  resourceInvalidationTargetSchema,
  optimisticTargetSchema,
  optimisticConfigSchema,
  endpointTargetSchema,
  dataSourceSchema,
  resourceConfigSchema,
  isResourceRef,
  isQueryKeyInvalidationTarget,
  isOptimisticResourceTarget,
  resolveEndpointTarget,
  buildRequestUrl,
  extractResourceRefs,
  collectDependentResources,
  getResourceInvalidationTargets
};
//# sourceMappingURL=chunk-4XCOAAV2.js.map