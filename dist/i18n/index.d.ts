import { z } from 'zod';

declare const i18nDetectStrategySchema: z.ZodEnum<{
    default: "default";
    state: "state";
    navigator: "navigator";
    header: "header";
}>;
declare const tRefSchema: z.ZodObject<{
    t: z.ZodString;
    vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>;
declare const i18nConfigSchema: z.ZodObject<{
    default: z.ZodString;
    locales: z.ZodArray<z.ZodString>;
    strings: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodType<Record<string, string | Record<string, unknown>>, unknown, z.core.$ZodTypeInternals<Record<string, string | Record<string, unknown>>, unknown>>]>>;
    detect: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        default: "default";
        state: "state";
        navigator: "navigator";
        header: "header";
    }>>>;
}, z.core.$strict>;
type TRef = z.infer<typeof tRefSchema>;
type I18nConfig = z.infer<typeof i18nConfigSchema>;
declare function isTRef(value: unknown): value is TRef;

export { type I18nConfig, type TRef, i18nConfigSchema, i18nDetectStrategySchema, isTRef, tRefSchema };
