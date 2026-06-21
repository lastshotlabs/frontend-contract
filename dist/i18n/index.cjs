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

// src/i18n/index.ts
var i18n_exports = {};
__export(i18n_exports, {
  i18nConfigSchema: () => i18nConfigSchema,
  i18nDetectStrategySchema: () => i18nDetectStrategySchema,
  isTRef: () => isTRef,
  tRefSchema: () => tRefSchema
});
module.exports = __toCommonJS(i18n_exports);

// src/i18n/schema.ts
var import_zod = require("zod");
var i18nDetectStrategySchema = import_zod.z.enum([
  "state",
  "navigator",
  "default",
  "header"
]);
var i18nInlineStringsSchema = import_zod.z.lazy(
  () => import_zod.z.record(import_zod.z.union([import_zod.z.string(), i18nInlineStringsSchema]))
);
var tRefSchema = import_zod.z.object({
  t: import_zod.z.string().min(1),
  vars: import_zod.z.record(import_zod.z.unknown()).optional()
}).strict();
var i18nConfigSchema = import_zod.z.object({
  default: import_zod.z.string().min(1),
  locales: import_zod.z.array(import_zod.z.string().min(1)).min(1),
  strings: import_zod.z.record(import_zod.z.union([import_zod.z.string(), i18nInlineStringsSchema])),
  detect: import_zod.z.array(i18nDetectStrategySchema).optional()
}).strict();
function isTRef(value) {
  return typeof value === "object" && value !== null && "t" in value && typeof value.t === "string";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  i18nConfigSchema,
  i18nDetectStrategySchema,
  isTRef,
  tRefSchema
});
//# sourceMappingURL=index.cjs.map