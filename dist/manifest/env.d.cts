import { z } from 'zod';

type EnvRef = {
    env: string;
    default?: string;
};
declare const envRefSchema: z.ZodObject<{
    env: z.ZodString;
    default: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    env: string;
    default?: string | undefined;
}, {
    env: string;
    default?: string | undefined;
}>;
declare function isEnvRef(value: unknown): value is EnvRef;
declare function resolveEnvRef(ref: EnvRef, env: Record<string, string | undefined>): string | undefined;
declare function getDefaultEnvSource(): Record<string, string | undefined>;

export { type EnvRef, envRefSchema, getDefaultEnvSource, isEnvRef, resolveEnvRef };
