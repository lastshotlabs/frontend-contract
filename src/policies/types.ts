import type { EnvRef } from "../manifest/env";
import { isEnvRef } from "../manifest/env";
import type { FromRef } from "../refs/from";
import { isFromRef } from "../refs/from";

export interface PolicyRef {
  policy: string;
}

export type PolicyRefOrLiteral =
  | string
  | number
  | boolean
  | null
  | FromRef
  | EnvRef;

export type PolicyExpr =
  | string
  | { all: PolicyExpr[] }
  | { any: PolicyExpr[] }
  | { not: PolicyExpr }
  | { equals: [PolicyRefOrLiteral, PolicyRefOrLiteral] }
  | { "not-equals": [PolicyRefOrLiteral, PolicyRefOrLiteral] }
  | { exists: PolicyRefOrLiteral }
  | { truthy: PolicyRefOrLiteral }
  | { falsy: PolicyRefOrLiteral }
  | { in: [PolicyRefOrLiteral, PolicyRefOrLiteral[]] };

export type PolicyMap = Record<string, PolicyExpr>;

export function isPolicyRef(value: unknown): value is PolicyRef {
  return (
    typeof value === "object" &&
    value !== null &&
    "policy" in value &&
    typeof (value as { policy?: unknown }).policy === "string"
  );
}

export function isPolicyRefOrLiteral(
  value: unknown,
): value is PolicyRefOrLiteral {
  return (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    isFromRef(value) ||
    isEnvRef(value)
  );
}

export function collectPolicyRefs(expr: PolicyExpr): Set<string> {
  const refs = new Set<string>();

  const walk = (value: PolicyExpr): void => {
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
