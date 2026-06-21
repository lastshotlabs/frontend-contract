export const FROM_REF_TRANSFORMS = [
  "uppercase",
  "lowercase",
  "trim",
  "length",
  "number",
  "boolean",
  "string",
  "json",
  "keys",
  "values",
  "first",
  "last",
  "count",
  "sum",
  "join",
  "split",
  "default",
] as const;

export type FromRefTransform = (typeof FROM_REF_TRANSFORMS)[number];

export interface FromRef {
  from: string;
  transform?: FromRefTransform;
  transformArg?: string | number;
}

export interface ExprRef {
  expr: string;
}

export function getNestedValue(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

export function isFromRef(value: unknown): value is FromRef {
  return (
    typeof value === "object" &&
    value !== null &&
    "from" in value &&
    typeof (value as FromRef).from === "string"
  );
}

export function isExprRef(value: unknown): value is ExprRef {
  return (
    typeof value === "object" &&
    value !== null &&
    "expr" in value &&
    typeof (value as ExprRef).expr === "string"
  );
}

export function parseDataString(data: string): [string, string] {
  const spaceIndex = data.indexOf(" ");
  if (spaceIndex === -1) return ["GET", data];
  return [data.slice(0, spaceIndex), data.slice(spaceIndex + 1)];
}

export function extractFromRefs(
  obj: unknown,
  prefix = "",
): Map<string, FromRef> {
  const result = new Map<string, FromRef>();

  if (obj == null || typeof obj !== "object") return result;

  if (isFromRef(obj)) {
    result.set(prefix, obj);
    return result;
  }

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i += 1) {
      const childPath = prefix ? `${prefix}.${i}` : `${i}`;
      const childRefs = extractFromRefs(obj[i], childPath);
      for (const [key, value] of childRefs) {
        result.set(key, value);
      }
    }
    return result;
  }

  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    const childRefs = extractFromRefs(value, childPath);
    for (const [refKey, refValue] of childRefs) {
      result.set(refKey, refValue);
    }
  }

  return result;
}

export function applyTransform(
  value: unknown,
  transform?: string,
  arg?: string | number,
): unknown {
  if (!transform || value === undefined || value === null) return value;

  switch (transform) {
    case "uppercase":
      return String(value).toUpperCase();
    case "lowercase":
      return String(value).toLowerCase();
    case "trim":
      return String(value).trim();
    case "length":
      return Array.isArray(value) ? value.length : String(value).length;
    case "number":
      return Number(value);
    case "boolean":
      return Boolean(value);
    case "string":
      return String(value);
    case "json":
      try {
        return JSON.parse(String(value));
      } catch {
        return value;
      }
    case "keys":
      return typeof value === "object" && value ? Object.keys(value) : [];
    case "values":
      return typeof value === "object" && value ? Object.values(value) : [];
    case "first":
      return Array.isArray(value) ? value[0] : value;
    case "last":
      return Array.isArray(value) ? value[value.length - 1] : value;
    case "count":
      return Array.isArray(value) ? value.length : 0;
    case "sum":
      return Array.isArray(value)
        ? value.reduce((acc: number, item: unknown) => acc + Number(item), 0)
        : 0;
    case "join":
      return Array.isArray(value)
        ? value.join(arg != null ? String(arg) : ", ")
        : String(value);
    case "split":
      return String(value).split(arg != null ? String(arg) : ",");
    case "default":
      return value === undefined || value === null || value === ""
        ? arg
        : value;
    default:
      return value;
  }
}

export function applyResolved<T>(config: T, resolved: Map<string, unknown>): T {
  return applyResolvedInternal(config, resolved, "") as T;
}

function applyResolvedInternal(
  obj: unknown,
  resolved: Map<string, unknown>,
  prefix: string,
): unknown {
  if (obj == null || typeof obj !== "object") return obj;

  if (isFromRef(obj) && resolved.has(prefix)) {
    return resolved.get(prefix);
  }

  if (Array.isArray(obj)) {
    return obj.map((item, index) => {
      const childPath = prefix ? `${prefix}.${index}` : `${index}`;
      return applyResolvedInternal(item, resolved, childPath);
    });
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    result[key] = applyResolvedInternal(value, resolved, childPath);
  }
  return result;
}
