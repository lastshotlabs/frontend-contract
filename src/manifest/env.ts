import { z } from "zod";

export type EnvRef = {
  env: string;
  default?: string;
};

export const envRefSchema = z
  .object({
    env: z.string().min(1),
    default: z.string().optional(),
  })
  .strict();

export function isEnvRef(value: unknown): value is EnvRef {
  return (
    typeof value === "object" &&
    value !== null &&
    "env" in value &&
    typeof (value as { env?: unknown }).env === "string"
  );
}

export function resolveEnvRef(
  ref: EnvRef,
  env: Record<string, string | undefined>,
): string | undefined {
  return env[ref.env] ?? ref.default;
}

export function getDefaultEnvSource(): Record<string, string | undefined> {
  const processEnv =
    typeof process !== "undefined" && process.env ? process.env : {};

  return { ...processEnv };
}
