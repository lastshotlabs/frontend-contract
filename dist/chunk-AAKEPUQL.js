// src/manifest/env.ts
import { z } from "zod";
var envRefSchema = z.object({
  env: z.string().min(1),
  default: z.string().optional()
}).strict();
function isEnvRef(value) {
  return typeof value === "object" && value !== null && "env" in value && typeof value.env === "string";
}
function resolveEnvRef(ref, env) {
  return env[ref.env] ?? ref.default;
}
function getDefaultEnvSource() {
  const processEnv = typeof process !== "undefined" && process.env ? process.env : {};
  return { ...processEnv };
}

export {
  envRefSchema,
  isEnvRef,
  resolveEnvRef,
  getDefaultEnvSource
};
//# sourceMappingURL=chunk-AAKEPUQL.js.map