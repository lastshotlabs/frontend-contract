import { z } from 'zod';
import { a as FromRef } from '../from-B_VrpLQ5.js';

declare const httpMethodSchema: z.ZodEnum<["GET", "POST", "PUT", "PATCH", "DELETE"]>;
declare const resourceParamSchema: z.ZodType<unknown | FromRef>;
declare const resourceRefSchema: z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>;
declare const resourceInvalidationTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    key: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    key: string[];
}, {
    key: string[];
}>]>;
declare const optimisticTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>]>;
declare const optimisticConfigSchema: z.ZodEffects<z.ZodObject<{
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
declare const endpointTargetSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, z.ZodTypeDef, unknown>>>;
}, "strict", z.ZodTypeAny, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}, {
    resource: string;
    params?: Record<string, unknown> | undefined;
}>]>;
declare const dataSourceSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<["uppercase", "lowercase", "trim", "length", "number", "boolean", "string", "json", "keys", "values", "first", "last", "count", "sum", "join", "split", "default"]>>;
    transformArg: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strict", z.ZodTypeAny, {
    from: string;
    transform?: "string" | "number" | "boolean" | "uppercase" | "lowercase" | "trim" | "length" | "json" | "keys" | "values" | "first" | "last" | "count" | "sum" | "join" | "split" | "default" | undefined;
    transformArg?: string | number | undefined;
}, {
    from: string;
    transform?: "string" | "number" | "boolean" | "uppercase" | "lowercase" | "trim" | "length" | "json" | "keys" | "values" | "first" | "last" | "count" | "sum" | "join" | "split" | "default" | undefined;
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
declare const resourceConfigSchema: z.ZodObject<{
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
type HttpMethod = z.infer<typeof httpMethodSchema>;
type ResourceRef = z.infer<typeof resourceRefSchema>;
type ResourceInvalidationTarget = z.infer<typeof resourceInvalidationTargetSchema>;
type OptimisticTarget = z.infer<typeof optimisticTargetSchema>;
type OptimisticConfig = z.infer<typeof optimisticConfigSchema>;
type ResourceConfig = z.infer<typeof resourceConfigSchema>;
type ResourceMap = Record<string, ResourceConfig>;
type EndpointTarget = z.infer<typeof endpointTargetSchema>;
interface ResolvedRequest {
    method: HttpMethod;
    endpoint: string;
    params: Record<string, unknown>;
    client: string;
}
declare function isResourceRef(value: unknown): value is ResourceRef;
declare function isQueryKeyInvalidationTarget(value: ResourceInvalidationTarget): value is Extract<ResourceInvalidationTarget, {
    key: string[];
}>;
declare function isOptimisticResourceTarget(value: OptimisticTarget): value is Extract<OptimisticTarget, {
    resource: string;
}>;
declare function resolveEndpointTarget(target: EndpointTarget, resources?: ResourceMap, params?: Record<string, unknown>, fallbackMethod?: HttpMethod): ResolvedRequest;
declare function buildRequestUrl(endpoint: string, params?: Record<string, unknown>, pathParams?: Record<string, unknown>): string;
declare function extractResourceRefs(value: unknown, results?: ResourceRef[]): ResourceRef[];
declare function collectDependentResources(resourceName: string, resources?: ResourceMap, visited?: Set<string>): string[];
declare function getResourceInvalidationTargets(resourceName: string, resources?: ResourceMap): string[];

export { type EndpointTarget, type HttpMethod, type OptimisticConfig, type OptimisticTarget, type ResolvedRequest, type ResourceConfig, type ResourceInvalidationTarget, type ResourceMap, type ResourceRef, buildRequestUrl, collectDependentResources, dataSourceSchema, endpointTargetSchema, extractResourceRefs, getResourceInvalidationTargets, httpMethodSchema, isOptimisticResourceTarget, isQueryKeyInvalidationTarget, isResourceRef, optimisticConfigSchema, optimisticTargetSchema, resolveEndpointTarget, resourceConfigSchema, resourceInvalidationTargetSchema, resourceParamSchema, resourceRefSchema };
