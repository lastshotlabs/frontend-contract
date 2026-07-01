import { z } from 'zod';
import { EndpointTarget } from '../resources/index.js';
import '../from-B_VrpLQ5.js';

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
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const navigateExternalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"navigate-external">;
    to: z.ZodString;
    target: z.ZodOptional<z.ZodEnum<{
        _self: "_self";
        _blank: "_blank";
    }>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const openModalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"open-modal">;
    modal: z.ZodString;
    payload: z.ZodOptional<z.ZodUnknown>;
    resultTarget: z.ZodOptional<z.ZodString>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const closeModalActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"close-modal">;
    modal: z.ZodOptional<z.ZodString>;
    result: z.ZodOptional<z.ZodUnknown>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const refreshActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"refresh">;
    target: z.ZodString;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const setValueActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"set-value">;
    target: z.ZodString;
    value: z.ZodUnknown;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const downloadActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"download">;
    endpoint: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
    }, z.core.$strict>]>;
    filename: z.ZodOptional<z.ZodString>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const copyActionSchema: z.ZodType<CopyAction>;
declare const copyToClipboardActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"copy-to-clipboard">;
    text: z.ZodString;
    toast: z.ZodOptional<z.ZodString>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const emitActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"emit">;
    event: z.ZodString;
    payload: z.ZodOptional<z.ZodUnknown>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const submitFormActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"submit-form">;
    formId: z.ZodString;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const resetFormActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"reset-form">;
    formId: z.ZodString;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const setThemeActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"set-theme">;
    flavor: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        light: "light";
        dark: "dark";
        system: "system";
    }>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const confirmActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"confirm">;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    confirmLabel: z.ZodOptional<z.ZodString>;
    cancelLabel: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodEnum<{
        default: "default";
        destructive: "destructive";
    }>>;
    requireInput: z.ZodOptional<z.ZodString>;
    onConfirm: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<ActionConfig, unknown, z.core.$ZodTypeInternals<ActionConfig, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<ActionConfig, unknown, z.core.$ZodTypeInternals<ActionConfig, unknown>>>>]>>;
    onCancel: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<ActionConfig, unknown, z.core.$ZodTypeInternals<ActionConfig, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<ActionConfig, unknown, z.core.$ZodTypeInternals<ActionConfig, unknown>>>>]>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const scrollToActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"scroll-to">;
    target: z.ZodString;
    behavior: z.ZodOptional<z.ZodEnum<{
        smooth: "smooth";
        instant: "instant";
        auto: "auto";
    }>>;
    block: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        nearest: "nearest";
    }>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const runWorkflowActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"run-workflow">;
    workflow: z.ZodString;
    input: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const branchActionSchema: z.ZodType<BranchAction>;
declare const forEachActionSchema: z.ZodType<ForEachAction>;
declare const wsSendActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"ws-send">;
    event: z.ZodString;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodObject<{
        from: z.ZodString;
    }, z.core.$strip>]>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const trackActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"track">;
    event: z.ZodString;
    props: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const logActionSchema: z.ZodObject<{
    type: z.ZodLiteral<"log">;
    level: z.ZodEnum<{
        error: "error";
        info: "info";
        warn: "warn";
        debug: "debug";
    }>;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    debounce: z.ZodOptional<z.ZodNumber>;
    throttle: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const apiActionSchema: z.ZodType<ApiAction>;
declare const toastActionSchema: z.ZodType<ToastAction>;
declare const actionSchema: z.ZodType<ActionConfig>;

export { ACTION_TYPES, type ActionBase, type ActionConfig, type ActionExecuteFn, type ApiAction, type BranchAction, type CloseModalAction, type ConfirmAction, type CopyAction, type CopyToClipboardAction, type DownloadAction, type EmitAction, type ForEachAction, type LogAction, type NavigateAction, type NavigateExternalAction, type OpenModalAction, type RefreshAction, type ResetFormAction, type RunWorkflowAction, type ScrollToAction, type SetThemeAction, type SetValueAction, type SubmitFormAction, type ToastAction, type TrackAction, type WsSendAction, actionSchema, apiActionSchema, branchActionSchema, closeModalActionSchema, confirmActionSchema, copyActionSchema, copyToClipboardActionSchema, downloadActionSchema, emitActionSchema, forEachActionSchema, logActionSchema, navigateActionSchema, navigateExternalActionSchema, openModalActionSchema, refreshActionSchema, resetFormActionSchema, runWorkflowActionSchema, scrollToActionSchema, setThemeActionSchema, setValueActionSchema, submitFormActionSchema, toastActionSchema, trackActionSchema, wsSendActionSchema };
