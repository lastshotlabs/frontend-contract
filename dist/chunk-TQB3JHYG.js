import {
  FROM_REF_TRANSFORMS
} from "./chunk-674UXIUU.js";

// src/refs/schema.ts
import { z } from "zod";
var fromRefSchema = z.object({
  from: z.string(),
  transform: z.enum(FROM_REF_TRANSFORMS).optional(),
  transformArg: z.union([z.string(), z.number()]).optional()
}).strict();
var exprRefSchema = z.object({
  expr: z.string()
}).strict();

export {
  fromRefSchema,
  exprRefSchema
};
//# sourceMappingURL=chunk-TQB3JHYG.js.map