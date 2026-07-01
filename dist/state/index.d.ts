export { S as StateConfigMap, a as StatePersistConfig, b as StateScope, c as StateValueConfig } from '../types-xWJCMOrd.js';
import { z } from 'zod';
import '../resources/index.js';
import '../from-B_VrpLQ5.js';

declare const statePersistConfigSchema: z.ZodUnion<readonly [z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
    storage: z.ZodEnum<{
        localStorage: "localStorage";
        sessionStorage: "sessionStorage";
    }>;
    key: z.ZodOptional<z.ZodString>;
}, z.core.$strict>]>;
declare const stateValueConfigSchema: z.ZodObject<{
    scope: z.ZodOptional<z.ZodEnum<{
        app: "app";
        route: "route";
    }>>;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
    }, z.core.$strict>]>>;
    default: z.ZodOptional<z.ZodUnknown>;
    compute: z.ZodOptional<z.ZodString>;
    persist: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
        storage: z.ZodEnum<{
            localStorage: "localStorage";
            sessionStorage: "sessionStorage";
        }>;
        key: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>]>>;
}, z.core.$strict>;
declare const stateConfigMapSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    scope: z.ZodOptional<z.ZodEnum<{
        app: "app";
        route: "route";
    }>>;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        resource: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>>;
    }, z.core.$strict>]>>;
    default: z.ZodOptional<z.ZodUnknown>;
    compute: z.ZodOptional<z.ZodString>;
    persist: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
        storage: z.ZodEnum<{
            localStorage: "localStorage";
            sessionStorage: "sessionStorage";
        }>;
        key: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>]>>;
}, z.core.$strict>>;

export { stateConfigMapSchema, statePersistConfigSchema, stateValueConfigSchema };
