import { z } from "zod";
export type EnvRef = {
    env: string;
    default?: string;
};
export declare const envRefSchema: z.ZodObject<{
    env: z.ZodString;
    default: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    env: string;
    default?: string | undefined;
}, {
    env: string;
    default?: string | undefined;
}>;
export declare function isEnvRef(value: unknown): value is EnvRef;
export declare function resolveEnvRef(ref: EnvRef, env: Record<string, string | undefined>): string | undefined;
export declare function getDefaultEnvSource(): Record<string, string | undefined>;
