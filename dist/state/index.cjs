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

// src/state/index.ts
var state_exports = {};
__export(state_exports, {
  stateConfigMapSchema: () => stateConfigMapSchema,
  statePersistConfigSchema: () => statePersistConfigSchema,
  stateValueConfigSchema: () => stateValueConfigSchema
});
module.exports = __toCommonJS(state_exports);

// src/state/schema.ts
var import_zod3 = require("zod");

// src/resources/index.ts
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
  params: import_zod2.z.record(resourceParamSchema).optional()
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
    params: import_zod2.z.record(import_zod2.z.unknown()).optional()
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
  params: import_zod2.z.record(import_zod2.z.unknown()).optional(),
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

// src/state/schema.ts
var statePersistConfigSchema = import_zod3.z.union([
  import_zod3.z.literal("none"),
  import_zod3.z.literal("localStorage"),
  import_zod3.z.literal("sessionStorage"),
  import_zod3.z.object({
    storage: import_zod3.z.enum(["localStorage", "sessionStorage"]),
    key: import_zod3.z.string().optional()
  }).strict()
]);
var stateValueConfigSchema = import_zod3.z.object({
  scope: import_zod3.z.enum(["app", "route"]).optional(),
  data: endpointTargetSchema.optional(),
  default: import_zod3.z.unknown().optional(),
  compute: import_zod3.z.string().optional(),
  persist: statePersistConfigSchema.default("none")
}).strict().superRefine((value, ctx) => {
  if (value.compute && value.data) {
    ctx.addIssue({
      code: import_zod3.z.ZodIssueCode.custom,
      message: "State definitions cannot declare both compute and data."
    });
  }
});
var stateConfigMapSchema = import_zod3.z.record(stateValueConfigSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stateConfigMapSchema,
  statePersistConfigSchema,
  stateValueConfigSchema
});
//# sourceMappingURL=index.cjs.map