import { z } from "zod";
import {
  endpointTargetSchema,
  type EndpointTarget,
} from "../resources/index";

export const ACTION_TYPES = [
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
  "ws-send",
] as const;

export interface ActionBase {
  debounce?: number;
  throttle?: number;
}

const fromRefSchema = z.object({
  from: z.string(),
});

const exprValueSchema = z.object({
  expr: z.string(),
});

export interface NavigateAction extends ActionBase {
  type: "navigate";
  to: string;
  replace?: boolean;
}

export interface ApiAction extends ActionBase {
  type: "api";
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: EndpointTarget;
  body?: Record<string, unknown> | { from: string };
  params?: Record<string, unknown>;
  invalidates?: string[];
  onSuccess?: ActionConfig | ActionConfig[];
  onError?: ActionConfig | ActionConfig[];
}

export interface NavigateExternalAction extends ActionBase {
  type: "navigate-external";
  to: string;
  target?: "_self" | "_blank";
}

export interface OpenModalAction extends ActionBase {
  type: "open-modal";
  modal: string;
  payload?: unknown;
  resultTarget?: string;
}

export interface CloseModalAction extends ActionBase {
  type: "close-modal";
  modal?: string;
  result?: unknown;
}

export interface RefreshAction extends ActionBase {
  type: "refresh";
  target: string;
}

export interface SetValueAction extends ActionBase {
  type: "set-value";
  target: string;
  value: unknown;
}

export interface DownloadAction extends ActionBase {
  type: "download";
  endpoint: EndpointTarget;
  filename?: string;
}

export interface CopyAction extends ActionBase {
  type: "copy";
  text: string;
  onSuccess?: ActionConfig | ActionConfig[];
}

export interface CopyToClipboardAction extends ActionBase {
  type: "copy-to-clipboard";
  text: string;
  toast?: string;
}

export interface EmitAction extends ActionBase {
  type: "emit";
  event: string;
  payload?: unknown;
}

export interface SubmitFormAction extends ActionBase {
  type: "submit-form";
  formId: string;
}

export interface ResetFormAction extends ActionBase {
  type: "reset-form";
  formId: string;
}

export interface SetThemeAction extends ActionBase {
  type: "set-theme";
  flavor?: string;
  mode?: "light" | "dark" | "system";
}

export interface ConfirmAction extends ActionBase {
  type: "confirm";
  title?: string;
  description?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "destructive";
  requireInput?: string;
  onConfirm?: ActionConfig | ActionConfig[];
  onCancel?: ActionConfig | ActionConfig[];
}

export interface ScrollToAction extends ActionBase {
  type: "scroll-to";
  target: string;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
}

export interface ToastAction extends ActionBase {
  type: "toast";
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  duration?: number;
  action?: { label: string; action: ActionConfig };
  undo?: {
    label?: string;
    action: ActionConfig;
    duration?: number;
  };
}

export interface TrackAction extends ActionBase {
  type: "track";
  event: string;
  props?: Record<string, unknown>;
}

export interface LogAction extends ActionBase {
  type: "log";
  level: "info" | "warn" | "error" | "debug";
  message: string;
  data?: Record<string, unknown>;
}

export interface RunWorkflowAction extends ActionBase {
  type: "run-workflow";
  workflow: string;
  input?: Record<string, unknown>;
}

export interface BranchAction extends ActionBase {
  type: "branch";
  condition: string;
  then: ActionConfig | ActionConfig[];
  else?: ActionConfig | ActionConfig[];
}

export interface ForEachAction extends ActionBase {
  type: "for-each";
  items: unknown[] | { from: string } | { expr: string };
  action: ActionConfig;
  onComplete?: ActionConfig;
}

export interface WsSendAction extends ActionBase {
  type: "ws-send";
  event: string;
  data?: Record<string, unknown> | { from: string };
}

export type ActionConfig =
  | NavigateAction
  | NavigateExternalAction
  | ApiAction
  | OpenModalAction
  | CloseModalAction
  | RefreshAction
  | SetValueAction
  | DownloadAction
  | CopyAction
  | CopyToClipboardAction
  | EmitAction
  | SubmitFormAction
  | ResetFormAction
  | SetThemeAction
  | ConfirmAction
  | ScrollToAction
  | ToastAction
  | LogAction
  | TrackAction
  | RunWorkflowAction
  | BranchAction
  | ForEachAction
  | WsSendAction;

export type ActionExecuteFn = (
  action: ActionConfig | ActionConfig[],
  context?: Record<string, unknown>,
) => Promise<void>;

const actionTimingFields = {
  debounce: z.number().int().positive().optional(),
  throttle: z.number().int().positive().optional(),
} as const;

export const navigateActionSchema = z
  .object({
    type: z.literal("navigate"),
    to: z.string(),
    replace: z.boolean().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const navigateExternalActionSchema = z
  .object({
    type: z.literal("navigate-external"),
    to: z.string(),
    target: z.enum(["_self", "_blank"]).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const openModalActionSchema = z
  .object({
    type: z.literal("open-modal"),
    modal: z.string(),
    payload: z.unknown().optional(),
    resultTarget: z.string().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const closeModalActionSchema = z
  .object({
    type: z.literal("close-modal"),
    modal: z.string().optional(),
    result: z.unknown().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const refreshActionSchema = z
  .object({
    type: z.literal("refresh"),
    target: z.string(),
  })
  .extend(actionTimingFields)
  .strict();

export const setValueActionSchema = z
  .object({
    type: z.literal("set-value"),
    target: z.string(),
    value: z.unknown(),
  })
  .extend(actionTimingFields)
  .strict();

export const downloadActionSchema = z
  .object({
    type: z.literal("download"),
    endpoint: endpointTargetSchema,
    filename: z.string().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const copyActionSchema: z.ZodType<CopyAction> = z.lazy(() =>
  z
    .object({
      type: z.literal("copy"),
      text: z.string(),
      onSuccess: z
        .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
        .optional(),
    })
    .extend(actionTimingFields)
    .strict(),
);

export const copyToClipboardActionSchema = z
  .object({
    type: z.literal("copy-to-clipboard"),
    text: z.string(),
    toast: z.string().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const emitActionSchema = z
  .object({
    type: z.literal("emit"),
    event: z.string().min(1),
    payload: z.unknown().optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const submitFormActionSchema = z
  .object({
    type: z.literal("submit-form"),
    formId: z.string().min(1),
  })
  .extend(actionTimingFields)
  .strict();

export const resetFormActionSchema = z
  .object({
    type: z.literal("reset-form"),
    formId: z.string().min(1),
  })
  .extend(actionTimingFields)
  .strict();

export const setThemeActionSchema = z
  .object({
    type: z.literal("set-theme"),
    flavor: z.string().optional(),
    mode: z.enum(["light", "dark", "system"]).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const confirmActionSchema = z
  .object({
    type: z.literal("confirm"),
    title: z.string().optional(),
    description: z.string().optional(),
    message: z.string().optional(),
    confirmLabel: z.string().optional(),
    cancelLabel: z.string().optional(),
    variant: z.enum(["default", "destructive"]).optional(),
    requireInput: z.string().optional(),
    onConfirm: z
      .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
      .optional(),
    onCancel: z
      .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
      .optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const scrollToActionSchema = z
  .object({
    type: z.literal("scroll-to"),
    target: z.string().min(1),
    behavior: z.enum(["smooth", "instant", "auto"]).optional(),
    block: z.enum(["start", "center", "end", "nearest"]).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const runWorkflowActionSchema = z
  .object({
    type: z.literal("run-workflow"),
    workflow: z.string().min(1),
    input: z.record(z.unknown()).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const branchActionSchema: z.ZodType<BranchAction> = z.lazy(() =>
  z
    .object({
      type: z.literal("branch"),
      condition: z.string().min(1),
      then: z.union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))]),
      else: z
        .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
        .optional(),
    })
    .extend(actionTimingFields)
    .strict(),
);

export const forEachActionSchema: z.ZodType<ForEachAction> = z.lazy(() =>
  z
    .object({
      type: z.literal("for-each"),
      items: z.union([z.array(z.unknown()), fromRefSchema, exprValueSchema]),
      action: z.lazy(() => actionSchema),
      onComplete: z.lazy(() => actionSchema).optional(),
    })
    .extend(actionTimingFields)
    .strict(),
);

export const wsSendActionSchema = z
  .object({
    type: z.literal("ws-send"),
    event: z.string().min(1),
    data: z.union([z.record(z.unknown()), fromRefSchema]).optional(),
  })
  .extend(actionTimingFields)
  .strict();

function buildApiActionSchema(): z.ZodType<ApiAction> {
  return z
    .object({
      type: z.literal("api"),
      method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
      endpoint: endpointTargetSchema,
      body: z.union([z.record(z.unknown()), fromRefSchema]).optional(),
      params: z.record(z.unknown()).optional(),
      invalidates: z.array(z.string().min(1)).optional(),
      onSuccess: z
        .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
        .optional(),
      onError: z
        .union([z.lazy(() => actionSchema), z.array(z.lazy(() => actionSchema))])
        .optional(),
    })
    .extend(actionTimingFields)
    .strict();
}

function buildToastActionSchema(): z.ZodType<ToastAction> {
  return z
    .object({
      type: z.literal("toast"),
      message: z.string(),
      variant: z.enum(["success", "error", "warning", "info"]).optional(),
      duration: z.number().optional(),
      action: z
        .object({
          label: z.string(),
          action: z.lazy(() => actionSchema),
        })
        .optional(),
      undo: z
        .object({
          label: z.string().default("Undo"),
          action: z.lazy(() => actionSchema),
          duration: z.number().int().positive().default(5000),
        })
        .optional(),
    })
    .extend(actionTimingFields)
    .strict();
}

export const trackActionSchema = z
  .object({
    type: z.literal("track"),
    event: z.string().min(1),
    props: z.record(z.unknown()).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const logActionSchema = z
  .object({
    type: z.literal("log"),
    level: z.enum(["info", "warn", "error", "debug"]),
    message: z.string(),
    data: z.record(z.unknown()).optional(),
  })
  .extend(actionTimingFields)
  .strict();

export const apiActionSchema: z.ZodType<ApiAction> = buildApiActionSchema();
export const toastActionSchema: z.ZodType<ToastAction> =
  buildToastActionSchema();

export const actionSchema: z.ZodType<ActionConfig> = z.lazy(() =>
  z.union([
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
    wsSendActionSchema,
  ]),
) as z.ZodType<ActionConfig>;
