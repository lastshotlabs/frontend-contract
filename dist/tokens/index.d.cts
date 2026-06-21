import { z } from 'zod';

declare const themeColorsSchema: z.ZodObject<{
    primary: z.ZodOptional<z.ZodString>;
    secondary: z.ZodOptional<z.ZodString>;
    muted: z.ZodOptional<z.ZodString>;
    accent: z.ZodOptional<z.ZodString>;
    destructive: z.ZodOptional<z.ZodString>;
    success: z.ZodOptional<z.ZodString>;
    warning: z.ZodOptional<z.ZodString>;
    info: z.ZodOptional<z.ZodString>;
    background: z.ZodOptional<z.ZodString>;
    card: z.ZodOptional<z.ZodString>;
    popover: z.ZodOptional<z.ZodString>;
    sidebar: z.ZodOptional<z.ZodString>;
    border: z.ZodOptional<z.ZodString>;
    input: z.ZodOptional<z.ZodString>;
    ring: z.ZodOptional<z.ZodString>;
    chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
}, "strict", z.ZodTypeAny, {
    destructive?: string | undefined;
    success?: string | undefined;
    warning?: string | undefined;
    info?: string | undefined;
    input?: string | undefined;
    primary?: string | undefined;
    secondary?: string | undefined;
    muted?: string | undefined;
    accent?: string | undefined;
    background?: string | undefined;
    card?: string | undefined;
    popover?: string | undefined;
    sidebar?: string | undefined;
    border?: string | undefined;
    ring?: string | undefined;
    chart?: [string, string, string, string, string] | undefined;
}, {
    destructive?: string | undefined;
    success?: string | undefined;
    warning?: string | undefined;
    info?: string | undefined;
    input?: string | undefined;
    primary?: string | undefined;
    secondary?: string | undefined;
    muted?: string | undefined;
    accent?: string | undefined;
    background?: string | undefined;
    card?: string | undefined;
    popover?: string | undefined;
    sidebar?: string | undefined;
    border?: string | undefined;
    ring?: string | undefined;
    chart?: [string, string, string, string, string] | undefined;
}>;
declare const radiusSchema: z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl", "full"]>;
declare const spacingSchema: z.ZodEnum<["compact", "default", "comfortable", "spacious"]>;
declare const fontSchema: z.ZodObject<{
    sans: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<["google", "url"]>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strict", z.ZodTypeAny, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>]>>;
    mono: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<["google", "url"]>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strict", z.ZodTypeAny, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>]>>;
    display: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<["google", "url"]>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strict", z.ZodTypeAny, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }, {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    }>]>>;
    baseSize: z.ZodOptional<z.ZodNumber>;
    scale: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    sans?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    mono?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    display?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    baseSize?: number | undefined;
    scale?: number | undefined;
}, {
    sans?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    mono?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    display?: string | {
        family: string;
        source: "google" | "url";
        url?: string | undefined;
        weights?: number[] | undefined;
    } | undefined;
    baseSize?: number | undefined;
    scale?: number | undefined;
}>;
declare const componentTokensSchema: z.ZodObject<{
    card: z.ZodOptional<z.ZodObject<{
        shadow: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "xl"]>>;
        padding: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
        border: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        border?: boolean | undefined;
        shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
        padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    }, {
        border?: boolean | undefined;
        shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
        padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    }>>;
    table: z.ZodOptional<z.ZodObject<{
        striped: z.ZodOptional<z.ZodBoolean>;
        density: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable"]>>;
        headerBackground: z.ZodOptional<z.ZodBoolean>;
        hoverRow: z.ZodOptional<z.ZodBoolean>;
        borderStyle: z.ZodOptional<z.ZodEnum<["none", "horizontal", "grid"]>>;
    }, "strict", z.ZodTypeAny, {
        striped?: boolean | undefined;
        density?: "default" | "compact" | "comfortable" | undefined;
        headerBackground?: boolean | undefined;
        hoverRow?: boolean | undefined;
        borderStyle?: "none" | "horizontal" | "grid" | undefined;
    }, {
        striped?: boolean | undefined;
        density?: "default" | "compact" | "comfortable" | undefined;
        headerBackground?: boolean | undefined;
        hoverRow?: boolean | undefined;
        borderStyle?: "none" | "horizontal" | "grid" | undefined;
    }>>;
    button: z.ZodOptional<z.ZodObject<{
        weight: z.ZodOptional<z.ZodEnum<["light", "medium", "bold"]>>;
        uppercase: z.ZodOptional<z.ZodBoolean>;
        iconSize: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
    }, "strict", z.ZodTypeAny, {
        uppercase?: boolean | undefined;
        weight?: "light" | "medium" | "bold" | undefined;
        iconSize?: "sm" | "md" | "lg" | undefined;
    }, {
        uppercase?: boolean | undefined;
        weight?: "light" | "medium" | "bold" | undefined;
        iconSize?: "sm" | "md" | "lg" | undefined;
    }>>;
    input: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
        variant: z.ZodOptional<z.ZodEnum<["outline", "filled", "underline"]>>;
    }, "strict", z.ZodTypeAny, {
        variant?: "outline" | "filled" | "underline" | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    }, {
        variant?: "outline" | "filled" | "underline" | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    }>>;
    modal: z.ZodOptional<z.ZodObject<{
        overlay: z.ZodOptional<z.ZodEnum<["light", "dark", "blur"]>>;
        animation: z.ZodOptional<z.ZodEnum<["fade", "scale", "slide-up", "none"]>>;
    }, "strict", z.ZodTypeAny, {
        overlay?: "light" | "dark" | "blur" | undefined;
        animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
    }, {
        overlay?: "light" | "dark" | "blur" | undefined;
        animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
    }>>;
    badge: z.ZodOptional<z.ZodObject<{
        variant: z.ZodOptional<z.ZodEnum<["solid", "outline", "soft"]>>;
        rounded: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        variant?: "outline" | "solid" | "soft" | undefined;
        rounded?: boolean | undefined;
    }, {
        variant?: "outline" | "solid" | "soft" | undefined;
        rounded?: boolean | undefined;
    }>>;
    toast: z.ZodOptional<z.ZodObject<{
        position: z.ZodOptional<z.ZodEnum<["top-right", "top-center", "bottom-right", "bottom-center"]>>;
        animation: z.ZodOptional<z.ZodEnum<["slide", "fade", "pop"]>>;
    }, "strict", z.ZodTypeAny, {
        animation?: "pop" | "fade" | "slide" | undefined;
        position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
    }, {
        animation?: "pop" | "fade" | "slide" | undefined;
        position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
    }>>;
    scrollbar: z.ZodOptional<z.ZodObject<{
        width: z.ZodOptional<z.ZodString>;
        track: z.ZodOptional<z.ZodString>;
        thumb: z.ZodOptional<z.ZodString>;
        thumbHover: z.ZodOptional<z.ZodString>;
        radius: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "full"]>>;
    }, "strict", z.ZodTypeAny, {
        track?: string | undefined;
        width?: string | undefined;
        thumb?: string | undefined;
        thumbHover?: string | undefined;
        radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
    }, {
        track?: string | undefined;
        width?: string | undefined;
        thumb?: string | undefined;
        thumbHover?: string | undefined;
        radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    toast?: {
        animation?: "pop" | "fade" | "slide" | undefined;
        position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
    } | undefined;
    modal?: {
        overlay?: "light" | "dark" | "blur" | undefined;
        animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
    } | undefined;
    input?: {
        variant?: "outline" | "filled" | "underline" | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    } | undefined;
    card?: {
        border?: boolean | undefined;
        shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
        padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    } | undefined;
    table?: {
        striped?: boolean | undefined;
        density?: "default" | "compact" | "comfortable" | undefined;
        headerBackground?: boolean | undefined;
        hoverRow?: boolean | undefined;
        borderStyle?: "none" | "horizontal" | "grid" | undefined;
    } | undefined;
    button?: {
        uppercase?: boolean | undefined;
        weight?: "light" | "medium" | "bold" | undefined;
        iconSize?: "sm" | "md" | "lg" | undefined;
    } | undefined;
    badge?: {
        variant?: "outline" | "solid" | "soft" | undefined;
        rounded?: boolean | undefined;
    } | undefined;
    scrollbar?: {
        track?: string | undefined;
        width?: string | undefined;
        thumb?: string | undefined;
        thumbHover?: string | undefined;
        radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
    } | undefined;
}, {
    toast?: {
        animation?: "pop" | "fade" | "slide" | undefined;
        position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
    } | undefined;
    modal?: {
        overlay?: "light" | "dark" | "blur" | undefined;
        animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
    } | undefined;
    input?: {
        variant?: "outline" | "filled" | "underline" | undefined;
        size?: "sm" | "md" | "lg" | undefined;
    } | undefined;
    card?: {
        border?: boolean | undefined;
        shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
        padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    } | undefined;
    table?: {
        striped?: boolean | undefined;
        density?: "default" | "compact" | "comfortable" | undefined;
        headerBackground?: boolean | undefined;
        hoverRow?: boolean | undefined;
        borderStyle?: "none" | "horizontal" | "grid" | undefined;
    } | undefined;
    button?: {
        uppercase?: boolean | undefined;
        weight?: "light" | "medium" | "bold" | undefined;
        iconSize?: "sm" | "md" | "lg" | undefined;
    } | undefined;
    badge?: {
        variant?: "outline" | "solid" | "soft" | undefined;
        rounded?: boolean | undefined;
    } | undefined;
    scrollbar?: {
        track?: string | undefined;
        width?: string | undefined;
        thumb?: string | undefined;
        thumbHover?: string | undefined;
        radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
    } | undefined;
}>;
declare const shadowSchema: z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl"]>;
declare const globalTokensSchema: z.ZodObject<{
    shadow: z.ZodOptional<z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl"]>>;
    durations: z.ZodOptional<z.ZodObject<{
        instant: z.ZodOptional<z.ZodNumber>;
        fast: z.ZodOptional<z.ZodNumber>;
        normal: z.ZodOptional<z.ZodNumber>;
        slow: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        instant?: number | undefined;
        fast?: number | undefined;
        normal?: number | undefined;
        slow?: number | undefined;
    }, {
        instant?: number | undefined;
        fast?: number | undefined;
        normal?: number | undefined;
        slow?: number | undefined;
    }>>;
    easings: z.ZodOptional<z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        in: z.ZodOptional<z.ZodString>;
        out: z.ZodOptional<z.ZodString>;
        inOut: z.ZodOptional<z.ZodString>;
        spring: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        default?: string | undefined;
        in?: string | undefined;
        out?: string | undefined;
        inOut?: string | undefined;
        spring?: string | undefined;
    }, {
        default?: string | undefined;
        in?: string | undefined;
        out?: string | undefined;
        inOut?: string | undefined;
        spring?: string | undefined;
    }>>;
    opacity: z.ZodOptional<z.ZodObject<{
        disabled: z.ZodOptional<z.ZodNumber>;
        hover: z.ZodOptional<z.ZodNumber>;
        muted: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        muted?: number | undefined;
        disabled?: number | undefined;
        hover?: number | undefined;
    }, {
        muted?: number | undefined;
        disabled?: number | undefined;
        hover?: number | undefined;
    }>>;
    lineHeight: z.ZodOptional<z.ZodObject<{
        none: z.ZodOptional<z.ZodNumber>;
        tight: z.ZodOptional<z.ZodNumber>;
        normal: z.ZodOptional<z.ZodNumber>;
        relaxed: z.ZodOptional<z.ZodNumber>;
        loose: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        none?: number | undefined;
        normal?: number | undefined;
        tight?: number | undefined;
        relaxed?: number | undefined;
        loose?: number | undefined;
    }, {
        none?: number | undefined;
        normal?: number | undefined;
        tight?: number | undefined;
        relaxed?: number | undefined;
        loose?: number | undefined;
    }>>;
    tracking: z.ZodOptional<z.ZodObject<{
        tight: z.ZodOptional<z.ZodString>;
        normal: z.ZodOptional<z.ZodString>;
        wide: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        normal?: string | undefined;
        tight?: string | undefined;
        wide?: string | undefined;
    }, {
        normal?: string | undefined;
        tight?: string | undefined;
        wide?: string | undefined;
    }>>;
    borderWidth: z.ZodOptional<z.ZodObject<{
        none: z.ZodOptional<z.ZodString>;
        thin: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        thick: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        default?: string | undefined;
        none?: string | undefined;
        thin?: string | undefined;
        thick?: string | undefined;
    }, {
        default?: string | undefined;
        none?: string | undefined;
        thin?: string | undefined;
        thick?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    durations?: {
        instant?: number | undefined;
        fast?: number | undefined;
        normal?: number | undefined;
        slow?: number | undefined;
    } | undefined;
    easings?: {
        default?: string | undefined;
        in?: string | undefined;
        out?: string | undefined;
        inOut?: string | undefined;
        spring?: string | undefined;
    } | undefined;
    opacity?: {
        muted?: number | undefined;
        disabled?: number | undefined;
        hover?: number | undefined;
    } | undefined;
    lineHeight?: {
        none?: number | undefined;
        normal?: number | undefined;
        tight?: number | undefined;
        relaxed?: number | undefined;
        loose?: number | undefined;
    } | undefined;
    tracking?: {
        normal?: string | undefined;
        tight?: string | undefined;
        wide?: string | undefined;
    } | undefined;
    borderWidth?: {
        default?: string | undefined;
        none?: string | undefined;
        thin?: string | undefined;
        thick?: string | undefined;
    } | undefined;
}, {
    shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    durations?: {
        instant?: number | undefined;
        fast?: number | undefined;
        normal?: number | undefined;
        slow?: number | undefined;
    } | undefined;
    easings?: {
        default?: string | undefined;
        in?: string | undefined;
        out?: string | undefined;
        inOut?: string | undefined;
        spring?: string | undefined;
    } | undefined;
    opacity?: {
        muted?: number | undefined;
        disabled?: number | undefined;
        hover?: number | undefined;
    } | undefined;
    lineHeight?: {
        none?: number | undefined;
        normal?: number | undefined;
        tight?: number | undefined;
        relaxed?: number | undefined;
        loose?: number | undefined;
    } | undefined;
    tracking?: {
        normal?: string | undefined;
        tight?: string | undefined;
        wide?: string | undefined;
    } | undefined;
    borderWidth?: {
        default?: string | undefined;
        none?: string | undefined;
        thin?: string | undefined;
        thick?: string | undefined;
    } | undefined;
}>;
declare const flavorOverrideSchema: z.ZodObject<{
    extends: z.ZodString;
    displayName: z.ZodOptional<z.ZodString>;
    colors: z.ZodOptional<z.ZodObject<{
        primary: z.ZodOptional<z.ZodString>;
        secondary: z.ZodOptional<z.ZodString>;
        muted: z.ZodOptional<z.ZodString>;
        accent: z.ZodOptional<z.ZodString>;
        destructive: z.ZodOptional<z.ZodString>;
        success: z.ZodOptional<z.ZodString>;
        warning: z.ZodOptional<z.ZodString>;
        info: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodString>;
        card: z.ZodOptional<z.ZodString>;
        popover: z.ZodOptional<z.ZodString>;
        sidebar: z.ZodOptional<z.ZodString>;
        border: z.ZodOptional<z.ZodString>;
        input: z.ZodOptional<z.ZodString>;
        ring: z.ZodOptional<z.ZodString>;
        chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
    }, "strict", z.ZodTypeAny, {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    }, {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    }>>;
    darkColors: z.ZodOptional<z.ZodObject<{
        primary: z.ZodOptional<z.ZodString>;
        secondary: z.ZodOptional<z.ZodString>;
        muted: z.ZodOptional<z.ZodString>;
        accent: z.ZodOptional<z.ZodString>;
        destructive: z.ZodOptional<z.ZodString>;
        success: z.ZodOptional<z.ZodString>;
        warning: z.ZodOptional<z.ZodString>;
        info: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodString>;
        card: z.ZodOptional<z.ZodString>;
        popover: z.ZodOptional<z.ZodString>;
        sidebar: z.ZodOptional<z.ZodString>;
        border: z.ZodOptional<z.ZodString>;
        input: z.ZodOptional<z.ZodString>;
        ring: z.ZodOptional<z.ZodString>;
        chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
    }, "strict", z.ZodTypeAny, {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    }, {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    }>>;
    radius: z.ZodOptional<z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl", "full"]>>;
    spacing: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
    font: z.ZodOptional<z.ZodObject<{
        sans: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<["google", "url"]>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strict", z.ZodTypeAny, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>]>>;
        mono: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<["google", "url"]>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strict", z.ZodTypeAny, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>]>>;
        display: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<["google", "url"]>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        }, "strict", z.ZodTypeAny, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }, {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        }>]>>;
        baseSize: z.ZodOptional<z.ZodNumber>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        sans?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        mono?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        display?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        baseSize?: number | undefined;
        scale?: number | undefined;
    }, {
        sans?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        mono?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        display?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        baseSize?: number | undefined;
        scale?: number | undefined;
    }>>;
    components: z.ZodOptional<z.ZodObject<{
        card: z.ZodOptional<z.ZodObject<{
            shadow: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "xl"]>>;
            padding: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
            border: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        }, {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        }>>;
        table: z.ZodOptional<z.ZodObject<{
            striped: z.ZodOptional<z.ZodBoolean>;
            density: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable"]>>;
            headerBackground: z.ZodOptional<z.ZodBoolean>;
            hoverRow: z.ZodOptional<z.ZodBoolean>;
            borderStyle: z.ZodOptional<z.ZodEnum<["none", "horizontal", "grid"]>>;
        }, "strict", z.ZodTypeAny, {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        }, {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        }>>;
        button: z.ZodOptional<z.ZodObject<{
            weight: z.ZodOptional<z.ZodEnum<["light", "medium", "bold"]>>;
            uppercase: z.ZodOptional<z.ZodBoolean>;
            iconSize: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
        }, "strict", z.ZodTypeAny, {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        }, {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        }>>;
        input: z.ZodOptional<z.ZodObject<{
            size: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
            variant: z.ZodOptional<z.ZodEnum<["outline", "filled", "underline"]>>;
        }, "strict", z.ZodTypeAny, {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        }, {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        }>>;
        modal: z.ZodOptional<z.ZodObject<{
            overlay: z.ZodOptional<z.ZodEnum<["light", "dark", "blur"]>>;
            animation: z.ZodOptional<z.ZodEnum<["fade", "scale", "slide-up", "none"]>>;
        }, "strict", z.ZodTypeAny, {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        }, {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        }>>;
        badge: z.ZodOptional<z.ZodObject<{
            variant: z.ZodOptional<z.ZodEnum<["solid", "outline", "soft"]>>;
            rounded: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        }, {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        }>>;
        toast: z.ZodOptional<z.ZodObject<{
            position: z.ZodOptional<z.ZodEnum<["top-right", "top-center", "bottom-right", "bottom-center"]>>;
            animation: z.ZodOptional<z.ZodEnum<["slide", "fade", "pop"]>>;
        }, "strict", z.ZodTypeAny, {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        }, {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        }>>;
        scrollbar: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodString>;
            track: z.ZodOptional<z.ZodString>;
            thumb: z.ZodOptional<z.ZodString>;
            thumbHover: z.ZodOptional<z.ZodString>;
            radius: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "full"]>>;
        }, "strict", z.ZodTypeAny, {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        }, {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        toast?: {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        } | undefined;
        modal?: {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        } | undefined;
        input?: {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        card?: {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        } | undefined;
        table?: {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        } | undefined;
        button?: {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        badge?: {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        } | undefined;
        scrollbar?: {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        } | undefined;
    }, {
        toast?: {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        } | undefined;
        modal?: {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        } | undefined;
        input?: {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        card?: {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        } | undefined;
        table?: {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        } | undefined;
        button?: {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        badge?: {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        } | undefined;
        scrollbar?: {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        } | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    extends: string;
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
    displayName?: string | undefined;
    colors?: {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    } | undefined;
    darkColors?: {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    } | undefined;
    spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    font?: {
        sans?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        mono?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        display?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        baseSize?: number | undefined;
        scale?: number | undefined;
    } | undefined;
    components?: {
        toast?: {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        } | undefined;
        modal?: {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        } | undefined;
        input?: {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        card?: {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        } | undefined;
        table?: {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        } | undefined;
        button?: {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        badge?: {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        } | undefined;
        scrollbar?: {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        } | undefined;
    } | undefined;
}, {
    extends: string;
    radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
    displayName?: string | undefined;
    colors?: {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    } | undefined;
    darkColors?: {
        destructive?: string | undefined;
        success?: string | undefined;
        warning?: string | undefined;
        info?: string | undefined;
        input?: string | undefined;
        primary?: string | undefined;
        secondary?: string | undefined;
        muted?: string | undefined;
        accent?: string | undefined;
        background?: string | undefined;
        card?: string | undefined;
        popover?: string | undefined;
        sidebar?: string | undefined;
        border?: string | undefined;
        ring?: string | undefined;
        chart?: [string, string, string, string, string] | undefined;
    } | undefined;
    spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
    font?: {
        sans?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        mono?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        display?: string | {
            family: string;
            source: "google" | "url";
            url?: string | undefined;
            weights?: number[] | undefined;
        } | undefined;
        baseSize?: number | undefined;
        scale?: number | undefined;
    } | undefined;
    components?: {
        toast?: {
            animation?: "pop" | "fade" | "slide" | undefined;
            position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
        } | undefined;
        modal?: {
            overlay?: "light" | "dark" | "blur" | undefined;
            animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
        } | undefined;
        input?: {
            variant?: "outline" | "filled" | "underline" | undefined;
            size?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        card?: {
            border?: boolean | undefined;
            shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
            padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        } | undefined;
        table?: {
            striped?: boolean | undefined;
            density?: "default" | "compact" | "comfortable" | undefined;
            headerBackground?: boolean | undefined;
            hoverRow?: boolean | undefined;
            borderStyle?: "none" | "horizontal" | "grid" | undefined;
        } | undefined;
        button?: {
            uppercase?: boolean | undefined;
            weight?: "light" | "medium" | "bold" | undefined;
            iconSize?: "sm" | "md" | "lg" | undefined;
        } | undefined;
        badge?: {
            variant?: "outline" | "solid" | "soft" | undefined;
            rounded?: boolean | undefined;
        } | undefined;
        scrollbar?: {
            track?: string | undefined;
            width?: string | undefined;
            thumb?: string | undefined;
            thumbHover?: string | undefined;
            radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
        } | undefined;
    } | undefined;
}>;
declare const themeConfigSchema: z.ZodObject<{
    flavor: z.ZodOptional<z.ZodString>;
    flavors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        extends: z.ZodString;
        displayName: z.ZodOptional<z.ZodString>;
        colors: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodString>;
            secondary: z.ZodOptional<z.ZodString>;
            muted: z.ZodOptional<z.ZodString>;
            accent: z.ZodOptional<z.ZodString>;
            destructive: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            info: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodString>;
            card: z.ZodOptional<z.ZodString>;
            popover: z.ZodOptional<z.ZodString>;
            sidebar: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            input: z.ZodOptional<z.ZodString>;
            ring: z.ZodOptional<z.ZodString>;
            chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strict", z.ZodTypeAny, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }>>;
        darkColors: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodString>;
            secondary: z.ZodOptional<z.ZodString>;
            muted: z.ZodOptional<z.ZodString>;
            accent: z.ZodOptional<z.ZodString>;
            destructive: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            info: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodString>;
            card: z.ZodOptional<z.ZodString>;
            popover: z.ZodOptional<z.ZodString>;
            sidebar: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            input: z.ZodOptional<z.ZodString>;
            ring: z.ZodOptional<z.ZodString>;
            chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strict", z.ZodTypeAny, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }>>;
        radius: z.ZodOptional<z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl", "full"]>>;
        spacing: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
        font: z.ZodOptional<z.ZodObject<{
            sans: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            mono: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            display: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            baseSize: z.ZodOptional<z.ZodNumber>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        }, {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        }>>;
        components: z.ZodOptional<z.ZodObject<{
            card: z.ZodOptional<z.ZodObject<{
                shadow: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "xl"]>>;
                padding: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
                border: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            }, {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            }>>;
            table: z.ZodOptional<z.ZodObject<{
                striped: z.ZodOptional<z.ZodBoolean>;
                density: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable"]>>;
                headerBackground: z.ZodOptional<z.ZodBoolean>;
                hoverRow: z.ZodOptional<z.ZodBoolean>;
                borderStyle: z.ZodOptional<z.ZodEnum<["none", "horizontal", "grid"]>>;
            }, "strict", z.ZodTypeAny, {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            }, {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            }>>;
            button: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodEnum<["light", "medium", "bold"]>>;
                uppercase: z.ZodOptional<z.ZodBoolean>;
                iconSize: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
            }, "strict", z.ZodTypeAny, {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            }, {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            }>>;
            input: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
                variant: z.ZodOptional<z.ZodEnum<["outline", "filled", "underline"]>>;
            }, "strict", z.ZodTypeAny, {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            }, {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            }>>;
            modal: z.ZodOptional<z.ZodObject<{
                overlay: z.ZodOptional<z.ZodEnum<["light", "dark", "blur"]>>;
                animation: z.ZodOptional<z.ZodEnum<["fade", "scale", "slide-up", "none"]>>;
            }, "strict", z.ZodTypeAny, {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            }, {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            }>>;
            badge: z.ZodOptional<z.ZodObject<{
                variant: z.ZodOptional<z.ZodEnum<["solid", "outline", "soft"]>>;
                rounded: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            }, {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            }>>;
            toast: z.ZodOptional<z.ZodObject<{
                position: z.ZodOptional<z.ZodEnum<["top-right", "top-center", "bottom-right", "bottom-center"]>>;
                animation: z.ZodOptional<z.ZodEnum<["slide", "fade", "pop"]>>;
            }, "strict", z.ZodTypeAny, {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            }, {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            }>>;
            scrollbar: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodString>;
                track: z.ZodOptional<z.ZodString>;
                thumb: z.ZodOptional<z.ZodString>;
                thumbHover: z.ZodOptional<z.ZodString>;
                radius: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "full"]>>;
            }, "strict", z.ZodTypeAny, {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            }, {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        }, {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        extends: string;
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        displayName?: string | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
    }, {
        extends: string;
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        displayName?: string | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
    }>>>;
    overrides: z.ZodOptional<z.ZodObject<{
        colors: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodString>;
            secondary: z.ZodOptional<z.ZodString>;
            muted: z.ZodOptional<z.ZodString>;
            accent: z.ZodOptional<z.ZodString>;
            destructive: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            info: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodString>;
            card: z.ZodOptional<z.ZodString>;
            popover: z.ZodOptional<z.ZodString>;
            sidebar: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            input: z.ZodOptional<z.ZodString>;
            ring: z.ZodOptional<z.ZodString>;
            chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strict", z.ZodTypeAny, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }>>;
        darkColors: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodString>;
            secondary: z.ZodOptional<z.ZodString>;
            muted: z.ZodOptional<z.ZodString>;
            accent: z.ZodOptional<z.ZodString>;
            destructive: z.ZodOptional<z.ZodString>;
            success: z.ZodOptional<z.ZodString>;
            warning: z.ZodOptional<z.ZodString>;
            info: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodString>;
            card: z.ZodOptional<z.ZodString>;
            popover: z.ZodOptional<z.ZodString>;
            sidebar: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            input: z.ZodOptional<z.ZodString>;
            ring: z.ZodOptional<z.ZodString>;
            chart: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strict", z.ZodTypeAny, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }, {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        }>>;
        radius: z.ZodOptional<z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl", "full"]>>;
        spacing: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
        font: z.ZodOptional<z.ZodObject<{
            sans: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            mono: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            display: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<["google", "url"]>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strict", z.ZodTypeAny, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }, {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            }>]>>;
            baseSize: z.ZodOptional<z.ZodNumber>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        }, {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        }>>;
        components: z.ZodOptional<z.ZodObject<{
            card: z.ZodOptional<z.ZodObject<{
                shadow: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "xl"]>>;
                padding: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable", "spacious"]>>;
                border: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            }, {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            }>>;
            table: z.ZodOptional<z.ZodObject<{
                striped: z.ZodOptional<z.ZodBoolean>;
                density: z.ZodOptional<z.ZodEnum<["compact", "default", "comfortable"]>>;
                headerBackground: z.ZodOptional<z.ZodBoolean>;
                hoverRow: z.ZodOptional<z.ZodBoolean>;
                borderStyle: z.ZodOptional<z.ZodEnum<["none", "horizontal", "grid"]>>;
            }, "strict", z.ZodTypeAny, {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            }, {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            }>>;
            button: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodEnum<["light", "medium", "bold"]>>;
                uppercase: z.ZodOptional<z.ZodBoolean>;
                iconSize: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
            }, "strict", z.ZodTypeAny, {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            }, {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            }>>;
            input: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodEnum<["sm", "md", "lg"]>>;
                variant: z.ZodOptional<z.ZodEnum<["outline", "filled", "underline"]>>;
            }, "strict", z.ZodTypeAny, {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            }, {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            }>>;
            modal: z.ZodOptional<z.ZodObject<{
                overlay: z.ZodOptional<z.ZodEnum<["light", "dark", "blur"]>>;
                animation: z.ZodOptional<z.ZodEnum<["fade", "scale", "slide-up", "none"]>>;
            }, "strict", z.ZodTypeAny, {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            }, {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            }>>;
            badge: z.ZodOptional<z.ZodObject<{
                variant: z.ZodOptional<z.ZodEnum<["solid", "outline", "soft"]>>;
                rounded: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            }, {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            }>>;
            toast: z.ZodOptional<z.ZodObject<{
                position: z.ZodOptional<z.ZodEnum<["top-right", "top-center", "bottom-right", "bottom-center"]>>;
                animation: z.ZodOptional<z.ZodEnum<["slide", "fade", "pop"]>>;
            }, "strict", z.ZodTypeAny, {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            }, {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            }>>;
            scrollbar: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodString>;
                track: z.ZodOptional<z.ZodString>;
                thumb: z.ZodOptional<z.ZodString>;
                thumbHover: z.ZodOptional<z.ZodString>;
                radius: z.ZodOptional<z.ZodEnum<["none", "sm", "md", "lg", "full"]>>;
            }, "strict", z.ZodTypeAny, {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            }, {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        }, {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        }>>;
        tokens: z.ZodOptional<z.ZodObject<{
            shadow: z.ZodOptional<z.ZodEnum<["none", "xs", "sm", "md", "lg", "xl"]>>;
            durations: z.ZodOptional<z.ZodObject<{
                instant: z.ZodOptional<z.ZodNumber>;
                fast: z.ZodOptional<z.ZodNumber>;
                normal: z.ZodOptional<z.ZodNumber>;
                slow: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            }, {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            }>>;
            easings: z.ZodOptional<z.ZodObject<{
                default: z.ZodOptional<z.ZodString>;
                in: z.ZodOptional<z.ZodString>;
                out: z.ZodOptional<z.ZodString>;
                inOut: z.ZodOptional<z.ZodString>;
                spring: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            }, {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            }>>;
            opacity: z.ZodOptional<z.ZodObject<{
                disabled: z.ZodOptional<z.ZodNumber>;
                hover: z.ZodOptional<z.ZodNumber>;
                muted: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            }, {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            }>>;
            lineHeight: z.ZodOptional<z.ZodObject<{
                none: z.ZodOptional<z.ZodNumber>;
                tight: z.ZodOptional<z.ZodNumber>;
                normal: z.ZodOptional<z.ZodNumber>;
                relaxed: z.ZodOptional<z.ZodNumber>;
                loose: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            }, {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            }>>;
            tracking: z.ZodOptional<z.ZodObject<{
                tight: z.ZodOptional<z.ZodString>;
                normal: z.ZodOptional<z.ZodString>;
                wide: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            }, {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            }>>;
            borderWidth: z.ZodOptional<z.ZodObject<{
                none: z.ZodOptional<z.ZodString>;
                thin: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                thick: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            }, {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        }, {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
        tokens?: {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        } | undefined;
    }, {
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
        tokens?: {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        } | undefined;
    }>>;
    mode: z.ZodOptional<z.ZodEnum<["light", "dark", "system"]>>;
    editor: z.ZodOptional<z.ZodObject<{
        persist: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
            resource: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            resource: string;
        }, {
            resource: string;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        persist: "localStorage" | "sessionStorage" | "none" | {
            resource: string;
        };
    }, {
        persist?: "localStorage" | "sessionStorage" | "none" | {
            resource: string;
        } | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    flavor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
    flavors?: Record<string, {
        extends: string;
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        displayName?: string | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
    }> | undefined;
    overrides?: {
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
        tokens?: {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    editor?: {
        persist: "localStorage" | "sessionStorage" | "none" | {
            resource: string;
        };
    } | undefined;
}, {
    flavor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
    flavors?: Record<string, {
        extends: string;
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        displayName?: string | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
    }> | undefined;
    overrides?: {
        radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | undefined;
        colors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        darkColors?: {
            destructive?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            info?: string | undefined;
            input?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            muted?: string | undefined;
            accent?: string | undefined;
            background?: string | undefined;
            card?: string | undefined;
            popover?: string | undefined;
            sidebar?: string | undefined;
            border?: string | undefined;
            ring?: string | undefined;
            chart?: [string, string, string, string, string] | undefined;
        } | undefined;
        spacing?: "default" | "compact" | "comfortable" | "spacious" | undefined;
        font?: {
            sans?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            mono?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            display?: string | {
                family: string;
                source: "google" | "url";
                url?: string | undefined;
                weights?: number[] | undefined;
            } | undefined;
            baseSize?: number | undefined;
            scale?: number | undefined;
        } | undefined;
        components?: {
            toast?: {
                animation?: "pop" | "fade" | "slide" | undefined;
                position?: "top-right" | "top-center" | "bottom-right" | "bottom-center" | undefined;
            } | undefined;
            modal?: {
                overlay?: "light" | "dark" | "blur" | undefined;
                animation?: "none" | "scale" | "fade" | "slide-up" | undefined;
            } | undefined;
            input?: {
                variant?: "outline" | "filled" | "underline" | undefined;
                size?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            card?: {
                border?: boolean | undefined;
                shadow?: "none" | "sm" | "md" | "lg" | "xl" | undefined;
                padding?: "default" | "compact" | "comfortable" | "spacious" | undefined;
            } | undefined;
            table?: {
                striped?: boolean | undefined;
                density?: "default" | "compact" | "comfortable" | undefined;
                headerBackground?: boolean | undefined;
                hoverRow?: boolean | undefined;
                borderStyle?: "none" | "horizontal" | "grid" | undefined;
            } | undefined;
            button?: {
                uppercase?: boolean | undefined;
                weight?: "light" | "medium" | "bold" | undefined;
                iconSize?: "sm" | "md" | "lg" | undefined;
            } | undefined;
            badge?: {
                variant?: "outline" | "solid" | "soft" | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            scrollbar?: {
                track?: string | undefined;
                width?: string | undefined;
                thumb?: string | undefined;
                thumbHover?: string | undefined;
                radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
            } | undefined;
        } | undefined;
        tokens?: {
            shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            durations?: {
                instant?: number | undefined;
                fast?: number | undefined;
                normal?: number | undefined;
                slow?: number | undefined;
            } | undefined;
            easings?: {
                default?: string | undefined;
                in?: string | undefined;
                out?: string | undefined;
                inOut?: string | undefined;
                spring?: string | undefined;
            } | undefined;
            opacity?: {
                muted?: number | undefined;
                disabled?: number | undefined;
                hover?: number | undefined;
            } | undefined;
            lineHeight?: {
                none?: number | undefined;
                normal?: number | undefined;
                tight?: number | undefined;
                relaxed?: number | undefined;
                loose?: number | undefined;
            } | undefined;
            tracking?: {
                normal?: string | undefined;
                tight?: string | undefined;
                wide?: string | undefined;
            } | undefined;
            borderWidth?: {
                default?: string | undefined;
                none?: string | undefined;
                thin?: string | undefined;
                thick?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    editor?: {
        persist?: "localStorage" | "sessionStorage" | "none" | {
            resource: string;
        } | undefined;
    } | undefined;
}>;

type ThemeColors = z.infer<typeof themeColorsSchema>;
type RadiusScale = z.infer<typeof radiusSchema>;
type SpacingScale = z.infer<typeof spacingSchema>;
type FontConfig = z.infer<typeof fontSchema>;
type ShadowScale = z.infer<typeof shadowSchema>;
type GlobalTokens = z.infer<typeof globalTokensSchema>;
type ComponentTokens = z.infer<typeof componentTokensSchema>;
type ThemeConfig = z.infer<typeof themeConfigSchema>;
interface Flavor {
    name: string;
    displayName: string;
    colors: ThemeColors;
    darkColors?: ThemeColors;
    radius: RadiusScale;
    spacing: SpacingScale;
    font: FontConfig;
    components?: ComponentTokens;
}
interface TokenEditor {
    setToken: (path: string, value: string) => void;
    setFlavor: (flavorName: string) => void;
    resetTokens: () => void;
    getTokens: () => Partial<NonNullable<ThemeConfig["overrides"]>>;
    currentFlavor: () => string;
    subscribe: (listener: (overrides: Partial<NonNullable<ThemeConfig["overrides"]>>) => void) => () => void;
}
type Responsive<T> = T | {
    default: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
};

export { type ComponentTokens, type Flavor, type FontConfig, type GlobalTokens, type RadiusScale, type Responsive, type ShadowScale, type SpacingScale, type ThemeColors, type ThemeConfig, type TokenEditor, componentTokensSchema, flavorOverrideSchema, fontSchema, globalTokensSchema, radiusSchema, shadowSchema, spacingSchema, themeColorsSchema, themeConfigSchema };
