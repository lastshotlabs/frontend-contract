export { E as ExprRef, F as FROM_REF_TRANSFORMS, a as FromRef, b as FromRefTransform, c as applyResolved, d as applyTransform, e as extractFromRefs, g as getNestedValue, i as isExprRef, f as isFromRef, p as parseDataString } from '../from-B_VrpLQ5.js';
import { z } from 'zod';

declare const fromRefSchema: z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"]>>;
    transformArg: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strict", z.ZodTypeAny, {
    from: string;
    transform?: "string" | "number" | "boolean" | "uppercase" | "lowercase" | "trim" | "length" | "json" | "keys" | "values" | "first" | "last" | "count" | "sum" | "join" | "split" | "default" | undefined;
    transformArg?: string | number | undefined;
}, {
    from: string;
    transform?: "string" | "number" | "boolean" | "uppercase" | "lowercase" | "trim" | "length" | "json" | "keys" | "values" | "first" | "last" | "count" | "sum" | "join" | "split" | "default" | undefined;
    transformArg?: string | number | undefined;
}>;
declare const exprRefSchema: z.ZodObject<{
    expr: z.ZodString;
}, "strict", z.ZodTypeAny, {
    expr: string;
}, {
    expr: string;
}>;

export { exprRefSchema, fromRefSchema };
