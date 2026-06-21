import {
  endpointTargetSchema
} from "./chunk-4XCOAAV2.js";

// src/actions/types.ts
import { z } from "zod";
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
var fromRefSchema = z.object({
  from: z.string()
});
var exprValueSchema = z.object({
  expr: z.string()
});
var actionTimingFields = {
  debounce: z.number().int().positive().optional(),
  throttle: z.number().int().positive().optional()
};
var navigateActionSchema = z.object({
  type: z.literal("navigate"),
  to: z.string(),
  replace: z.boolean().optional()
}).extend(actionTimingFields).strict();
var navigateExternalActionSchema = z.object({
  type: z.literal("navigate-external"),
  to: z.string(),
  target: z.enum(["_self", "_blank"]).optional()
}).extend(actionTimingFields).strict();
var openModalActionSchema = z.object({
  type: z.literal("open-modal"),
  modal: z.string(),
  payload: z.unknown().optional(),
  resultTarget: z.string().optional()
}).extend(actionTimingFields).strict();
var closeModalActionSchema = z.object({
  type: z.literal("close-modal"),
  modal: z.string().optional(),
  result: z.unknown().optional()
}).extend(actionTimingFields).strict();
var refreshActionSchema = z.object({
  type: z.literal("refresh"),
  target: z.string()
}).extend(actionTimingFields).strict();
var setValueActionSchema = z.object({
  type: z.literal("set-value"),
  target: z.string(),
  value: z.unknown()
}).extend(actionTimingFields).strict();
var downloadActionSchema = z.object({
  type: z.literal("download"),
  endpoint: endpointTargetSchema,
  filename: z.string().optional()
}).extend(actionTimingFields).strict();
var copyActionSchema = z.lazy(
  () => z.object({
    type: z.literal("copy"),
    text: z.string(),
    onSuccess: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var copyToClipboardActionSchema = z.object({
  type: z.literal("copy-to-clipboard"),
  text: z.string(),
  toast: z.string().optional()
}).extend(actionTimingFields).strict();
var emitActionSchema = z.object({
  type: z.literal("emit"),
  event: z.string().min(1),
  payload: z.unknown().optional()
}).extend(actionTimingFields).strict();
var submitFormActionSchema = z.object({
  type: z.literal("submit-form"),
  formId: z.string().min(1)
}).extend(actionTimingFields).strict();
var resetFormActionSchema = z.object({
  type: z.literal("reset-form"),
  formId: z.string().min(1)
}).extend(actionTimingFields).strict();
var setThemeActionSchema = z.object({
  type: z.literal("set-theme"),
  flavor: z.string().optional(),
  mode: z.enum(["light", "dark", "system"]).optional()
}).extend(actionTimingFields).strict();
var confirmActionSchema = z.object({
  type: z.literal("confirm"),
  title: z.string().optional(),
  description: z.string().optional(),
  message: z.string().optional(),
  confirmLabel: z.string().optional(),
  cancelLabel: z.string().optional(),
  variant: z.enum(["default", "destructive"]).optional(),
  requireInput: z.string().optional(),
  onConfirm: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional(),
  onCancel: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional()
}).extend(actionTimingFields).strict();
var scrollToActionSchema = z.object({
  type: z.literal("scroll-to"),
  target: z.string().min(1),
  behavior: z.enum(["smooth", "instant", "auto"]).optional(),
  block: z.enum(["start", "center", "end", "nearest"]).optional()
}).extend(actionTimingFields).strict();
var runWorkflowActionSchema = z.object({
  type: z.literal("run-workflow"),
  workflow: z.string().min(1),
  input: z.record(z.unknown()).optional()
}).extend(actionTimingFields).strict();
var branchActionSchema = z.lazy(
  () => z.object({
    type: z.literal("branch"),
    condition: z.string().min(1),
    then: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]),
    else: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict()
);
var forEachActionSchema = z.lazy(
  () => z.object({
    type: z.literal("for-each"),
    items: z.union([z.array(z.unknown()), fromRefSchema, exprValueSchema]),
    action: z.lazy(() => actionSchema),
    onComplete: z.lazy(() => actionSchema).optional()
  }).extend(actionTimingFields).strict()
);
var wsSendActionSchema = z.object({
  type: z.literal("ws-send"),
  event: z.string().min(1),
  data: z.union([z.record(z.unknown()), fromRefSchema]).optional()
}).extend(actionTimingFields).strict();
function buildApiActionSchema() {
  return z.object({
    type: z.literal("api"),
    method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    endpoint: endpointTargetSchema,
    body: z.union([z.record(z.unknown()), fromRefSchema]).optional(),
    params: z.record(z.unknown()).optional(),
    invalidates: z.array(z.string().min(1)).optional(),
    onSuccess: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional(),
    onError: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]).optional()
  }).extend(actionTimingFields).strict();
}
function buildToastActionSchema() {
  return z.object({
    type: z.literal("toast"),
    message: z.string(),
    variant: z.enum(["success", "error", "warning", "info"]).optional(),
    duration: z.number().optional(),
    action: z.object({
      label: z.string(),
      action: z.lazy(() => actionSchema)
    }).optional(),
    undo: z.object({
      label: z.string().default("Undo"),
      action: z.lazy(() => actionSchema),
      duration: z.number().int().positive().default(5e3)
    }).optional()
  }).extend(actionTimingFields).strict();
}
var trackActionSchema = z.object({
  type: z.literal("track"),
  event: z.string().min(1),
  props: z.record(z.unknown()).optional()
}).extend(actionTimingFields).strict();
var logActionSchema = z.object({
  type: z.literal("log"),
  level: z.enum(["info", "warn", "error", "debug"]),
  message: z.string(),
  data: z.record(z.unknown()).optional()
}).extend(actionTimingFields).strict();
var apiActionSchema = buildApiActionSchema();
var toastActionSchema = buildToastActionSchema();
var actionSchema = z.lazy(
  () => z.union([
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

export {
  ACTION_TYPES,
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
  runWorkflowActionSchema,
  branchActionSchema,
  forEachActionSchema,
  wsSendActionSchema,
  trackActionSchema,
  logActionSchema,
  apiActionSchema,
  toastActionSchema,
  actionSchema
};
//# sourceMappingURL=chunk-XA6BHBV7.js.map