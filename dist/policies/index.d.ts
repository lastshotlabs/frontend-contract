import { EnvRef } from '../manifest/env.js';
import { a as FromRef } from '../from-B_VrpLQ5.js';
import 'zod';

interface PolicyRef {
    policy: string;
}
type PolicyRefOrLiteral = string | number | boolean | null | FromRef | EnvRef;
type PolicyExpr = string | {
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
type PolicyMap = Record<string, PolicyExpr>;
declare function isPolicyRef(value: unknown): value is PolicyRef;
declare function isPolicyRefOrLiteral(value: unknown): value is PolicyRefOrLiteral;
declare function collectPolicyRefs(expr: PolicyExpr): Set<string>;

export { type PolicyExpr, type PolicyMap, type PolicyRef, type PolicyRefOrLiteral, collectPolicyRefs, isPolicyRef, isPolicyRefOrLiteral };
