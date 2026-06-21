import type { z } from "zod";
import type { componentTokensSchema, fontSchema, globalTokensSchema, radiusSchema, shadowSchema, spacingSchema, themeColorsSchema, themeConfigSchema } from "./schema";
export type ThemeColors = z.infer<typeof themeColorsSchema>;
export type RadiusScale = z.infer<typeof radiusSchema>;
export type SpacingScale = z.infer<typeof spacingSchema>;
export type FontConfig = z.infer<typeof fontSchema>;
export type ShadowScale = z.infer<typeof shadowSchema>;
export type GlobalTokens = z.infer<typeof globalTokensSchema>;
export type ComponentTokens = z.infer<typeof componentTokensSchema>;
export type ThemeConfig = z.infer<typeof themeConfigSchema>;
export interface Flavor {
    name: string;
    displayName: string;
    colors: ThemeColors;
    darkColors?: ThemeColors;
    radius: RadiusScale;
    spacing: SpacingScale;
    font: FontConfig;
    components?: ComponentTokens;
}
export interface TokenEditor {
    setToken: (path: string, value: string) => void;
    setFlavor: (flavorName: string) => void;
    resetTokens: () => void;
    getTokens: () => Partial<NonNullable<ThemeConfig["overrides"]>>;
    currentFlavor: () => string;
    subscribe: (listener: (overrides: Partial<NonNullable<ThemeConfig["overrides"]>>) => void) => () => void;
}
export type Responsive<T> = T | {
    default: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};
