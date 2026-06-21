declare const FROM_REF_TRANSFORMS: readonly ["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"];
type FromRefTransform = (typeof FROM_REF_TRANSFORMS)[number];
interface FromRef {
    from: string;
    transform?: FromRefTransform;
    transformArg?: string | number;
}
interface ExprRef {
    expr: string;
}
declare function getNestedValue(obj: unknown, path: string): unknown;
declare function isFromRef(value: unknown): value is FromRef;
declare function isExprRef(value: unknown): value is ExprRef;
declare function parseDataString(data: string): [string, string];
declare function extractFromRefs(obj: unknown, prefix?: string): Map<string, FromRef>;
declare function applyTransform(value: unknown, transform?: string, arg?: string | number): unknown;
declare function applyResolved<T>(config: T, resolved: Map<string, unknown>): T;

export { type ExprRef as E, FROM_REF_TRANSFORMS as F, type FromRef as a, type FromRefTransform as b, applyResolved as c, applyTransform as d, extractFromRefs as e, isFromRef as f, getNestedValue as g, isExprRef as i, parseDataString as p };
