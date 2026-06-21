import { z } from 'zod';
import { EndpointTarget } from '../resources/index.cjs';
import '../from-B_VrpLQ5.cjs';

declare const ACTION_TYPES: readonly ["navigate", "navigate-external", "api", "open-modal", "close-modal", "refresh", "set-value", "download", "copy", "copy-to-clipboard", "emit", "submit-form", "reset-form", "set-theme", "confirm", "scroll-to", "toast", "log", "track", "run-workflow", "branch", "for-each", "ws-send"];
interface ActionBase {
    debounce?: number;
    throttle?: number;
}
interface NavigateAction extends ActionBase {
    type: "navigate";
    to: string;
    replace?: boolean;
}
interface ApiAction extends ActionBase {
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
interface NavigateExternalAction extends ActionBase {
    type: "navigate-external";
    to: string;
    target?: "_self" | "_blank";
}
interface OpenModalAction extends ActionBase {
    type: "open-modal";
    modal: string;
    payload?: unknown;
    resultTarget?: string;
}
interface CloseModalAction extends ActionBase {
    type: "close-modal";
    modal?: string;
    result?: unknown;
}
interface RefreshAction extends ActionBase {
    type: "refresh";
    target: string;
}
interface SetValueAction extends ActionBase {
    type: "set-value";
    target: string;
    value: unknown;
}
interface DownloadAction extends ActionBase {
    type: "download";
    endpoint: EndpointTarget;
    filename?: string;
}
interface CopyAction extends ActionBase {
    type: "copy";
    text: string;
    onSuccess?: ActionConfig | ActionConfig[];
}
interface CopyToClipboardAction extends ActionBase {
    type: "copy-to-clipboard";
    text: string;
    toast?: string;
}
interface EmitAction extends ActionBase {
    type: "emit";
    event: string;
    payload?: unknown;
}
interface SubmitFormAction extends ActionBase {
    type: "submit-form";
    formId: string;
}
interface ResetFormAction extends ActionBase {
    type: "reset-form";
    formId: string;
}
interface SetThemeAction extends ActionBase {
    type: "set-theme";
    flavor?: string;
    mode?: "light" | "dark" | "system";
}
interface ConfirmAction extends ActionBase {
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
interface ScrollToAction extends ActionBase {
    type: "scroll-to";
    target: string;
    behavior?: "smooth" | "instant" | "auto";
    block?: "start" | "center" | "end" | "nearest";
}
interface ToastAction extends ActionBase {
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
interface TrackAction extends ActionBase {
    type: "track";
    event: string;
    props?: Record<string, unknown>;
}
interface LogAction extends ActionBase {
    type: "log";
    level: "info" | "warn" | "error" | "debug";
    message: string;
    data?: Record<string, unknown>;
}
interface RunWorkflowAction extends ActionBase {
    type: "run-workflow";
    workflow: string;
    input?: Record<string, unknown>;
}
interface BranchAction extends ActionBase {
    type: "branch";
    condition: string;
    then: ActionConfig | ActionConfig[];
    else?: ActionConfig | ActionConfig[];
}
interface ForEachAction extends ActionBase {
    type: "for-each";
    items: unknown[] | {
        from: string;
    } | {
        expr: string;
    };
    action: ActionConfig;
    onComplete?: ActionConfig;
}
interface WsSendAction extends ActionBase {
    type: "ws-send";
    event: string;
    data?: Record<string, unknown> | {
        from: string;
    };
}
type ActionConfig = NavigateAction | NavigateExternalAction | ApiAction | OpenModalAction | CloseModalAction | RefreshAction | SetValueAction | DownloadAction | CopyAction | CopyToClipboardAction | EmitAction | SubmitFormAction | ResetFormAction | SetThemeAction | ConfirmAction | ScrollToAction | ToastAction | LogAction | TrackAction | RunWorkflowAction | BranchAction | ForEachAction | WsSendAction;
type ActionExecuteFn = (action: ActionConfig | ActionConfig[], context?: Record<string, unknown>) => Promise<void>;
declare const navigateActionSchema: z.ZodObject<{
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
declare const navigateExternalActionSchema: z.ZodObject<{
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
declare const openModalActionSchema: z.ZodObject<{
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
declare const closeModalActionSchema: z.ZodObject<{
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
declare const refreshActionSchema: z.ZodObject<{
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
declare const setValueActionSchema: z.ZodObject<{
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
declare const downloadActionSchema: z.ZodObject<{
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
declare const copyActionSchema: z.ZodType<CopyAction>;
declare const copyToClipboardActionSchema: z.ZodObject<{
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
declare const emitActionSchema: z.ZodObject<{
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
declare const submitFormActionSchema: z.ZodObject<{
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
declare const resetFormActionSchema: z.ZodObject<{
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
declare const setThemeActionSchema: z.ZodObject<{
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
declare const confirmActionSchema: z.ZodObject<{
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
    title?: string | undefined;
    description?: string | undefined;
    confirmLabel?: string | undefined;
    cancelLabel?: string | undefined;
    variant?: "default" | "destructive" | undefined;
    requireInput?: string | undefined;
    onConfirm?: ActionConfig | ActionConfig[] | undefined;
    onCancel?: ActionConfig | ActionConfig[] | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "confirm";
    message?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    confirmLabel?: string | undefined;
    cancelLabel?: string | undefined;
    variant?: "default" | "destructive" | undefined;
    requireInput?: string | undefined;
    onConfirm?: ActionConfig | ActionConfig[] | undefined;
    onCancel?: ActionConfig | ActionConfig[] | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
declare const scrollToActionSchema: z.ZodObject<{
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
    behavior?: "smooth" | "instant" | "auto" | undefined;
    block?: "start" | "center" | "end" | "nearest" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    type: "scroll-to";
    target: string;
    behavior?: "smooth" | "instant" | "auto" | undefined;
    block?: "start" | "center" | "end" | "nearest" | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
declare const runWorkflowActionSchema: z.ZodObject<{
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
declare const branchActionSchema: z.ZodType<BranchAction>;
declare const forEachActionSchema: z.ZodType<ForEachAction>;
declare const wsSendActionSchema: z.ZodObject<{
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
declare const trackActionSchema: z.ZodObject<{
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
declare const logActionSchema: z.ZodObject<{
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
    level: "error" | "info" | "warn" | "debug";
    data?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}, {
    message: string;
    type: "log";
    level: "error" | "info" | "warn" | "debug";
    data?: Record<string, unknown> | undefined;
    debounce?: number | undefined;
    throttle?: number | undefined;
}>;
declare const apiActionSchema: z.ZodType<ApiAction>;
declare const toastActionSchema: z.ZodType<ToastAction>;
declare const actionSchema: z.ZodType<ActionConfig>;

export { ACTION_TYPES, type ActionBase, type ActionConfig, type ActionExecuteFn, type ApiAction, type BranchAction, type CloseModalAction, type ConfirmAction, type CopyAction, type CopyToClipboardAction, type DownloadAction, type EmitAction, type ForEachAction, type LogAction, type NavigateAction, type NavigateExternalAction, type OpenModalAction, type RefreshAction, type ResetFormAction, type RunWorkflowAction, type ScrollToAction, type SetThemeAction, type SetValueAction, type SubmitFormAction, type ToastAction, type TrackAction, type WsSendAction, actionSchema, apiActionSchema, branchActionSchema, closeModalActionSchema, confirmActionSchema, copyActionSchema, copyToClipboardActionSchema, downloadActionSchema, emitActionSchema, forEachActionSchema, logActionSchema, navigateActionSchema, navigateExternalActionSchema, openModalActionSchema, refreshActionSchema, resetFormActionSchema, runWorkflowActionSchema, scrollToActionSchema, setThemeActionSchema, setValueActionSchema, submitFormActionSchema, toastActionSchema, trackActionSchema, wsSendActionSchema };
