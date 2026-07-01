import { z } from 'zod';
import { a as FromRef } from '../from-B_VrpLQ5.js';

declare const httpMethodSchema: z.ZodEnum<{
    GET: "GET";
    POST: "POST";
    PUT: "PUT";
    PATCH: "PATCH";
    DELETE: "DELETE";
}>;
declare const resourceParamSchema: z.ZodType<unknown | FromRef>;
declare const resourceRefSchema: z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
}, z.core.$strict>;
declare const resourceInvalidationTargetSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    key: z.ZodArray<z.ZodString>;
}, z.core.$strict>]>;
declare const optimisticTargetSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>]>;
declare const optimisticConfigSchema: z.ZodObject<{
    target: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strict>]>;
    merge: z.ZodEnum<{
        replace: "replace";
        append: "append";
        prepend: "prepend";
        patch: "patch";
        remove: "remove";
    }>;
    idField: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
declare const endpointTargetSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
}, z.core.$strict>]>;
declare const dataSourceSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    from: z.ZodString;
    transform: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        uppercase: "uppercase";
        lowercase: "lowercase";
        trim: "trim";
        length: "length";
        json: "json";
        keys: "keys";
        values: "values";
        first: "first";
        last: "last";
        count: "count";
        sum: "sum";
        join: "join";
        split: "split";
        default: "default";
    }>>;
    transformArg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
}, z.core.$strict>, z.ZodObject<{
    resource: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
}, z.core.$strict>]>;
declare const resourceConfigSchema: z.ZodObject<{
    method: z.ZodOptional<z.ZodEnum<{
        GET: "GET";
        POST: "POST";
        PUT: "PUT";
        PATCH: "PATCH";
        DELETE: "DELETE";
    }>>;
    endpoint: z.ZodString;
    client: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    cacheMs: z.ZodOptional<z.ZodNumber>;
    pollMs: z.ZodOptional<z.ZodNumber>;
    refetchOnMount: z.ZodOptional<z.ZodBoolean>;
    refetchOnWindowFocus: z.ZodOptional<z.ZodBoolean>;
    retry: z.ZodOptional<z.ZodNumber>;
    retryDelayMs: z.ZodOptional<z.ZodNumber>;
    dependsOn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    invalidates: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        key: z.ZodArray<z.ZodString>;
    }, z.core.$strict>]>>>;
    optimistic: z.ZodOptional<z.ZodObject<{
        target: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            resource: z.ZodString;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, z.core.$strict>]>;
        merge: z.ZodEnum<{
            replace: "replace";
            append: "append";
            prepend: "prepend";
            patch: "patch";
            remove: "remove";
        }>;
        idField: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
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
