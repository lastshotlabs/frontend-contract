"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/resources/index.ts
var resources_exports = {};
__export(resources_exports, {
  buildRequestUrl: () => buildRequestUrl,
  collectDependentResources: () => collectDependentResources,
  dataSourceSchema: () => dataSourceSchema,
  endpointTargetSchema: () => endpointTargetSchema,
  extractResourceRefs: () => extractResourceRefs,
  getResourceInvalidationTargets: () => getResourceInvalidationTargets,
  httpMethodSchema: () => httpMethodSchema,
  isOptimisticResourceTarget: () => isOptimisticResourceTarget,
  isQueryKeyInvalidationTarget: () => isQueryKeyInvalidationTarget,
  isResourceRef: () => isResourceRef,
  optimisticConfigSchema: () => optimisticConfigSchema,
  optimisticTargetSchema: () => optimisticTargetSchema,
  resolveEndpointTarget: () => resolveEndpointTarget,
  resourceConfigSchema: () => resourceConfigSchema,
  resourceInvalidationTargetSchema: () => resourceInvalidationTargetSchema,
  resourceParamSchema: () => resourceParamSchema,
  resourceRefSchema: () => resourceRefSchema
});
module.exports = __toCommonJS(resources_exports);
var import_zod2 = require("zod");

// src/refs/from.ts
var FROM_REF_TRANSFORMS = [
  "uppercase",
  "lowercase",
  "trim",
  "length",
  "number",
  "boolean",
  "string",
  "json",
  "keys",
  "values",
  "first",
  "last",
  "count",
  "sum",
  "join",
  "split",
  "default"
];
function parseDataString(data) {
  const spaceIndex = data.indexOf(" ");
  if (spaceIndex === -1) return ["GET", data];
  return [data.slice(0, spaceIndex), data.slice(spaceIndex + 1)];
}

// src/refs/schema.ts
var import_zod = require("zod");
var fromRefSchema = import_zod.z.object({
  from: import_zod.z.string(),
  transform: import_zod.z.enum(FROM_REF_TRANSFORMS).optional(),
  transformArg: import_zod.z.union([import_zod.z.string(), import_zod.z.number()]).optional()
}).strict();
var exprRefSchema = import_zod.z.object({
  expr: import_zod.z.string()
}).strict();

// src/resources/index.ts
var httpMethodSchema = import_zod2.z.enum([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
]);
var resourceParamSchema = import_zod2.z.lazy(
  () => import_zod2.z.union([import_zod2.z.unknown(), fromRefSchema])
);
var resourceRefSchema = import_zod2.z.object({
  resource: import_zod2.z.string().min(1),
  params: import_zod2.z.record(import_zod2.z.string(), resourceParamSchema).optional()
}).strict();
var resourceInvalidationTargetSchema = import_zod2.z.union([
  import_zod2.z.string().min(1),
  import_zod2.z.object({
    key: import_zod2.z.array(import_zod2.z.string().min(1)).min(1)
  }).strict()
]);
var optimisticTargetSchema = import_zod2.z.union([
  import_zod2.z.string().min(1),
  import_zod2.z.object({
    resource: import_zod2.z.string().min(1),
    params: import_zod2.z.record(import_zod2.z.string(), import_zod2.z.unknown()).optional()
  }).strict()
]);
var optimisticConfigSchema = import_zod2.z.object({
  target: optimisticTargetSchema,
  merge: import_zod2.z.enum(["append", "prepend", "replace", "patch", "remove"]),
  idField: import_zod2.z.string().optional()
}).strict().superRefine((value, ctx) => {
  if ((value.merge === "replace" || value.merge === "patch" || value.merge === "remove") && !value.idField) {
    ctx.addIssue({
      code: import_zod2.z.ZodIssueCode.custom,
      path: ["idField"],
      message: `optimistic.idField is required when merge is "${value.merge}"`
    });
  }
});
var endpointTargetSchema = import_zod2.z.union([import_zod2.z.string(), resourceRefSchema]);
var dataSourceSchema = import_zod2.z.union([
  import_zod2.z.string(),
  fromRefSchema,
  resourceRefSchema
]);
var resourceConfigSchema = import_zod2.z.object({
  method: httpMethodSchema.optional(),
  endpoint: import_zod2.z.string().min(1),
  client: import_zod2.z.string().min(1).optional(),
  params: import_zod2.z.record(import_zod2.z.string(), import_zod2.z.unknown()).optional(),
  cacheMs: import_zod2.z.number().int().min(0).optional(),
  pollMs: import_zod2.z.number().int().positive().optional(),
  refetchOnMount: import_zod2.z.boolean().optional(),
  refetchOnWindowFocus: import_zod2.z.boolean().optional(),
  retry: import_zod2.z.number().int().min(0).optional(),
  retryDelayMs: import_zod2.z.number().int().min(0).optional(),
  dependsOn: import_zod2.z.array(import_zod2.z.string().min(1)).optional(),
  invalidates: import_zod2.z.array(resourceInvalidationTargetSchema).optional(),
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildRequestUrl,
  collectDependentResources,
  dataSourceSchema,
  endpointTargetSchema,
  extractResourceRefs,
  getResourceInvalidationTargets,
  httpMethodSchema,
  isOptimisticResourceTarget,
  isQueryKeyInvalidationTarget,
  isResourceRef,
  optimisticConfigSchema,
  optimisticTargetSchema,
  resolveEndpointTarget,
  resourceConfigSchema,
  resourceInvalidationTargetSchema,
  resourceParamSchema,
  resourceRefSchema
});
//# sourceMappingURL=index.cjs.map