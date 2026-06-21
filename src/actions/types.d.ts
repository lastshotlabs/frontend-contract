import { z } from "zod";
import { type EndpointTarget } from "../resources/index";
export declare const ACTION_TYPES: readonly ["navigate", "navigate-external", "api", "open-modal", "close-modal", "refresh", "set-value", "download", "copy", "copy-to-clipboard", "emit", "submit-form", "reset-form", "set-theme", "confirm", "scroll-to", "toast", "log", "track", "run-workflow", "branch", "for-each", "ws-send"];
export interface ActionBase {
    debounce?: number;
    throttle?: number;
}
export interface NavigateAction extends ActionBase {
    type: "navigate";
    to: string;
    replace?: boolean;
}
export interface ApiAction extends ActionBase {
    type: "api";
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    endpoint: EndpointTarget;
    body?: Record<string, unknown> | {
        from: string;
    };
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
    action?: {
        label: string;
        action: ActionConfig;
    };
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
    items: unknown[] | {
        from: string;
    } | {
        expr: string;
    };
    action: ActionConfig;
    onComplete?: ActionConfig;
}
export interface WsSendAction extends ActionBase {
    type: "ws-send";
    event: string;
    data?: Record<string, unknown> | {
        from: string;
    };
}
export type ActionConfig = NavigateAction | NavigateExternalAction | ApiAction | OpenModalAction | CloseModalAction | RefreshAction | SetValueAction | DownloadAction | CopyAction | CopyToClipboardAction | EmitAction | SubmitFormAction | ResetFormAction | SetThemeAction | ConfirmAction | ScrollToAction | ToastAction | LogAction | TrackAction | RunWorkflowAction | BranchAction | ForEachAction | WsSendAction;
export type ActionExecuteFn = (action: ActionConfig | ActionConfig[], context?: Record<string, unknown>) => Promise<void>;
export declare const navigateActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"navigate">;
    to: z.ZodString;
    replace: z.ZodOptional<z.ZodBoolean>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "navigate";
    to: string;
    replace?: boolean | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "navigate";
    to: string;
    replace?: boolean | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const navigateExternalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"navigate-external">;
    to: z.ZodString;
    target: z.ZodOptional<z.ZodEnum<["_self", "_blank"]>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "navigate-external";
    to: string;
    target?: "_self" | "_blank" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "navigate-external";
    to: string;
    target?: "_self" | "_blank" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const openModalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"open-modal">;
    modal: z.ZodString;
    payload: z.ZodOptional<z.ZodUnknown>;
    resultTarget: z.ZodOptional<z.ZodString>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "open-modal";
    modal: string;
    payload?: unknown;
    resultTarget?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "open-modal";
    modal: string;
    payload?: unknown;
    resultTarget?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const closeModalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"close-modal">;
    modal: z.ZodOptional<z.ZodString>;
    result: z.ZodOptional<z.ZodUnknown>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "close-modal";
    modal?: string | undefined;
    result?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "close-modal";
    modal?: string | undefined;
    result?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const refreshActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"refresh">;
    target: z.ZodString;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "refresh";
    target: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "refresh";
    target: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const setValueActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"set-value">;
    target: z.ZodString;
    value: z.ZodUnknown;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "set-value";
    target: string;
    value?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "set-value";
    target: string;
    value?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const downloadActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"download">;
    endpoint: z.ZodUnion<[z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
    }, "strict", z.ZodTypeAny, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }>]>;
    filename: z.ZodOptional<z.ZodString>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "download";
    endpoint: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    filename?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "download";
    endpoint: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    filename?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const copyActionSchema: z.ZodType<CopyAction>;
export declare const copyToClipboardActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"copy-to-clipboard">;
    text: z.ZodString;
    toast: z.ZodOptional<z.ZodString>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "copy-to-clipboard";
    text: string;
    toast?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "copy-to-clipboard";
    text: string;
    toast?: string | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const emitActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"emit">;
    event: z.ZodString;
    payload: z.ZodOptional<z.ZodUnknown>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "emit";
    event: string;
    payload?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "emit";
    event: string;
    payload?: unknown;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const submitFormActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"submit-form">;
    formId: z.ZodString;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "submit-form";
    formId: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "submit-form";
    formId: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const resetFormActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"reset-form">;
    formId: z.ZodString;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "reset-form";
    formId: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "reset-form";
    formId: string;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const setThemeActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"set-theme">;
    flavor: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<["light", "dark", "system"]>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "set-theme";
    flavor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "set-theme";
    flavor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const confirmActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"confirm">;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    confirmLabel: z.ZodOptional<z.ZodString>;
    cancelLabel: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodEnum<["default", "destructive"]>>;
    requireInput: z.ZodOptional<z.ZodString>;
    onConfirm: z.ZodOptional<z.ZodUnion<[z.ZodLazy<z.ZodType<ActionConfig, z.ZodTypeDef, ActionConfig>>, z.ZodArray<z.ZodLazy<z.ZodType<ActionConfig, z.ZodTypeDef, ActionConfig>>, "many">]>>;
    onCancel: z.ZodOptional<z.ZodUnion<[z.ZodLazy<z.ZodType<ActionConfig, z.ZodTypeDef, ActionConfig>>, z.ZodArray<z.ZodLazy<z.ZodType<ActionConfig, z.ZodTypeDef, ActionConfig>>, "many">]>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "confirm";
    message?: string | undefined;
    variant?: "destructive" | "default" | undefined;
    title?: string | undefined;
    description?: string | undefined;
    confirmLabel?: string | undefined;
    cancelLabel?: string | undefined;
    requireInput?: string | undefined;
    onConfirm?: ActionConfig | ActionConfig[] | undefined;
    onCancel?: ActionConfig | ActionConfig[] | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "confirm";
    message?: string | undefined;
    variant?: "destructive" | "default" | undefined;
    title?: string | undefined;
    description?: string | undefined;
    confirmLabel?: string | undefined;
    cancelLabel?: string | undefined;
    requireInput?: string | undefined;
    onConfirm?: ActionConfig | ActionConfig[] | undefined;
    onCancel?: ActionConfig | ActionConfig[] | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const scrollToActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"scroll-to">;
    target: z.ZodString;
    behavior: z.ZodOptional<z.ZodEnum<["smooth", "instant", "auto"]>>;
    block: z.ZodOptional<z.ZodEnum<["start", "center", "end", "nearest"]>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "scroll-to";
    target: string;
    behavior?: "instant" | "smooth" | "auto" | undefined;
    block?: "start" | "center" | "end" | "nearest" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "scroll-to";
    target: string;
    behavior?: "instant" | "smooth" | "auto" | undefined;
    block?: "start" | "center" | "end" | "nearest" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const runWorkflowActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"run-workflow">;
    workflow: z.ZodString;
    input: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "run-workflow";
    workflow: string;
    input?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "run-workflow";
    workflow: string;
    input?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const branchActionSchema: z.ZodType<BranchAction>;
export declare const forEachActionSchema: z.ZodType<ForEachAction>;
export declare const wsSendActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"ws-send">;
    event: z.ZodString;
    data: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodObject<{
        from: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
    }, {
        from: string;
    }>]>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "ws-send";
    event: string;
    data?: Record<string, unknown> | {
        from: string;
    } | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "ws-send";
    event: string;
    data?: Record<string, unknown> | {
        from: string;
    } | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const trackActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"track">;
    event: z.ZodString;
    props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "track";
    event: string;
    props?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "track";
    event: string;
    props?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const logActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"log">;
    level: z.ZodEnum<["info", "warn", "error", "debug"]>;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
} & {
    readonly debounce: z.ZodOptional<z.ZodNumber>;
    readonly throttle: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    message: string;
    type: "log";
    level: "info" | "error" | "warn" | "debug";
    data?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    message: string;
    type: "log";
    level: "info" | "error" | "warn" | "debug";
    data?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
export declare const apiActionSchema: z.ZodType<ApiAction>;
export declare const toastActionSchema: z.ZodType<ToastAction>;
export declare const actionSchema: z.ZodType<ActionConfig>;
