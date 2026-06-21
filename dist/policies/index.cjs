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

// src/policies/index.ts
var policies_exports = {};
__export(policies_exports, {
  collectPolicyRefs: () => collectPolicyRefs,
  isPolicyRef: () => isPolicyRef,
  isPolicyRefOrLiteral: () => isPolicyRefOrLiteral
});
module.exports = __toCommonJS(policies_exports);

// src/manifest/env.ts
var import_zod = require("zod");
var envRefSchema = import_zod.z.object({
  env: import_zod.z.string().min(1),
  default: import_zod.z.string().optional()
}).strict();
function isEnvRef(value) {
  return typeof value === "object" && value !== null && "env" in value && typeof value.env === "string";
}

// src/refs/from.ts
function isFromRef(value) {
  return typeof value === "object" && value !== null && "from" in value && typeof value.from === "string";
}

// src/policies/types.ts
function isPolicyRef(value) {
  return typeof value === "object" && value !== null && "policy" in value && typeof value.policy === "string";
}
function isPolicyRefOrLiteral(value) {
  return value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean" || isFromRef(value) || isEnvRef(value);
}
function collectPolicyRefs(expr) {
  const refs = /* @__PURE__ */ new Set();
  const walk = (value) => {
    if (typeof value === "string") {
      refs.add(value);
      return;
    }
    if ("all" in value) {
      value.all.forEach(walk);
      return;
    }
    if ("any" in value) {
      value.any.forEach(walk);
      return;
    }
    if ("not" in value) {
      walk(value.not);
    }
  };
  walk(expr);
  return refs;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  collectPolicyRefs,
  isPolicyRef,
  isPolicyRefOrLiteral
});
//# sourceMappingURL=index.cjs.map