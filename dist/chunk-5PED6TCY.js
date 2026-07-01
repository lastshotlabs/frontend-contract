// src/i18n/schema.ts
import { z } from "zod";
var i18nDetectStrategySchema = z.enum([
  "state",
  "navigator",
  "default",
  "header"
]);
var i18nInlineStringsSchema = z.lazy(
  () => z.record(z.string(), z.union([z.string(), i18nInlineStringsSchema]))
);
var tRefSchema = z.object({
  t: z.string().min(1),
  vars: z.record(z.string(), z.unknown()).optional()
}).strict();
var i18nConfigSchema = z.object({
  default: z.string().min(1),
  locales: z.array(z.string().min(1)).min(1),
  strings: z.record(z.string(), z.union([z.string(), i18nInlineStringsSchema])),
  detect: z.array(i18nDetectStrategySchema).optional()
}).strict();
function isTRef(value) {
  return typeof value === "object" && value !== null && "t" in value && typeof value.t === "string";
}

export {
  i18nDetectStrategySchema,
  tRefSchema,
  i18nConfigSchema,
  isTRef
};
//# sourceMappingURL=chunk-5PED6TCY.js.map