import type { EnvRef } from "../manifest/env";
import type { FromRef } from "../refs/from";
export interface PolicyRef {
    policy: string;
}
export type PolicyRefOrLiteral = string | number | boolean | null | FromRef | EnvRef;
export type PolicyExpr = string | {
    all: PolicyExpr[];
} | {
    any: PolicyExpr[];
} | {
    not: PolicyExpr;
} | {
    equals: [PolicyRefOrLiteral, PolicyRefOrLiteral];
} | {
    "not-equals": [PolicyRefOrLiteral, PolicyRefOrLiteral];
} | {
    exists: PolicyRefOrLiteral;
} | {
    truthy: PolicyRefOrLiteral;
} | {
    falsy: PolicyRefOrLiteral;
} | {
    in: [PolicyRefOrLiteral, PolicyRefOrLiteral[]];
};
export type PolicyMap = Record<string, PolicyExpr>;
export declare function isPolicyRef(value: unknown): value is PolicyRef;
export declare function isPolicyRefOrLiteral(value: unknown): value is PolicyRefOrLiteral;
export declare function collectPolicyRefs(expr: PolicyExpr): Set<string>;
