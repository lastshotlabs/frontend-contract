export { E as ExprRef, F as FROM_REF_TRANSFORMS, a as FromRef, b as FromRefTransform, c as applyResolved, d as applyTransform, e as extractFromRefs, g as getNestedValue, i as isExprRef, f as isFromRef, p as parseDataString } from '../from-B_VrpLQ5.js';
import { z } from 'zod';

declare const fromRefSchema: z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        uppercase: "uppercase";
        lowercase: "lowercase";
        trim: "trim";
        length: "length";
        json: "json";
        keys: "keys";
        values: "values";
        first: "first";
        last: "last";
        count: "count";
        sum: "sum";
        join: "join";
        split: "split";
        default: "default";
    }>>;
    transformArg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
}, z.core.$strict>;
declare const exprRefSchema: z.ZodObject<{
    expr: z.ZodString;
}, z.core.$strict>;

export { exprRefSchema, fromRefSchema };
