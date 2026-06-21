import { z } from "zod";
export declare const fromRefSchema: z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"]>>;
    transformArg: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strict", z.ZodTypeAny, {
    from: string;
    transform?: "string" | "number" | "boolean" | "length" | "join" | "keys" | "values" | "default" | "uppercase" | "lowercase" | "trim" | "json" | "first" | "last" | "count" | "sum" | "split" | undefined;
    transformArg?: string | number | undefined;
}, {
    from: string;
    transform?: "string" | "number" | "boolean" | "length" | "join" | "keys" | "values" | "default" | "uppercase" | "lowercase" | "trim" | "json" | "first" | "last" | "count" | "sum" | "split" | undefined;
    transformArg?: string | number | undefined;
}>;
export declare const exprRefSchema: z.ZodObject<{
    expr: z.ZodString;
}, "strict", z.ZodTypeAny, {
    expr: string;
}, {
    expr: string;
}>;
