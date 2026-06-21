"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ACTION_TYPES: () => ACTION_TYPES,
  FROM_REF_TRANSFORMS: () => FROM_REF_TRANSFORMS,
  SURFACE_STATE_NAMES: () => SURFACE_STATE_NAMES,
  actionSchema: () => actionSchema,
  activeConfigSchema: () => activeConfigSchema,
  apiActionSchema: () => apiActionSchema,
  applyResolved: () => applyResolved,
  applyTransform: () => applyTransform,
  branchActionSchema: () => branchActionSchema,
  buildRequestUrl: () => buildRequestUrl,
  closeModalActionSchema: () => closeModalActionSchema,
  collectDependentResources: () => collectDependentResources,
  collectPolicyRefs: () => collectPolicyRefs,
  componentAlignItemsSchema: () => componentAlignItemsSchema,
  componentAnimationSchema: () => componentAnimationSchema,
  componentBackgroundSchema: () => componentBackgroundSchema,
  componentDisplaySchema: () => componentDisplaySchema,
  componentFlexDirectionSchema: () => componentFlexDirectionSchema,
  componentFlexWrapSchema: () => componentFlexWrapSchema,
  componentGradientSchema: () => componentGradientSchema,
  componentGradientStopSchema: () => componentGradientStopSchema,
  componentJustifyContentSchema: () => componentJustifyContentSchema,
  componentPositionSchema: () => componentPositionSchema,
  componentTextAlignSchema: () => componentTextAlignSchema,
  componentTokenOverridesSchema: () => componentTokenOverridesSchema,
  componentTokensSchema: () => componentTokensSchema,
  componentTransitionSchema: () => componentTransitionSchema,
  componentZIndexSchema: () => componentZIndexSchema,
  confirmActionSchema: () => confirmActionSchema,
  copyActionSchema: () => copyActionSchema,
  copyToClipboardActionSchema: () => copyToClipboardActionSchema,
  dataSourceSchema: () => dataSourceSchema,
  dimensionValueSchema: () => dimensionValueSchema,
  downloadActionSchema: () => downloadActionSchema,
  emitActionSchema: () => emitActionSchema,
  endpointTargetSchema: () => endpointTargetSchema,
  envRefSchema: () => envRefSchema,
  exitAnimationSchema: () => exitAnimationSchema,
  exprRefSchema: () => exprRefSchema,
  extendSharedComponentSchema: () => extendSharedComponentSchema,
  extractFromRefs: () => extractFromRefs,
  extractResourceRefs: () => extractResourceRefs,
  flavorOverrideSchema: () => flavorOverrideSchema,
  focusConfigSchema: () => focusConfigSchema,
  fontSchema: () => fontSchema,
  fontSizeEnum: () => fontSizeEnum,
  fontSizeValueSchema: () => fontSizeValueSchema,
  fontWeightEnum: () => fontWeightEnum,
  fontWeightValueSchema: () => fontWeightValueSchema,
  forEachActionSchema: () => forEachActionSchema,
  fromRefSchema: () => fromRefSchema,
  getDefaultEnvSource: () => getDefaultEnvSource,
  getNestedValue: () => getNestedValue,
  getResourceInvalidationTargets: () => getResourceInvalidationTargets,
  globalTokensSchema: () => globalTokensSchema,
  hoverConfigSchema: () => hoverConfigSchema,
  httpMethodSchema: () => httpMethodSchema,
  i18nConfigSchema: () => i18nConfigSchema,
  i18nDetectStrategySchema: () => i18nDetectStrategySchema,
  isEnvRef: () => isEnvRef,
  isExprRef: () => isExprRef,
  isFromRef: () => isFromRef,
  isOptimisticResourceTarget: () => isOptimisticResourceTarget,
  isPolicyRef: () => isPolicyRef,
  isPolicyRefOrLiteral: () => isPolicyRefOrLiteral,
  isQueryKeyInvalidationTarget: () => isQueryKeyInvalidationTarget,
  isResourceRef: () => isResourceRef,
  isTRef: () => isTRef,
  letterSpacingEnum: () => letterSpacingEnum,
  letterSpacingValueSchema: () => letterSpacingValueSchema,
  lineHeightEnum: () => lineHeightEnum,
  lineHeightValueSchema: () => lineHeightValueSchema,
  logActionSchema: () => logActionSchema,
  navigateActionSchema: () => navigateActionSchema,
  navigateExternalActionSchema: () => navigateExternalActionSchema,
  openModalActionSchema: () => openModalActionSchema,
  optimisticConfigSchema: () => optimisticConfigSchema,
  optimisticTargetSchema: () => optimisticTargetSchema,
  parseDataString: () => parseDataString,
  radiusEnum: () => radiusEnum,
  radiusSchema: () => radiusSchema,
  radiusValueSchema: () => radiusValueSchema,
  refreshActionSchema: () => refreshActionSchema,
  resetFormActionSchema: () => resetFormActionSchema,
  resolveEndpointTarget: () => resolveEndpointTarget,
  resolveEnvRef: () => resolveEnvRef,
  resourceConfigSchema: () => resourceConfigSchema,
  resourceInvalidationTargetSchema: () => resourceInvalidationTargetSchema,
  resourceParamSchema: () => resourceParamSchema,
  resourceRefSchema: () => resourceRefSchema,
  responsiveValue: () => responsiveValue,
  runWorkflowActionSchema: () => runWorkflowActionSchema,
  scrollToActionSchema: () => scrollToActionSchema,
  setThemeActionSchema: () => setThemeActionSchema,
  setValueActionSchema: () => setValueActionSchema,
  shadowEnum: () => shadowEnum,
  shadowSchema: () => shadowSchema,
  shadowValueSchema: () => shadowValueSchema,
  sharedBaseComponentSchema: () => sharedBaseComponentSchema,
  slotStateNameSchema: () => slotStateNameSchema,
  slotsSchema: () => slotsSchema,
  spacingEnum: () => spacingEnum,
  spacingSchema: () => spacingSchema,
  spacingValueSchema: () => spacingValueSchema,
  stateConfigMapSchema: () => stateConfigMapSchema,
  statePersistConfigSchema: () => statePersistConfigSchema,
  stateValueConfigSchema: () => stateValueConfigSchema,
  statefulElementSchema: () => statefulElementSchema,
  styleableElementFields: () => styleableElementFields,
  styleableElementSchema: () => styleableElementSchema,
  submitFormActionSchema: () => submitFormActionSchema,
  surfaceStateNameSchema: () => surfaceStateNameSchema,
  tRefSchema: () => tRefSchema,
  themeColorsSchema: () => themeColorsSchema,
  themeConfigSchema: () => themeConfigSchema,
  toastActionSchema: () => toastActionSchema,
  trackActionSchema: () => trackActionSchema,
  workflowConditionSchema: () => workflowConditionSchema,
  workflowDefinitionSchema: () => workflowDefinitionSchema,
  workflowNodeSchema: () => workflowNodeSchema,
  wsSendActionSchema: () => wsSendActionSchema
});
module.exports = __toCommonJS(src_exports);

// src/refs/from.ts
var FROM_REF_TRANSFORMS = [
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
  "default"
];
function getNestedValue(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return void 0;
    current = current[part];
  }
  return current;
}
function isFromRef(value) {
  return typeof value === "object" && value !== null && "from" in value && typeof value.from === "string";
}
function isExprRef(value) {
  return typeof value === "object" && value !== null && "expr" in value && typeof value.expr === "string";
}
function parseDataString(data) {
  const spaceIndex = data.indexOf(" ");
  if (spaceIndex === -1) return ["GET", data];
  return [data.slice(0, spaceIndex), data.slice(spaceIndex + 1)];
}
function extractFromRefs(obj, prefix = "") {
  const result = /* @__PURE__ */ new Map();
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
  for (const [key, value] of Object.entries(obj)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    const childRefs = extractFromRefs(value, childPath);
    for (const [refKey, refValue] of childRefs) {
      result.set(refKey, refValue);
    }
  }
  return result;
}
function applyTransform(value, transform, arg) {
  if (!transform || value === void 0 || value === null) return value;
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
      return Array.isArray(value) ? value.reduce((acc, item) => acc + Number(item), 0) : 0;
    case "join":
      return Array.isArray(value) ? value.join(arg != null ? String(arg) : ", ") : String(value);
    case "split":
      return String(value).split(arg != null ? String(arg) : ",");
    case "default":
      return value === void 0 || value === null || value === "" ? arg : value;
    default:
      return value;
  }
}
function applyResolved(config, resolved) {
  return applyResolvedInternal(config, resolved, "");
}
function applyResolvedInternal(obj, resolved, prefix) {
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
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    result[key] = applyResolvedInternal(value, resolved, childPath);
  }
  return result;
}

// src/refs/schema.ts
var import_zod = require("zod");
var fromRefSchema = import_zod.z.object({
  from: import_zod.z.string(),
  transform: import_zod.z.enum(FROM_REF_TRANSFORMS).optional(),
  transformArg: import_zod.z.union([import_zod.z.string(), import_zod.z.number()]).optional()
}).strict();
var exprRefSchema = import_zod.z.object({
  expr: import_zod.z.string()
}).strict();

// src/manifest/env.ts
var import_zod2 = require("zod");
var envRefSchema = import_zod2.z.object({
  env: import_zod2.z.string().min(1),
  default: import_zod2.z.string().optional()
}).strict();
function isEnvRef(value) {
  return typeof value === "object" && value !== null && "env" in value && typeof value.env === "string";
}
function resolveEnvRef(ref, env) {
  return env[ref.env] ?? ref.default;
}
function getDefaultEnvSource() {
  const processEnv = typeof process !== "undefined" && process.env ? process.env : {};
  return { ...processEnv };
}

// src/resources/index.ts
var import_zod3 = require("zod");
var httpMethodSchema = import_zod3.z.enum([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
]);
var resourceParamSchema = import_zod3.z.lazy(
  () => import_zod3.z.union([import_zod3.z.unknown(), fromRefSchema])
);
var resourceRefSchema = import_zod3.z.object({
  resource: import_zod3.z.string().min(1),
  params: import_zod3.z.record(resourceParamSchema).optional()
}).strict();
var resourceInvalidationTargetSchema = import_zod3.z.union([
  import_zod3.z.string().min(1),
  import_zod3.z.object({
    key: import_zod3.z.array(import_zod3.z.string().min(1)).min(1)
  }).strict()
]);
var optimisticTargetSchema = import_zod3.z.union([
  import_zod3.z.string().min(1),
  import_zod3.z.object({
    resource: import_zod3.z.string().min(1),
    params: import_zod3.z.record(import_zod3.z.unknown()).optional()
  }).strict()
]);
var optimisticConfigSchema = import_zod3.z.object({
  target: optimisticTargetSchema,
  merge: import_zod3.z.enum(["append", "prepend", "replace", "patch", "remove"]),
  idField: import_zod3.z.string().optional()
}).strict().superRefine((value, ctx) => {
  if ((value.merge === "replace" || value.merge === "patch" || value.merge === "remove") && !value.idField) {
    ctx.addIssue({
      code: import_zod3.z.ZodIssueCode.custom,
      path: ["idField"],
      message: `optimistic.idField is required when merge is "${value.merge}"`
    });
  }
});
var endpointTargetSchema = import_zod3.z.union([import_zod3.z.string(), resourceRefSchema]);
var dataSourceSchema = import_zod3.z.union([
  import_zod3.z.string(),
  fromRefSchema,
  resourceRefSchema
]);
var resourceConfigSchema = import_zod3.z.object({
  method: httpMethodSchema.optional(),
  endpoint: import_zod3.z.string().min(1),
  client: import_zod3.z.string().min(1).optional(),
  params: import_zod3.z.record(import_zod3.z.unknown()).optional(),
  cacheMs: import_zod3.z.number().int().min(0).optional(),
  pollMs: import_zod3.z.number().int().positive().optional(),
  refetchOnMount: import_zod3.z.boolean().optional(),
  refetchOnWindowFocus: import_zod3.z.boolean().optional(),
  retry: import_zod3.z.number().int().min(0).optional(),
  retryDelayMs: import_zod3.z.number().int().min(0).optional(),
  dependsOn: import_zod3.z.array(import_zod3.z.string().min(1)).optional(),
  invalidates: import_zod3.z.array(resourceInvalidationTargetSchema).optional(),
  optimistic: optimisticConfigSchema.optional()
}).strict();
function isResourceRef(value) {
  return typeof value === "object" && value !== null && "resource" in value && typeof value["resource"] === "string";
}
function isQueryKeyInvalidationTarget(value) {
  return typeof value !== "string";
}
function isOptimisticResourceTarget(value) {
  return typeof value !== "string";
}
function resolveEndpointTarget(target, resources, params, fallbackMethod = "GET") {
  if (typeof target === "string") {
    const hasExplicitMethod = target.includes(" ");
    const [method, endpoint] = parseDataString(target);
    return {
      method: hasExplicitMethod ? method.toUpperCase() : fallbackMethod,
      endpoint,
      params: params ?? {},
      client: "main"
    };
  }
  const resource = resources?.[target.resource];
  if (!resource) {
    throw new Error(`Unknown manifest resource "${target.resource}"`);
  }
  return {
    method: resource.method ?? fallbackMethod,
    endpoint: resource.endpoint,
    params: {
      ...resource.params ?? {},
      ...target.params ?? {},
      ...params ?? {}
    },
    client: resource.client ?? "main"
  };
}
function buildRequestUrl(endpoint, params = {}, pathParams = params) {
  const usedPathParams = /* @__PURE__ */ new Set();
  const interpolatedPath = endpoint.replace(
    /\{([^}]+)\}/g,
    (_, token) => {
      const [rawName, ...templateParts] = token.split(":");
      const name = rawName ?? "";
      const template = templateParts.join(":");
      if ((name === "date" || name === "today") && template) {
        return formatDateTemplate(/* @__PURE__ */ new Date(), template);
      }
      if (name === "date" || name === "today") {
        return formatDateTemplate(/* @__PURE__ */ new Date(), "YYYY-MM-DD");
      }
      usedPathParams.add(name);
      const value = pathParams[name];
      return value == null ? `{${token}}` : encodeURIComponent(String(value));
    }
  );
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (usedPathParams.has(key) || value == null) continue;
    query.set(key, String(value));
  }
  const queryString = query.toString();
  return queryString ? `${interpolatedPath}?${queryString}` : interpolatedPath;
}
function formatDateTemplate(date, template) {
  const parts = {
    YYYY: String(date.getUTCFullYear()),
    YY: String(date.getUTCFullYear()).slice(-2),
    MM: String(date.getUTCMonth() + 1).padStart(2, "0"),
    M: String(date.getUTCMonth() + 1),
    DD: String(date.getUTCDate()).padStart(2, "0"),
    D: String(date.getUTCDate()),
    HH: String(date.getUTCHours()).padStart(2, "0"),
    H: String(date.getUTCHours()),
    mm: String(date.getUTCMinutes()).padStart(2, "0"),
    m: String(date.getUTCMinutes()),
    ss: String(date.getUTCSeconds()).padStart(2, "0"),
    s: String(date.getUTCSeconds())
  };
  return template.replace(
    /YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s/g,
    (token) => parts[token] ?? token
  );
}
function extractResourceRefs(value, results = []) {
  if (isResourceRef(value)) {
    results.push(value);
    if (value.params) {
      extractResourceRefs(value.params, results);
    }
    return results;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      extractResourceRefs(item, results);
    }
    return results;
  }
  if (value && typeof value === "object") {
    for (const nested of Object.values(value)) {
      extractResourceRefs(nested, results);
    }
  }
  return results;
}
function collectDependentResources(resourceName, resources, visited = /* @__PURE__ */ new Set()) {
  if (!resources) {
    return [];
  }
  const dependents = [];
  for (const [candidateName, resource] of Object.entries(resources)) {
    if (candidateName !== resourceName && resource.dependsOn?.includes(resourceName) && !visited.has(candidateName)) {
      visited.add(candidateName);
      dependents.push(candidateName);
      dependents.push(
        ...collectDependentResources(candidateName, resources, visited)
      );
    }
  }
  return dependents;
}
function getResourceInvalidationTargets(resourceName, resources) {
  const resource = resources?.[resourceName];
  if (!resource) {
    return [];
  }
  const targets = /* @__PURE__ */ new Set();
  for (const target of resource.invalidates ?? []) {
    if (typeof target !== "string") {
      continue;
    }
    targets.add(target);
    for (const dependent of collectDependentResources(target, resources)) {
      targets.add(dependent);
    }
  }
  return [...targets];
}

// src/tokens/schema.ts
var import_zod4 = require("zod");
var themeColorsSchema = import_zod4.z.object({
  primary: import_zod4.z.string().optional(),
  secondary: import_zod4.z.string().optional(),
  muted: import_zod4.z.string().optional(),
  accent: import_zod4.z.string().optional(),
  destructive: import_zod4.z.string().optional(),
  success: import_zod4.z.string().optional(),
  warning: import_zod4.z.string().optional(),
  info: import_zod4.z.string().optional(),
  background: import_zod4.z.string().optional(),
  card: import_zod4.z.string().optional(),
  popover: import_zod4.z.string().optional(),
  sidebar: import_zod4.z.string().optional(),
  border: import_zod4.z.string().optional(),
  input: import_zod4.z.string().optional(),
  ring: import_zod4.z.string().optional(),
  chart: import_zod4.z.tuple([import_zod4.z.string(), import_zod4.z.string(), import_zod4.z.string(), import_zod4.z.string(), import_zod4.z.string()]).optional()
}).strict();
var radiusSchema = import_zod4.z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full"
]);
var spacingSchema = import_zod4.z.enum([
  "compact",
  "default",
  "comfortable",
  "spacious"
]);
var fontSourceSchema = import_zod4.z.object({
  family: import_zod4.z.string().min(1),
  source: import_zod4.z.enum(["google", "url"]),
  url: import_zod4.z.string().min(1).optional(),
  weights: import_zod4.z.array(import_zod4.z.number().int().positive()).min(1).optional()
}).strict().superRefine((value, ctx) => {
  if (value.source === "url" && !value.url) {
    ctx.addIssue({
      code: import_zod4.z.ZodIssueCode.custom,
      message: 'url is required when source is "url"',
      path: ["url"]
    });
  }
});
var fontRoleSchema = import_zod4.z.union([import_zod4.z.string(), fontSourceSchema]);
var fontSchema = import_zod4.z.object({
  sans: fontRoleSchema.optional(),
  mono: fontRoleSchema.optional(),
  display: fontRoleSchema.optional(),
  baseSize: import_zod4.z.number().min(10).max(24).optional(),
  scale: import_zod4.z.number().min(1.1).max(1.5).optional()
}).strict();
var componentTokensSchema = import_zod4.z.object({
  card: import_zod4.z.object({
    shadow: import_zod4.z.enum(["none", "sm", "md", "lg", "xl"]).optional(),
    padding: spacingSchema.optional(),
    border: import_zod4.z.boolean().optional()
  }).strict().optional(),
  table: import_zod4.z.object({
    striped: import_zod4.z.boolean().optional(),
    density: import_zod4.z.enum(["compact", "default", "comfortable"]).optional(),
    headerBackground: import_zod4.z.boolean().optional(),
    hoverRow: import_zod4.z.boolean().optional(),
    borderStyle: import_zod4.z.enum(["none", "horizontal", "grid"]).optional()
  }).strict().optional(),
  button: import_zod4.z.object({
    weight: import_zod4.z.enum(["light", "medium", "bold"]).optional(),
    uppercase: import_zod4.z.boolean().optional(),
    iconSize: import_zod4.z.enum(["sm", "md", "lg"]).optional()
  }).strict().optional(),
  input: import_zod4.z.object({
    size: import_zod4.z.enum(["sm", "md", "lg"]).optional(),
    variant: import_zod4.z.enum(["outline", "filled", "underline"]).optional()
  }).strict().optional(),
  modal: import_zod4.z.object({
    overlay: import_zod4.z.enum(["light", "dark", "blur"]).optional(),
    animation: import_zod4.z.enum(["fade", "scale", "slide-up", "none"]).optional()
  }).strict().optional(),
  badge: import_zod4.z.object({
    variant: import_zod4.z.enum(["solid", "outline", "soft"]).optional(),
    rounded: import_zod4.z.boolean().optional()
  }).strict().optional(),
  toast: import_zod4.z.object({
    position: import_zod4.z.enum(["top-right", "top-center", "bottom-right", "bottom-center"]).optional(),
    animation: import_zod4.z.enum(["slide", "fade", "pop"]).optional()
  }).strict().optional(),
  scrollbar: import_zod4.z.object({
    width: import_zod4.z.string().optional(),
    track: import_zod4.z.string().optional(),
    thumb: import_zod4.z.string().optional(),
    thumbHover: import_zod4.z.string().optional(),
    radius: import_zod4.z.enum(["none", "sm", "md", "lg", "full"]).optional()
  }).strict().optional()
}).strict();
var shadowSchema = import_zod4.z.enum(["none", "xs", "sm", "md", "lg", "xl"]);
var globalTokensSchema = import_zod4.z.object({
  shadow: shadowSchema.optional(),
  durations: import_zod4.z.object({
    instant: import_zod4.z.number().min(0).max(200).optional(),
    fast: import_zod4.z.number().min(50).max(500).optional(),
    normal: import_zod4.z.number().min(100).max(1e3).optional(),
    slow: import_zod4.z.number().min(200).max(2e3).optional()
  }).strict().optional(),
  easings: import_zod4.z.object({
    default: import_zod4.z.string().optional(),
    in: import_zod4.z.string().optional(),
    out: import_zod4.z.string().optional(),
    inOut: import_zod4.z.string().optional(),
    spring: import_zod4.z.string().optional()
  }).strict().optional(),
  opacity: import_zod4.z.object({
    disabled: import_zod4.z.number().min(0).max(1).optional(),
    hover: import_zod4.z.number().min(0).max(1).optional(),
    muted: import_zod4.z.number().min(0).max(1).optional()
  }).strict().optional(),
  lineHeight: import_zod4.z.object({
    none: import_zod4.z.number().optional(),
    tight: import_zod4.z.number().optional(),
    normal: import_zod4.z.number().optional(),
    relaxed: import_zod4.z.number().optional(),
    loose: import_zod4.z.number().optional()
  }).strict().optional(),
  tracking: import_zod4.z.object({
    tight: import_zod4.z.string().optional(),
    normal: import_zod4.z.string().optional(),
    wide: import_zod4.z.string().optional()
  }).strict().optional(),
  borderWidth: import_zod4.z.object({
    none: import_zod4.z.string().optional(),
    thin: import_zod4.z.string().optional(),
    default: import_zod4.z.string().optional(),
    thick: import_zod4.z.string().optional()
  }).strict().optional()
}).strict();
var flavorOverrideSchema = import_zod4.z.object({
  extends: import_zod4.z.string().min(1),
  displayName: import_zod4.z.string().optional(),
  colors: themeColorsSchema.optional(),
  darkColors: themeColorsSchema.optional(),
  radius: radiusSchema.optional(),
  spacing: spacingSchema.optional(),
  font: fontSchema.optional(),
  components: componentTokensSchema.optional()
}).strict();
var themeConfigSchema = import_zod4.z.object({
  flavor: import_zod4.z.string().optional(),
  flavors: import_zod4.z.record(flavorOverrideSchema).optional(),
  overrides: import_zod4.z.object({
    colors: themeColorsSchema.optional(),
    darkColors: themeColorsSchema.optional(),
    radius: radiusSchema.optional(),
    spacing: spacingSchema.optional(),
    font: fontSchema.optional(),
    components: componentTokensSchema.optional(),
    tokens: globalTokensSchema.optional()
  }).strict().optional(),
  mode: import_zod4.z.enum(["light", "dark", "system"]).optional(),
  editor: import_zod4.z.object({
    persist: import_zod4.z.union([
      import_zod4.z.literal("none"),
      import_zod4.z.literal("localStorage"),
      import_zod4.z.literal("sessionStorage"),
      import_zod4.z.object({ resource: import_zod4.z.string() }).strict()
    ]).default("localStorage")
  }).strict().optional()
}).strict();

// src/actions/types.ts
var import_zod5 = require("zod");
var ACTION_TYPES = [
  "navigate",
  "navigate-external",
  "api",
  "open-modal",
  "close-modal",
  "refresh",
  "set-value",
  "download",
  "copy",
  "copy-to-clipboard",
  "emit",
  "submit-form",
  "reset-form",
  "set-theme",
  "confirm",
  "scroll-to",
  "toast",
  "log",
  "track",
  "run-workflow",
  "branch",
  "for-each",
  "ws-send"
];
var fromRefSchema2 = import_zod5.z.object({
  from: import_zod5.z.string()
});
var exprValueSchema = import_zod5.z.object({
  expr: import_zod5.z.string()
});
var actionTimingFields = {
  debounce: import_zod5.z.number().int().positive().optional(),
  throttle: import_zod5.z.number().int().positive().optional()
};
var navigateActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("navigate"),
  to: import_zod5.z.string(),
  replace: import_zod5.z.boolean().optional()
}).extend(actionTimingFields).strict();
var navigateExternalActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("navigate-external"),
  to: import_zod5.z.string(),
  target: import_zod5.z.enum(["_self", "_blank"]).optional()
}).extend(actionTimingFields).strict();
var openModalActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("open-modal"),
  modal: import_zod5.z.string(),
  payload: import_zod5.z.unknown().optional(),
  resultTarget: import_zod5.z.string().optional()
}).extend(actionTimingFields).strict();
var closeModalActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("close-modal"),
  modal: import_zod5.z.string().optional(),
  result: import_zod5.z.unknown().optional()
}).extend(actionTimingFields).strict();
var refreshActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("refresh"),
  target: import_zod5.z.string()
}).extend(actionTimingFields).strict();
var setValueActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("set-value"),
  target: import_zod5.z.string(),
  value: import_zod5.z.unknown()
}).extend(actionTimingFields).strict();
var downloadActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("download"),
  endpoint: endpointTargetSchema,
  filename: import_zod5.z.string().optional()
}).extend(actionTimingFields).strict();
var copyActionSchema = import_zod5.z.lazy(
  () => import_zod5.z.object({
    type: import_zod5.z.literal("copy"),
    text: import_zod5.z.string(),
    onSuccess: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var copyToClipboardActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("copy-to-clipboard"),
  text: import_zod5.z.string(),
  toast: import_zod5.z.string().optional()
}).extend(actionTimingFields).strict();
var emitActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("emit"),
  event: import_zod5.z.string().min(1),
  payload: import_zod5.z.unknown().optional()
}).extend(actionTimingFields).strict();
var submitFormActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("submit-form"),
  formId: import_zod5.z.string().min(1)
}).extend(actionTimingFields).strict();
var resetFormActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("reset-form"),
  formId: import_zod5.z.string().min(1)
}).extend(actionTimingFields).strict();
var setThemeActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("set-theme"),
  flavor: import_zod5.z.string().optional(),
  mode: import_zod5.z.enum(["light", "dark", "system"]).optional()
}).extend(actionTimingFields).strict();
var confirmActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("confirm"),
  title: import_zod5.z.string().optional(),
  description: import_zod5.z.string().optional(),
  message: import_zod5.z.string().optional(),
  confirmLabel: import_zod5.z.string().optional(),
  cancelLabel: import_zod5.z.string().optional(),
  variant: import_zod5.z.enum(["default", "destructive"]).optional(),
  requireInput: import_zod5.z.string().optional(),
  onConfirm: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional(),
  onCancel: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional()
}).extend(actionTimingFields).strict();
var scrollToActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("scroll-to"),
  target: import_zod5.z.string().min(1),
  behavior: import_zod5.z.enum(["smooth", "instant", "auto"]).optional(),
  block: import_zod5.z.enum(["start", "center", "end", "nearest"]).optional()
}).extend(actionTimingFields).strict();
var runWorkflowActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("run-workflow"),
  workflow: import_zod5.z.string().min(1),
  input: import_zod5.z.record(import_zod5.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var branchActionSchema = import_zod5.z.lazy(
  () => import_zod5.z.object({
    type: import_zod5.z.literal("branch"),
    condition: import_zod5.z.string().min(1),
    then: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]),
    else: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var forEachActionSchema = import_zod5.z.lazy(
  () => import_zod5.z.object({
    type: import_zod5.z.literal("for-each"),
    items: import_zod5.z.union([import_zod5.z.array(import_zod5.z.unknown()), fromRefSchema2, exprValueSchema]),
    action: import_zod5.z.lazy(() => actionSchema),
    onComplete: import_zod5.z.lazy(() => actionSchema).optional()
  }).extend(actionTimingFields).strict()
);
var wsSendActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("ws-send"),
  event: import_zod5.z.string().min(1),
  data: import_zod5.z.union([import_zod5.z.record(import_zod5.z.unknown()), fromRefSchema2]).optional()
}).extend(actionTimingFields).strict();
function buildApiActionSchema() {
  return import_zod5.z.object({
    type: import_zod5.z.literal("api"),
    method: import_zod5.z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    endpoint: endpointTargetSchema,
    body: import_zod5.z.union([import_zod5.z.record(import_zod5.z.unknown()), fromRefSchema2]).optional(),
    params: import_zod5.z.record(import_zod5.z.unknown()).optional(),
    invalidates: import_zod5.z.array(import_zod5.z.string().min(1)).optional(),
    onSuccess: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional(),
    onError: import_zod5.z.union([import_zod5.z.lazy(() => actionSchema), import_zod5.z.array(import_zod5.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict();
}
function buildToastActionSchema() {
  return import_zod5.z.object({
    type: import_zod5.z.literal("toast"),
    message: import_zod5.z.string(),
    variant: import_zod5.z.enum(["success", "error", "warning", "info"]).optional(),
    duration: import_zod5.z.number().optional(),
    action: import_zod5.z.object({
      label: import_zod5.z.string(),
      action: import_zod5.z.lazy(() => actionSchema)
    }).optional(),
    undo: import_zod5.z.object({
      label: import_zod5.z.string().default("Undo"),
      action: import_zod5.z.lazy(() => actionSchema),
      duration: import_zod5.z.number().int().positive().default(5e3)
    }).optional()
  }).extend(actionTimingFields).strict();
}
var trackActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("track"),
  event: import_zod5.z.string().min(1),
  props: import_zod5.z.record(import_zod5.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var logActionSchema = import_zod5.z.object({
  type: import_zod5.z.literal("log"),
  level: import_zod5.z.enum(["info", "warn", "error", "debug"]),
  message: import_zod5.z.string(),
  data: import_zod5.z.record(import_zod5.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var apiActionSchema = buildApiActionSchema();
var toastActionSchema = buildToastActionSchema();
var actionSchema = import_zod5.z.lazy(
  () => import_zod5.z.union([
    navigateActionSchema,
    navigateExternalActionSchema,
    openModalActionSchema,
    closeModalActionSchema,
    refreshActionSchema,
    setValueActionSchema,
    downloadActionSchema,
    copyActionSchema,
    copyToClipboardActionSchema,
    emitActionSchema,
    submitFormActionSchema,
    resetFormActionSchema,
    setThemeActionSchema,
    confirmActionSchema,
    scrollToActionSchema,
    apiActionSchema,
    toastActionSchema,
    logActionSchema,
    trackActionSchema,
    runWorkflowActionSchema,
    branchActionSchema,
    forEachActionSchema,
    wsSendActionSchema
  ])
);

// src/i18n/schema.ts
var import_zod6 = require("zod");
var i18nDetectStrategySchema = import_zod6.z.enum([
  "state",
  "navigator",
  "default",
  "header"
]);
var i18nInlineStringsSchema = import_zod6.z.lazy(
  () => import_zod6.z.record(import_zod6.z.union([import_zod6.z.string(), i18nInlineStringsSchema]))
);
var tRefSchema = import_zod6.z.object({
  t: import_zod6.z.string().min(1),
  vars: import_zod6.z.record(import_zod6.z.unknown()).optional()
}).strict();
var i18nConfigSchema = import_zod6.z.object({
  default: import_zod6.z.string().min(1),
  locales: import_zod6.z.array(import_zod6.z.string().min(1)).min(1),
  strings: import_zod6.z.record(import_zod6.z.union([import_zod6.z.string(), i18nInlineStringsSchema])),
  detect: import_zod6.z.array(i18nDetectStrategySchema).optional()
}).strict();
function isTRef(value) {
  return typeof value === "object" && value !== null && "t" in value && typeof value.t === "string";
}

// src/policies/types.ts
function isPolicyRef(value) {
  return typeof value === "object" && value !== null && "policy" in value && typeof value.policy === "string";
}
function isPolicyRefOrLiteral(value) {
  return value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean" || isFromRef(value) || isEnvRef(value);
}
function collectPolicyRefs(expr) {
  const refs = /* @__PURE__ */ new Set();
  const walk = (value) => {
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

// src/state/schema.ts
var import_zod7 = require("zod");
var statePersistConfigSchema = import_zod7.z.union([
  import_zod7.z.literal("none"),
  import_zod7.z.literal("localStorage"),
  import_zod7.z.literal("sessionStorage"),
  import_zod7.z.object({
    storage: import_zod7.z.enum(["localStorage", "sessionStorage"]),
    key: import_zod7.z.string().optional()
  }).strict()
]);
var stateValueConfigSchema = import_zod7.z.object({
  scope: import_zod7.z.enum(["app", "route"]).optional(),
  data: endpointTargetSchema.optional(),
  default: import_zod7.z.unknown().optional(),
  compute: import_zod7.z.string().optional(),
  persist: statePersistConfigSchema.default("none")
}).strict().superRefine((value, ctx) => {
  if (value.compute && value.data) {
    ctx.addIssue({
      code: import_zod7.z.ZodIssueCode.custom,
      message: "State definitions cannot declare both compute and data."
    });
  }
});
var stateConfigMapSchema = import_zod7.z.record(stateValueConfigSchema);

// src/workflows/schema.ts
var import_zod8 = require("zod");
var workflowConditionSchema = import_zod8.z.object({
  left: import_zod8.z.unknown(),
  operator: import_zod8.z.enum(["truthy", "falsy", "equals", "not-equals", "exists"]).optional(),
  right: import_zod8.z.unknown().optional()
}).strict();
var workflowNodeSchema = import_zod8.z.lazy(
  () => import_zod8.z.union([
    actionSchema,
    import_zod8.z.object({
      type: import_zod8.z.literal("if"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      condition: workflowConditionSchema,
      then: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]),
      else: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]).optional()
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("wait"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      duration: import_zod8.z.number().int().min(0)
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("parallel"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      branches: import_zod8.z.array(import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)])).min(1)
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("retry"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      attempts: import_zod8.z.number().int().min(1),
      delayMs: import_zod8.z.number().int().min(0).optional(),
      backoffMultiplier: import_zod8.z.number().positive().optional(),
      step: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]),
      onFailure: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]).optional()
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("assign"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      values: import_zod8.z.record(import_zod8.z.unknown())
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("try"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      step: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]),
      catch: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]).optional(),
      finally: import_zod8.z.union([workflowNodeSchema, import_zod8.z.array(workflowNodeSchema)]).optional()
    }).strict(),
    import_zod8.z.object({
      type: import_zod8.z.literal("capture"),
      id: import_zod8.z.string().optional(),
      when: workflowConditionSchema.optional(),
      action: actionSchema,
      as: import_zod8.z.string().min(1)
    }).strict()
  ])
);
var workflowDefinitionSchema = import_zod8.z.union([
  workflowNodeSchema,
  import_zod8.z.array(workflowNodeSchema)
]);

// src/components/schema.ts
var import_zod9 = require("zod");
var componentTokenOverridesSchema = import_zod9.z.record(import_zod9.z.string());
var componentZIndexSchema = import_zod9.z.union([
  import_zod9.z.enum([
    "base",
    "dropdown",
    "sticky",
    "overlay",
    "modal",
    "popover",
    "toast"
  ]),
  import_zod9.z.number()
]);
var componentAnimationSchema = import_zod9.z.object({
  enter: import_zod9.z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale",
    "bounce"
  ]),
  duration: import_zod9.z.union([import_zod9.z.enum(["instant", "fast", "normal", "slow"]), import_zod9.z.number()]).optional(),
  delay: import_zod9.z.number().optional(),
  easing: import_zod9.z.union([import_zod9.z.enum(["default", "in", "out", "in-out", "spring"]), import_zod9.z.string()]).optional(),
  stagger: import_zod9.z.number().optional()
}).strict();
var componentGradientStopSchema = import_zod9.z.object({
  color: import_zod9.z.string(),
  position: import_zod9.z.string().optional()
}).strict();
var componentGradientSchema = import_zod9.z.object({
  type: import_zod9.z.enum(["linear", "radial", "conic"]).default("linear"),
  direction: import_zod9.z.string().optional(),
  stops: import_zod9.z.array(componentGradientStopSchema).min(2)
}).strict();
var componentBackgroundSchema = import_zod9.z.union([
  import_zod9.z.string(),
  import_zod9.z.object({
    image: import_zod9.z.string().optional(),
    overlay: import_zod9.z.string().optional(),
    gradient: componentGradientSchema.optional(),
    position: import_zod9.z.string().optional(),
    size: import_zod9.z.enum(["cover", "contain", "auto"]).optional(),
    fixed: import_zod9.z.boolean().optional()
  }).strict()
]);
var componentTransitionSchema = import_zod9.z.union([
  import_zod9.z.enum(["all", "colors", "opacity", "shadow", "transform"]),
  import_zod9.z.object({
    property: import_zod9.z.string().default("all"),
    duration: import_zod9.z.union([import_zod9.z.enum(["instant", "fast", "normal", "slow"]), import_zod9.z.number()]).optional(),
    easing: import_zod9.z.union([
      import_zod9.z.enum(["default", "in", "out", "in-out", "spring"]),
      import_zod9.z.string()
    ]).optional()
  }).strict()
]);
var spacingEnum = import_zod9.z.enum([
  "none",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl"
]);
var radiusEnum = import_zod9.z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full"
]);
var shadowEnum = import_zod9.z.enum(["none", "xs", "sm", "md", "lg", "xl"]);
var fontSizeEnum = import_zod9.z.enum([
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl"
]);
var fontWeightEnum = import_zod9.z.enum([
  "light",
  "normal",
  "medium",
  "semibold",
  "bold"
]);
var lineHeightEnum = import_zod9.z.enum([
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose"
]);
var letterSpacingEnum = import_zod9.z.enum(["tight", "normal", "wide"]);
var componentDisplaySchema = import_zod9.z.enum([
  "flex",
  "grid",
  "block",
  "inline",
  "inline-flex",
  "inline-grid",
  "none"
]);
var componentFlexDirectionSchema = import_zod9.z.enum([
  "row",
  "column",
  "row-reverse",
  "column-reverse"
]);
var componentAlignItemsSchema = import_zod9.z.enum([
  "start",
  "center",
  "end",
  "stretch",
  "baseline"
]);
var componentJustifyContentSchema = import_zod9.z.enum([
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly"
]);
var componentTextAlignSchema = import_zod9.z.enum([
  "left",
  "center",
  "right",
  "justify"
]);
var componentPositionSchema = import_zod9.z.enum([
  "relative",
  "absolute",
  "fixed",
  "sticky"
]);
var componentFlexWrapSchema = import_zod9.z.enum([
  "wrap",
  "nowrap",
  "wrap-reverse"
]);
var spacingValueSchema = import_zod9.z.union([
  spacingEnum,
  import_zod9.z.string(),
  import_zod9.z.number()
]);
var radiusValueSchema = import_zod9.z.union([radiusEnum, import_zod9.z.string(), import_zod9.z.number()]);
var shadowValueSchema = import_zod9.z.union([shadowEnum, import_zod9.z.string()]);
var fontSizeValueSchema = import_zod9.z.union([
  fontSizeEnum,
  import_zod9.z.string(),
  import_zod9.z.number()
]);
var fontWeightValueSchema = import_zod9.z.union([
  fontWeightEnum,
  import_zod9.z.number(),
  import_zod9.z.string()
]);
var lineHeightValueSchema = import_zod9.z.union([
  lineHeightEnum,
  import_zod9.z.string(),
  import_zod9.z.number()
]);
var letterSpacingValueSchema = import_zod9.z.union([
  letterSpacingEnum,
  import_zod9.z.string(),
  import_zod9.z.number()
]);
var dimensionValueSchema = import_zod9.z.union([import_zod9.z.string(), import_zod9.z.number()]);
function responsiveValue(valueSchema) {
  return import_zod9.z.union([
    valueSchema,
    import_zod9.z.object({
      default: valueSchema,
      sm: valueSchema.optional(),
      md: valueSchema.optional(),
      lg: valueSchema.optional(),
      xl: valueSchema.optional(),
      "2xl": valueSchema.optional()
    }).strict()
  ]);
}
var responsiveSpacing = responsiveValue(spacingValueSchema);
var responsiveDimension = responsiveValue(dimensionValueSchema);
var responsiveFontSize = responsiveValue(fontSizeValueSchema);
var responsiveDisplay = responsiveValue(componentDisplaySchema);
var responsiveFlexDirection = responsiveValue(componentFlexDirectionSchema);
var hoverConfigSchema = import_zod9.z.object({
  bg: import_zod9.z.string().optional(),
  color: import_zod9.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  borderRadius: radiusValueSchema.optional(),
  border: import_zod9.z.string().optional(),
  opacity: import_zod9.z.number().min(0).max(1).optional(),
  transform: import_zod9.z.string().optional(),
  scale: import_zod9.z.number().optional()
}).strict();
var focusConfigSchema = import_zod9.z.object({
  bg: import_zod9.z.string().optional(),
  color: import_zod9.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  ring: import_zod9.z.union([import_zod9.z.boolean(), import_zod9.z.string()]).optional(),
  outline: import_zod9.z.string().optional()
}).strict();
var activeConfigSchema = import_zod9.z.object({
  bg: import_zod9.z.string().optional(),
  color: import_zod9.z.string().optional(),
  transform: import_zod9.z.string().optional(),
  scale: import_zod9.z.number().optional()
}).strict();
var styleableElementFields = {
  padding: responsiveSpacing.optional(),
  paddingX: responsiveSpacing.optional(),
  paddingY: responsiveSpacing.optional(),
  margin: responsiveSpacing.optional(),
  marginX: responsiveSpacing.optional(),
  marginY: responsiveSpacing.optional(),
  gap: responsiveSpacing.optional(),
  width: responsiveDimension.optional(),
  minWidth: responsiveDimension.optional(),
  maxWidth: responsiveDimension.optional(),
  height: responsiveDimension.optional(),
  minHeight: responsiveDimension.optional(),
  maxHeight: responsiveDimension.optional(),
  bg: import_zod9.z.union([import_zod9.z.string(), componentBackgroundSchema]).optional(),
  color: import_zod9.z.string().optional(),
  borderRadius: radiusValueSchema.optional(),
  border: import_zod9.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  opacity: import_zod9.z.number().min(0).max(1).optional(),
  overflow: import_zod9.z.enum(["auto", "hidden", "scroll", "visible"]).optional(),
  position: componentPositionSchema.optional(),
  inset: import_zod9.z.union([import_zod9.z.string(), import_zod9.z.number()]).optional(),
  display: responsiveDisplay.optional(),
  flexDirection: responsiveFlexDirection.optional(),
  alignItems: componentAlignItemsSchema.optional(),
  justifyContent: componentJustifyContentSchema.optional(),
  flexWrap: componentFlexWrapSchema.optional(),
  flex: import_zod9.z.union([import_zod9.z.string(), import_zod9.z.number()]).optional(),
  textAlign: componentTextAlignSchema.optional(),
  fontSize: responsiveFontSize.optional(),
  fontWeight: fontWeightValueSchema.optional(),
  lineHeight: lineHeightValueSchema.optional(),
  letterSpacing: letterSpacingValueSchema.optional(),
  hover: hoverConfigSchema.optional(),
  focus: focusConfigSchema.optional(),
  active: activeConfigSchema.optional()
};
var styleableElementSchema = import_zod9.z.object(styleableElementFields).strict();
var SURFACE_STATE_NAMES = [
  "hover",
  "focus",
  "open",
  "selected",
  "current",
  "active",
  "completed",
  "invalid",
  "disabled"
];
var surfaceStateNameSchema = import_zod9.z.enum(SURFACE_STATE_NAMES);
var slotStateNameSchema = surfaceStateNameSchema;
var statefulElementSchema = styleableElementSchema.extend({
  states: import_zod9.z.record(surfaceStateNameSchema, styleableElementSchema.partial()).optional()
});
function slotsSchema(slotNames) {
  return import_zod9.z.object(
    Object.fromEntries(
      slotNames.map((slot) => [slot, statefulElementSchema.optional()])
    )
  ).strict();
}
var exitAnimationSchema = import_zod9.z.object({
  preset: import_zod9.z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale"
  ]).optional(),
  duration: import_zod9.z.enum(["instant", "fast", "normal", "slow"]).optional()
}).strict();
var sharedBaseComponentSchema = import_zod9.z.object({
  id: import_zod9.z.string().optional(),
  tokens: componentTokenOverridesSchema.optional(),
  visibleWhen: import_zod9.z.string().optional(),
  visible: import_zod9.z.union([import_zod9.z.boolean(), fromRefSchema, exprRefSchema]).optional(),
  zIndex: componentZIndexSchema.optional(),
  animation: componentAnimationSchema.optional(),
  glass: import_zod9.z.boolean().optional(),
  background: componentBackgroundSchema.optional(),
  transition: componentTransitionSchema.optional(),
  exitAnimation: exitAnimationSchema.optional(),
  span: responsiveValue(import_zod9.z.number().int().min(1).max(12)).optional(),
  slots: slotsSchema(["root"]).optional(),
  ...styleableElementFields
});
function extendSharedComponentSchema(shape) {
  return sharedBaseComponentSchema.extend(shape);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACTION_TYPES,
  FROM_REF_TRANSFORMS,
  SURFACE_STATE_NAMES,
  actionSchema,
  activeConfigSchema,
  apiActionSchema,
  applyResolved,
  applyTransform,
  branchActionSchema,
  buildRequestUrl,
  closeModalActionSchema,
  collectDependentResources,
  collectPolicyRefs,
  componentAlignItemsSchema,
  componentAnimationSchema,
  componentBackgroundSchema,
  componentDisplaySchema,
  componentFlexDirectionSchema,
  componentFlexWrapSchema,
  componentGradientSchema,
  componentGradientStopSchema,
  componentJustifyContentSchema,
  componentPositionSchema,
  componentTextAlignSchema,
  componentTokenOverridesSchema,
  componentTokensSchema,
  componentTransitionSchema,
  componentZIndexSchema,
  confirmActionSchema,
  copyActionSchema,
  copyToClipboardActionSchema,
  dataSourceSchema,
  dimensionValueSchema,
  downloadActionSchema,
  emitActionSchema,
  endpointTargetSchema,
  envRefSchema,
  exitAnimationSchema,
  exprRefSchema,
  extendSharedComponentSchema,
  extractFromRefs,
  extractResourceRefs,
  flavorOverrideSchema,
  focusConfigSchema,
  fontSchema,
  fontSizeEnum,
  fontSizeValueSchema,
  fontWeightEnum,
  fontWeightValueSchema,
  forEachActionSchema,
  fromRefSchema,
  getDefaultEnvSource,
  getNestedValue,
  getResourceInvalidationTargets,
  globalTokensSchema,
  hoverConfigSchema,
  httpMethodSchema,
  i18nConfigSchema,
  i18nDetectStrategySchema,
  isEnvRef,
  isExprRef,
  isFromRef,
  isOptimisticResourceTarget,
  isPolicyRef,
  isPolicyRefOrLiteral,
  isQueryKeyInvalidationTarget,
  isResourceRef,
  isTRef,
  letterSpacingEnum,
  letterSpacingValueSchema,
  lineHeightEnum,
  lineHeightValueSchema,
  logActionSchema,
  navigateActionSchema,
  navigateExternalActionSchema,
  openModalActionSchema,
  optimisticConfigSchema,
  optimisticTargetSchema,
  parseDataString,
  radiusEnum,
  radiusSchema,
  radiusValueSchema,
  refreshActionSchema,
  resetFormActionSchema,
  resolveEndpointTarget,
  resolveEnvRef,
  resourceConfigSchema,
  resourceInvalidationTargetSchema,
  resourceParamSchema,
  resourceRefSchema,
  responsiveValue,
  runWorkflowActionSchema,
  scrollToActionSchema,
  setThemeActionSchema,
  setValueActionSchema,
  shadowEnum,
  shadowSchema,
  shadowValueSchema,
  sharedBaseComponentSchema,
  slotStateNameSchema,
  slotsSchema,
  spacingEnum,
  spacingSchema,
  spacingValueSchema,
  stateConfigMapSchema,
  statePersistConfigSchema,
  stateValueConfigSchema,
  statefulElementSchema,
  styleableElementFields,
  styleableElementSchema,
  submitFormActionSchema,
  surfaceStateNameSchema,
  tRefSchema,
  themeColorsSchema,
  themeConfigSchema,
  toastActionSchema,
  trackActionSchema,
  workflowConditionSchema,
  workflowDefinitionSchema,
  workflowNodeSchema,
  wsSendActionSchema
});
//# sourceMappingURL=index.cjs.map