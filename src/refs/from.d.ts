export declare const FROM_REF_TRANSFORMS: readonly ["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"];
export type FromRefTransform = (typeof FROM_REF_TRANSFORMS)[number];
export interface FromRef {
    from: string;
    transform?: FromRefTransform;
    transformArg?: string | number;
}
export interface ExprRef {
    expr: string;
}
export declare function getNestedValue(obj: unknown, path: string): unknown;
export declare function isFromRef(value: unknown): value is FromRef;
export declare function isExprRef(value: unknown): value is ExprRef;
export declare function parseDataString(data: string): [string, string];
export declare function extractFromRefs(obj: unknown, prefix?: string): Map<string, FromRef>;
export declare function applyTransform(value: unknown, transform?: string, arg?: string | number): unknown;
export declare function applyResolved<T>(config: T, resolved: Map<string, unknown>): T;
