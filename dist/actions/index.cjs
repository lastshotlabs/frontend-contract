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

// src/actions/index.ts
var actions_exports = {};
__export(actions_exports, {
  ACTION_TYPES: () => ACTION_TYPES,
  actionSchema: () => actionSchema,
  apiActionSchema: () => apiActionSchema,
  branchActionSchema: () => branchActionSchema,
  closeModalActionSchema: () => closeModalActionSchema,
  confirmActionSchema: () => confirmActionSchema,
  copyActionSchema: () => copyActionSchema,
  copyToClipboardActionSchema: () => copyToClipboardActionSchema,
  downloadActionSchema: () => downloadActionSchema,
  emitActionSchema: () => emitActionSchema,
  forEachActionSchema: () => forEachActionSchema,
  logActionSchema: () => logActionSchema,
  navigateActionSchema: () => navigateActionSchema,
  navigateExternalActionSchema: () => navigateExternalActionSchema,
  openModalActionSchema: () => openModalActionSchema,
  refreshActionSchema: () => refreshActionSchema,
  resetFormActionSchema: () => resetFormActionSchema,
  runWorkflowActionSchema: () => runWorkflowActionSchema,
  scrollToActionSchema: () => scrollToActionSchema,
  setThemeActionSchema: () => setThemeActionSchema,
  setValueActionSchema: () => setValueActionSchema,
  submitFormActionSchema: () => submitFormActionSchema,
  toastActionSchema: () => toastActionSchema,
  trackActionSchema: () => trackActionSchema,
  wsSendActionSchema: () => wsSendActionSchema
});
module.exports = __toCommonJS(actions_exports);

// src/actions/types.ts
var import_zod3 = require("zod");

// src/resources/index.ts
var import_zod2 = require("zod");

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

// src/resources/index.ts
var httpMethodSchema = import_zod2.z.enum([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
]);
var resourceParamSchema = import_zod2.z.lazy(
  () => import_zod2.z.union([import_zod2.z.unknown(), fromRefSchema])
);
var resourceRefSchema = import_zod2.z.object({
  resource: import_zod2.z.string().min(1),
  params: import_zod2.z.record(resourceParamSchema).optional()
}).strict();
var resourceInvalidationTargetSchema = import_zod2.z.union([
  import_zod2.z.string().min(1),
  import_zod2.z.object({
    key: import_zod2.z.array(import_zod2.z.string().min(1)).min(1)
  }).strict()
]);
var optimisticTargetSchema = import_zod2.z.union([
  import_zod2.z.string().min(1),
  import_zod2.z.object({
    resource: import_zod2.z.string().min(1),
    params: import_zod2.z.record(import_zod2.z.unknown()).optional()
  }).strict()
]);
var optimisticConfigSchema = import_zod2.z.object({
  target: optimisticTargetSchema,
  merge: import_zod2.z.enum(["append", "prepend", "replace", "patch", "remove"]),
  idField: import_zod2.z.string().optional()
}).strict().superRefine((value, ctx) => {
  if ((value.merge === "replace" || value.merge === "patch" || value.merge === "remove") && !value.idField) {
    ctx.addIssue({
      code: import_zod2.z.ZodIssueCode.custom,
      path: ["idField"],
      message: `optimistic.idField is required when merge is "${value.merge}"`
    });
  }
});
var endpointTargetSchema = import_zod2.z.union([import_zod2.z.string(), resourceRefSchema]);
var dataSourceSchema = import_zod2.z.union([
  import_zod2.z.string(),
  fromRefSchema,
  resourceRefSchema
]);
var resourceConfigSchema = import_zod2.z.object({
  method: httpMethodSchema.optional(),
  endpoint: import_zod2.z.string().min(1),
  client: import_zod2.z.string().min(1).optional(),
  params: import_zod2.z.record(import_zod2.z.unknown()).optional(),
  cacheMs: import_zod2.z.number().int().min(0).optional(),
  pollMs: import_zod2.z.number().int().positive().optional(),
  refetchOnMount: import_zod2.z.boolean().optional(),
  refetchOnWindowFocus: import_zod2.z.boolean().optional(),
  retry: import_zod2.z.number().int().min(0).optional(),
  retryDelayMs: import_zod2.z.number().int().min(0).optional(),
  dependsOn: import_zod2.z.array(import_zod2.z.string().min(1)).optional(),
  invalidates: import_zod2.z.array(resourceInvalidationTargetSchema).optional(),
  optimistic: optimisticConfigSchema.optional()
}).strict();

// src/actions/types.ts
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
var fromRefSchema2 = import_zod3.z.object({
  from: import_zod3.z.string()
});
var exprValueSchema = import_zod3.z.object({
  expr: import_zod3.z.string()
});
var actionTimingFields = {
  debounce: import_zod3.z.number().int().positive().optional(),
  throttle: import_zod3.z.number().int().positive().optional()
};
var navigateActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("navigate"),
  to: import_zod3.z.string(),
  replace: import_zod3.z.boolean().optional()
}).extend(actionTimingFields).strict();
var navigateExternalActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("navigate-external"),
  to: import_zod3.z.string(),
  target: import_zod3.z.enum(["_self", "_blank"]).optional()
}).extend(actionTimingFields).strict();
var openModalActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("open-modal"),
  modal: import_zod3.z.string(),
  payload: import_zod3.z.unknown().optional(),
  resultTarget: import_zod3.z.string().optional()
}).extend(actionTimingFields).strict();
var closeModalActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("close-modal"),
  modal: import_zod3.z.string().optional(),
  result: import_zod3.z.unknown().optional()
}).extend(actionTimingFields).strict();
var refreshActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("refresh"),
  target: import_zod3.z.string()
}).extend(actionTimingFields).strict();
var setValueActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("set-value"),
  target: import_zod3.z.string(),
  value: import_zod3.z.unknown()
}).extend(actionTimingFields).strict();
var downloadActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("download"),
  endpoint: endpointTargetSchema,
  filename: import_zod3.z.string().optional()
}).extend(actionTimingFields).strict();
var copyActionSchema = import_zod3.z.lazy(
  () => import_zod3.z.object({
    type: import_zod3.z.literal("copy"),
    text: import_zod3.z.string(),
    onSuccess: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var copyToClipboardActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("copy-to-clipboard"),
  text: import_zod3.z.string(),
  toast: import_zod3.z.string().optional()
}).extend(actionTimingFields).strict();
var emitActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("emit"),
  event: import_zod3.z.string().min(1),
  payload: import_zod3.z.unknown().optional()
}).extend(actionTimingFields).strict();
var submitFormActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("submit-form"),
  formId: import_zod3.z.string().min(1)
}).extend(actionTimingFields).strict();
var resetFormActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("reset-form"),
  formId: import_zod3.z.string().min(1)
}).extend(actionTimingFields).strict();
var setThemeActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("set-theme"),
  flavor: import_zod3.z.string().optional(),
  mode: import_zod3.z.enum(["light", "dark", "system"]).optional()
}).extend(actionTimingFields).strict();
var confirmActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("confirm"),
  title: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  message: import_zod3.z.string().optional(),
  confirmLabel: import_zod3.z.string().optional(),
  cancelLabel: import_zod3.z.string().optional(),
  variant: import_zod3.z.enum(["default", "destructive"]).optional(),
  requireInput: import_zod3.z.string().optional(),
  onConfirm: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional(),
  onCancel: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional()
}).extend(actionTimingFields).strict();
var scrollToActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("scroll-to"),
  target: import_zod3.z.string().min(1),
  behavior: import_zod3.z.enum(["smooth", "instant", "auto"]).optional(),
  block: import_zod3.z.enum(["start", "center", "end", "nearest"]).optional()
}).extend(actionTimingFields).strict();
var runWorkflowActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("run-workflow"),
  workflow: import_zod3.z.string().min(1),
  input: import_zod3.z.record(import_zod3.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var branchActionSchema = import_zod3.z.lazy(
  () => import_zod3.z.object({
    type: import_zod3.z.literal("branch"),
    condition: import_zod3.z.string().min(1),
    then: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]),
    else: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var forEachActionSchema = import_zod3.z.lazy(
  () => import_zod3.z.object({
    type: import_zod3.z.literal("for-each"),
    items: import_zod3.z.union([import_zod3.z.array(import_zod3.z.unknown()), fromRefSchema2, exprValueSchema]),
    action: import_zod3.z.lazy(() => actionSchema),
    onComplete: import_zod3.z.lazy(() => actionSchema).optional()
  }).extend(actionTimingFields).strict()
);
var wsSendActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("ws-send"),
  event: import_zod3.z.string().min(1),
  data: import_zod3.z.union([import_zod3.z.record(import_zod3.z.unknown()), fromRefSchema2]).optional()
}).extend(actionTimingFields).strict();
function buildApiActionSchema() {
  return import_zod3.z.object({
    type: import_zod3.z.literal("api"),
    method: import_zod3.z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    endpoint: endpointTargetSchema,
    body: import_zod3.z.union([import_zod3.z.record(import_zod3.z.unknown()), fromRefSchema2]).optional(),
    params: import_zod3.z.record(import_zod3.z.unknown()).optional(),
    invalidates: import_zod3.z.array(import_zod3.z.string().min(1)).optional(),
    onSuccess: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional(),
    onError: import_zod3.z.union([import_zod3.z.lazy(() => actionSchema), import_zod3.z.array(import_zod3.z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict();
}
function buildToastActionSchema() {
  return import_zod3.z.object({
    type: import_zod3.z.literal("toast"),
    message: import_zod3.z.string(),
    variant: import_zod3.z.enum(["success", "error", "warning", "info"]).optional(),
    duration: import_zod3.z.number().optional(),
    action: import_zod3.z.object({
      label: import_zod3.z.string(),
      action: import_zod3.z.lazy(() => actionSchema)
    }).optional(),
    undo: import_zod3.z.object({
      label: import_zod3.z.string().default("Undo"),
      action: import_zod3.z.lazy(() => actionSchema),
      duration: import_zod3.z.number().int().positive().default(5e3)
    }).optional()
  }).extend(actionTimingFields).strict();
}
var trackActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("track"),
  event: import_zod3.z.string().min(1),
  props: import_zod3.z.record(import_zod3.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var logActionSchema = import_zod3.z.object({
  type: import_zod3.z.literal("log"),
  level: import_zod3.z.enum(["info", "warn", "error", "debug"]),
  message: import_zod3.z.string(),
  data: import_zod3.z.record(import_zod3.z.unknown()).optional()
}).extend(actionTimingFields).strict();
var apiActionSchema = buildApiActionSchema();
var toastActionSchema = buildToastActionSchema();
var actionSchema = import_zod3.z.lazy(
  () => import_zod3.z.union([
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACTION_TYPES,
  actionSchema,
  apiActionSchema,
  branchActionSchema,
  closeModalActionSchema,
  confirmActionSchema,
  copyActionSchema,
  copyToClipboardActionSchema,
  downloadActionSchema,
  emitActionSchema,
  forEachActionSchema,
  logActionSchema,
  navigateActionSchema,
  navigateExternalActionSchema,
  openModalActionSchema,
  refreshActionSchema,
  resetFormActionSchema,
  runWorkflowActionSchema,
  scrollToActionSchema,
  setThemeActionSchema,
  setValueActionSchema,
  submitFormActionSchema,
  toastActionSchema,
  trackActionSchema,
  wsSendActionSchema
});
//# sourceMappingURL=index.cjs.map