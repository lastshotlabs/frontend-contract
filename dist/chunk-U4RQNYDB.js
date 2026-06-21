import {
  isEnvRef
} from "./chunk-AAKEPUQL.js";
import {
  isFromRef
} from "./chunk-674UXIUU.js";

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

export {
  isPolicyRef,
  isPolicyRefOrLiteral,
  collectPolicyRefs
};
//# sourceMappingURL=chunk-U4RQNYDB.js.map