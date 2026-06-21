import { z } from "zod";
export declare const i18nDetectStrategySchema: z.ZodEnum<["state", "navigator", "default", "header"]>;
export declare const tRefSchema: z.ZodObject<{
    t: z.ZodString;
    vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    t: string;
    vars?: Record<string, unknown> | undefined;
}, {
    t: string;
    vars?: Record<string, unknown> | undefined;
}>;
export declare const i18nConfigSchema: z.ZodObject<{
    default: z.ZodString;
    locales: z.ZodArray<z.ZodString, "many">;
    strings: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodType<Record<string, string | Record<string, unknown>>, z.ZodTypeDef, Record<string, string | Record<string, unknown>>>]>>;
    detect: z.ZodOptional<z.ZodArray<z.ZodEnum<["state", "navigator", "default", "header"]>, "many">>;
}, "strict", z.ZodTypeAny, {
    default: string;
    locales: string[];
    strings: Record<string, string | Record<string, string | Record<string, unknown>>>;
    detect?: ("default" | "header" | "state" | "navigator")[] | undefined;
}, {
    default: string;
    locales: string[];
    strings: Record<string, string | Record<string, string | Record<string, unknown>>>;
    detect?: ("default" | "header" | "state" | "navigator")[] | undefined;
}>;
export type TRef = z.infer<typeof tRefSchema>;
export type I18nConfig = z.infer<typeof i18nConfigSchema>;
export declare function isTRef(value: unknown): value is TRef;
