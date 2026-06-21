import {
  endpointTargetSchema
} from "./chunk-4XCOAAV2.js";

// src/state/schema.ts
import { z } from "zod";
var statePersistConfigSchema = z.union([
  z.literal("none"),
  z.literal("localStorage"),
  z.literal("sessionStorage"),
  z.object({
    storage: z.enum(["localStorage", "sessionStorage"]),
    key: z.string().optional()
  }).strict()
]);
var stateValueConfigSchema = z.object({
  scope: z.enum(["app", "route"]).optional(),
  data: endpointTargetSchema.optional(),
  default: z.unknown().optional(),
  compute: z.string().optional(),
  persist: statePersistConfigSchema.default("none")
}).strict().superRefine((value, ctx) => {
  if (value.compute && value.data) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "State definitions cannot declare both compute and data."
    });
  }
});
var stateConfigMapSchema = z.record(stateValueConfigSchema);

export {
  statePersistConfigSchema,
  stateValueConfigSchema,
  stateConfigMapSchema
};
//# sourceMappingURL=chunk-RMR6SKEX.js.map