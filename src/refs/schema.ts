import { z } from "zod";
import { FROM_REF_TRANSFORMS } from "./from";

export const fromRefSchema = z
  .object({
    from: z.string(),
    transform: z.enum(FROM_REF_TRANSFORMS).optional(),
    transformArg: z.union([z.string(), z.number()]).optional(),
  })
  .strict();

export const exprRefSchema = z
  .object({
    expr: z.string(),
  })
  .strict();
