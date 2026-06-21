import { z } from "zod";
import { endpointTargetSchema } from "../resources";

export const statePersistConfigSchema = z.union([
  z.literal("none"),
  z.literal("localStorage"),
  z.literal("sessionStorage"),
  z
    .object({
      storage: z.enum(["localStorage", "sessionStorage"]),
      key: z.string().optional(),
    })
    .strict(),
]);

export const stateValueConfigSchema = z
  .object({
    scope: z.enum(["app", "route"]).optional(),
    data: endpointTargetSchema.optional(),
    default: z.unknown().optional(),
    compute: z.string().optional(),
    persist: statePersistConfigSchema.default("none"),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.compute && value.data) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "State definitions cannot declare both compute and data.",
      });
    }
  });

export const stateConfigMapSchema = z.record(stateValueConfigSchema);
