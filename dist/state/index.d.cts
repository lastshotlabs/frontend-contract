export { S as StateConfigMap, a as StatePersistConfig, b as StateScope, c as StateValueConfig } from '../types-DY0RT8h5.cjs';
import { z } from 'zod';
import '../resources/index.cjs';
import '../from-B_VrpLQ5.cjs';

declare const statePersistConfigSchema: z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
    storage: z.ZodEnum<["localStorage", "sessionStorage"]>;
    key: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    storage: "localStorage" | "sessionStorage";
    key?: string | undefined;
}, {
    storage: "localStorage" | "sessionStorage";
    key?: string | undefined;
}>]>;
declare const stateValueConfigSchema: z.ZodEffects<z.ZodObject<{
    scope: z.ZodOptional<z.ZodEnum<["app", "route"]>>;
    data: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
    }, "strict", z.ZodTypeAny, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }>]>>;
    default: z.ZodOptional<z.ZodUnknown>;
    compute: z.ZodOptional<z.ZodString>;
    persist: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
        storage: z.ZodEnum<["localStorage", "sessionStorage"]>;
        key: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    }, {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    persist: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    };
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
}, {
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
    persist?: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    } | undefined;
}>, {
    persist: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    };
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
}, {
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
    persist?: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    } | undefined;
}>;
declare const stateConfigMapSchema: z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodObject<{
    scope: z.ZodOptional<z.ZodEnum<["app", "route"]>>;
    data: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
    }, "strict", z.ZodTypeAny, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }>]>>;
    default: z.ZodOptional<z.ZodUnknown>;
    compute: z.ZodOptional<z.ZodString>;
    persist: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
        storage: z.ZodEnum<["localStorage", "sessionStorage"]>;
        key: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    }, {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    persist: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    };
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
}, {
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
    persist?: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    } | undefined;
}>, {
    persist: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    };
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
}, {
    default?: unknown;
    scope?: "app" | "route" | undefined;
    data?: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    } | undefined;
    compute?: string | undefined;
    persist?: "localStorage" | "sessionStorage" | "none" | {
        storage: "localStorage" | "sessionStorage";
        key?: string | undefined;
    } | undefined;
}>>;

export { stateConfigMapSchema, statePersistConfigSchema, stateValueConfigSchema };
