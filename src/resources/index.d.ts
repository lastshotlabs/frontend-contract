import { z } from "zod";
import type { FromRef } from "../refs";
export declare const httpMethodSchema: z.ZodEnum<["GET", "POST", "PUT", "PATCH", "DELETE"]>;
export declare const resourceParamSchema: z.ZodType<unknown | FromRef>;
export declare const resourceRefSchema: z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>;
export declare const resourceInvalidationTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    key: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    key: string[];
}, {
    key: string[];
}>]>;
export declare const optimisticTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>]>;
export declare const optimisticConfigSchema: z.ZodEffects<z.ZodObject<{
    target: z.ZodUnion<[z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strict", z.ZodTypeAny, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }, {
        resource: string;
        params?: Record<string, unknown> | undefined;
    }>]>;
    merge: z.ZodEnum<["append", "prepend", "replace", "patch", "remove"]>;
    idField: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    target: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    merge: "append" | "prepend" | "replace" | "patch" | "remove";
    idField?: string | undefined;
}, {
    target: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    merge: "append" | "prepend" | "replace" | "patch" | "remove";
    idField?: string | undefined;
}>, {
    target: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    merge: "append" | "prepend" | "replace" | "patch" | "remove";
    idField?: string | undefined;
}, {
    target: string | {
        resource: string;
        params?: Record<string, unknown> | undefined;
    };
    merge: "append" | "prepend" | "replace" | "patch" | "remove";
    idField?: string | undefined;
}>;
export declare const endpointTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>]>;
export declare const dataSourceSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"]>>;
    transformArg: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strict", z.ZodTypeAny, {
    from: string;
    transform?: "string" | "number" | "boolean" | "length" | "join" | "keys" | "values" | "default" | "uppercase" | "lowercase" | "trim" | "json" | "first" | "last" | "count" | "sum" | "split" | undefined;
    transformArg?: string | number | undefined;
}, {
    from: string;
    transform?: "string" | "number" | "boolean" | "length" | "join" | "keys" | "values" | "default" | "uppercase" | "lowercase" | "trim" | "json" | "first" | "last" | "count" | "sum" | "split" | undefined;
    transformArg?: string | number | undefined;
}>, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>]>;
export declare const resourceConfigSchema: z.ZodObject<{
    method: z.ZodOptional<z.ZodEnum<["GET", "POST", "PUT", "PATCH", "DELETE"]>>;
    endpoint: z.ZodString;
    client: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    cacheMs: z.ZodOptional<z.ZodNumber>;
    pollMs: z.ZodOptional<z.ZodNumber>;
    refetchOnMount: z.ZodOptional<z.ZodBoolean>;
    refetchOnWindowFocus: z.ZodOptional<z.ZodBoolean>;
    retry: z.ZodOptional<z.ZodNumber>;
    retryDelayMs: z.ZodOptional<z.ZodNumber>;
    dependsOn: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    invalidates: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        key: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        key: string[];
    }, {
        key: string[];
    }>]>, "many">>;
    optimistic: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        target: z.ZodUnion<[z.ZodString, z.ZodObject<{
            resource: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strict", z.ZodTypeAny, {
            resource: string;
            params?: Record<string, unknown> | undefined;
        }, {
            resource: string;
            params?: Record<string, unknown> | undefined;
        }>]>;
        merge: z.ZodEnum<["append", "prepend", "replace", "patch", "remove"]>;
        idField: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    }, {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    }>, {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    }, {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    endpoint: string;
    params?: Record<string, unknown> | undefined;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | undefined;
    client?: string | undefined;
    cacheMs?: number | undefined;
    pollMs?: number | undefined;
    refetchOnMount?: boolean | undefined;
    refetchOnWindowFocus?: boolean | undefined;
    retry?: number | undefined;
    retryDelayMs?: number | undefined;
    dependsOn?: string[] | undefined;
    invalidates?: (string | {
        key: string[];
    })[] | undefined;
    optimistic?: {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    } | undefined;
}, {
    endpoint: string;
    params?: Record<string, unknown> | undefined;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | undefined;
    client?: string | undefined;
    cacheMs?: number | undefined;
    pollMs?: number | undefined;
    refetchOnMount?: boolean | undefined;
    refetchOnWindowFocus?: boolean | undefined;
    retry?: number | undefined;
    retryDelayMs?: number | undefined;
    dependsOn?: string[] | undefined;
    invalidates?: (string | {
        key: string[];
    })[] | undefined;
    optimistic?: {
        target: string | {
            resource: string;
            params?: Record<string, unknown> | undefined;
        };
        merge: "append" | "prepend" | "replace" | "patch" | "remove";
        idField?: string | undefined;
    } | undefined;
}>;
export type HttpMethod = z.infer<typeof httpMethodSchema>;
export type ResourceRef = z.infer<typeof resourceRefSchema>;
export type ResourceInvalidationTarget = z.infer<typeof resourceInvalidationTargetSchema>;
export type OptimisticTarget = z.infer<typeof optimisticTargetSchema>;
export type OptimisticConfig = z.infer<typeof optimisticConfigSchema>;
export type ResourceConfig = z.infer<typeof resourceConfigSchema>;
export type ResourceMap = Record<string, ResourceConfig>;
export type EndpointTarget = z.infer<typeof endpointTargetSchema>;
export interface ResolvedRequest {
    method: HttpMethod;
    endpoint: string;
    params: Record<string, unknown>;
    client: string;
}
export declare function isResourceRef(value: unknown): value is ResourceRef;
export declare function isQueryKeyInvalidationTarget(value: ResourceInvalidationTarget): value is Extract<ResourceInvalidationTarget, {
    key: string[];
}>;
export declare function isOptimisticResourceTarget(value: OptimisticTarget): value is Extract<OptimisticTarget, {
    resource: string;
}>;
export declare function resolveEndpointTarget(target: EndpointTarget, resources?: ResourceMap, params?: Record<string, unknown>, fallbackMethod?: HttpMethod): ResolvedRequest;
export declare function buildRequestUrl(endpoint: string, params?: Record<string, unknown>, pathParams?: Record<string, unknown>): string;
export declare function extractResourceRefs(value: unknown, results?: ResourceRef[]): ResourceRef[];
export declare function collectDependentResources(resourceName: string, resources?: ResourceMap, visited?: Set<string>): string[];
export declare function getResourceInvalidationTargets(resourceName: string, resources?: ResourceMap): string[];
