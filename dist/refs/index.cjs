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

// src/refs/index.ts
var refs_exports = {};
__export(refs_exports, {
  FROM_REF_TRANSFORMS: () => FROM_REF_TRANSFORMS,
  applyResolved: () => applyResolved,
  applyTransform: () => applyTransform,
  exprRefSchema: () => exprRefSchema,
  extractFromRefs: () => extractFromRefs,
  fromRefSchema: () => fromRefSchema,
  getNestedValue: () => getNestedValue,
  isExprRef: () => isExprRef,
  isFromRef: () => isFromRef,
  parseDataString: () => parseDataString
});
module.exports = __toCommonJS(refs_exports);

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
function getNestedValue(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return void 0;
    current = current[part];
  }
  return current;
}
function isFromRef(value) {
  return typeof value === "object" && value !== null && "from" in value && typeof value.from === "string";
}
function isExprRef(value) {
  return typeof value === "object" && value !== null && "expr" in value && typeof value.expr === "string";
}
function parseDataString(data) {
  const spaceIndex = data.indexOf(" ");
  if (spaceIndex === -1) return ["GET", data];
  return [data.slice(0, spaceIndex), data.slice(spaceIndex + 1)];
}
function extractFromRefs(obj, prefix = "") {
  const result = /* @__PURE__ */ new Map();
  if (obj == null || typeof obj !== "object") return result;
  if (isFromRef(obj)) {
    result.set(prefix, obj);
    return result;
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i += 1) {
      const childPath = prefix ? `${prefix}.${i}` : `${i}`;
      const childRefs = extractFromRefs(obj[i], childPath);
      for (const [key, value] of childRefs) {
        result.set(key, value);
      }
    }
    return result;
  }
  for (const [key, value] of Object.entries(obj)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    const childRefs = extractFromRefs(value, childPath);
    for (const [refKey, refValue] of childRefs) {
      result.set(refKey, refValue);
    }
  }
  return result;
}
function applyTransform(value, transform, arg) {
  if (!transform || value === void 0 || value === null) return value;
  switch (transform) {
    case "uppercase":
      return String(value).toUpperCase();
    case "lowercase":
      return String(value).toLowerCase();
    case "trim":
      return String(value).trim();
    case "length":
      return Array.isArray(value) ? value.length : String(value).length;
    case "number":
      return Number(value);
    case "boolean":
      return Boolean(value);
    case "string":
      return String(value);
    case "json":
      try {
        return JSON.parse(String(value));
      } catch {
        return value;
      }
    case "keys":
      return typeof value === "object" && value ? Object.keys(value) : [];
    case "values":
      return typeof value === "object" && value ? Object.values(value) : [];
    case "first":
      return Array.isArray(value) ? value[0] : value;
    case "last":
      return Array.isArray(value) ? value[value.length - 1] : value;
    case "count":
      return Array.isArray(value) ? value.length : 0;
    case "sum":
      return Array.isArray(value) ? value.reduce((acc, item) => acc + Number(item), 0) : 0;
    case "join":
      return Array.isArray(value) ? value.join(arg != null ? String(arg) : ", ") : String(value);
    case "split":
      return String(value).split(arg != null ? String(arg) : ",");
    case "default":
      return value === void 0 || value === null || value === "" ? arg : value;
    default:
      return value;
  }
}
function applyResolved(config, resolved) {
  return applyResolvedInternal(config, resolved, "");
}
function applyResolvedInternal(obj, resolved, prefix) {
  if (obj == null || typeof obj !== "object") return obj;
  if (isFromRef(obj) && resolved.has(prefix)) {
    return resolved.get(prefix);
  }
  if (Array.isArray(obj)) {
    return obj.map((item, index) => {
      const childPath = prefix ? `${prefix}.${index}` : `${index}`;
      return applyResolvedInternal(item, resolved, childPath);
    });
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    result[key] = applyResolvedInternal(value, resolved, childPath);
  }
  return result;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FROM_REF_TRANSFORMS,
  applyResolved,
  applyTransform,
  exprRefSchema,
  extractFromRefs,
  fromRefSchema,
  getNestedValue,
  isExprRef,
  isFromRef,
  parseDataString
});
//# sourceMappingURL=index.cjs.map