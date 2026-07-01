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
}, z.core.$strict>;
declare const radiusSchema: z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
    full: "full";
}>;
declare const spacingSchema: z.ZodEnum<{
    default: "default";
    compact: "compact";
    comfortable: "comfortable";
    spacious: "spacious";
}>;
declare const fontSchema: z.ZodObject<{
    sans: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<{
            google: "google";
            url: "url";
        }>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strict>]>>;
    mono: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<{
            google: "google";
            url: "url";
        }>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strict>]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        family: z.ZodString;
        source: z.ZodEnum<{
            google: "google";
            url: "url";
        }>;
        url: z.ZodOptional<z.ZodString>;
        weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strict>]>>;
    baseSize: z.ZodOptional<z.ZodNumber>;
    scale: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const componentTokensSchema: z.ZodObject<{
    card: z.ZodOptional<z.ZodObject<{
        shadow: z.ZodOptional<z.ZodEnum<{
            none: "none";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>>;
        padding: z.ZodOptional<z.ZodEnum<{
            default: "default";
            compact: "compact";
            comfortable: "comfortable";
            spacious: "spacious";
        }>>;
        border: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    table: z.ZodOptional<z.ZodObject<{
        striped: z.ZodOptional<z.ZodBoolean>;
        density: z.ZodOptional<z.ZodEnum<{
            default: "default";
            compact: "compact";
            comfortable: "comfortable";
        }>>;
        headerBackground: z.ZodOptional<z.ZodBoolean>;
        hoverRow: z.ZodOptional<z.ZodBoolean>;
        borderStyle: z.ZodOptional<z.ZodEnum<{
            none: "none";
            horizontal: "horizontal";
            grid: "grid";
        }>>;
    }, z.core.$strict>>;
    button: z.ZodOptional<z.ZodObject<{
        weight: z.ZodOptional<z.ZodEnum<{
            bold: "bold";
            light: "light";
            medium: "medium";
        }>>;
        uppercase: z.ZodOptional<z.ZodBoolean>;
        iconSize: z.ZodOptional<z.ZodEnum<{
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
    }, z.core.$strict>>;
    input: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodEnum<{
            sm: "sm";
            md: "md";
            lg: "lg";
        }>>;
        variant: z.ZodOptional<z.ZodEnum<{
            outline: "outline";
            filled: "filled";
            underline: "underline";
        }>>;
    }, z.core.$strict>>;
    modal: z.ZodOptional<z.ZodObject<{
        overlay: z.ZodOptional<z.ZodEnum<{
            light: "light";
            dark: "dark";
            blur: "blur";
        }>>;
        animation: z.ZodOptional<z.ZodEnum<{
            none: "none";
            scale: "scale";
            fade: "fade";
            "slide-up": "slide-up";
        }>>;
    }, z.core.$strict>>;
    badge: z.ZodOptional<z.ZodObject<{
        variant: z.ZodOptional<z.ZodEnum<{
            outline: "outline";
            solid: "solid";
            soft: "soft";
        }>>;
        rounded: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    toast: z.ZodOptional<z.ZodObject<{
        position: z.ZodOptional<z.ZodEnum<{
            "top-right": "top-right";
            "top-center": "top-center";
            "bottom-right": "bottom-right";
            "bottom-center": "bottom-center";
        }>>;
        animation: z.ZodOptional<z.ZodEnum<{
            pop: "pop";
            fade: "fade";
            slide: "slide";
        }>>;
    }, z.core.$strict>>;
    scrollbar: z.ZodOptional<z.ZodObject<{
        width: z.ZodOptional<z.ZodString>;
        track: z.ZodOptional<z.ZodString>;
        thumb: z.ZodOptional<z.ZodString>;
        thumbHover: z.ZodOptional<z.ZodString>;
        radius: z.ZodOptional<z.ZodEnum<{
            none: "none";
            sm: "sm";
            md: "md";
            lg: "lg";
            full: "full";
        }>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
declare const shadowSchema: z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
}>;
declare const globalTokensSchema: z.ZodObject<{
    shadow: z.ZodOptional<z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>>;
    durations: z.ZodOptional<z.ZodObject<{
        instant: z.ZodOptional<z.ZodNumber>;
        fast: z.ZodOptional<z.ZodNumber>;
        normal: z.ZodOptional<z.ZodNumber>;
        slow: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    easings: z.ZodOptional<z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        in: z.ZodOptional<z.ZodString>;
        out: z.ZodOptional<z.ZodString>;
        inOut: z.ZodOptional<z.ZodString>;
        spring: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    opacity: z.ZodOptional<z.ZodObject<{
        disabled: z.ZodOptional<z.ZodNumber>;
        hover: z.ZodOptional<z.ZodNumber>;
        muted: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    lineHeight: z.ZodOptional<z.ZodObject<{
        none: z.ZodOptional<z.ZodNumber>;
        tight: z.ZodOptional<z.ZodNumber>;
        normal: z.ZodOptional<z.ZodNumber>;
        relaxed: z.ZodOptional<z.ZodNumber>;
        loose: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    tracking: z.ZodOptional<z.ZodObject<{
        tight: z.ZodOptional<z.ZodString>;
        normal: z.ZodOptional<z.ZodString>;
        wide: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    borderWidth: z.ZodOptional<z.ZodObject<{
        none: z.ZodOptional<z.ZodString>;
        thin: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        thick: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
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
    }, z.core.$strict>>;
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
    }, z.core.$strict>>;
    radius: z.ZodOptional<z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>>;
    spacing: z.ZodOptional<z.ZodEnum<{
        default: "default";
        compact: "compact";
        comfortable: "comfortable";
        spacious: "spacious";
    }>>;
    font: z.ZodOptional<z.ZodObject<{
        sans: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<{
                google: "google";
                url: "url";
            }>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strict>]>>;
        mono: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<{
                google: "google";
                url: "url";
            }>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strict>]>>;
        display: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            family: z.ZodString;
            source: z.ZodEnum<{
                google: "google";
                url: "url";
            }>;
            url: z.ZodOptional<z.ZodString>;
            weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strict>]>>;
        baseSize: z.ZodOptional<z.ZodNumber>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    components: z.ZodOptional<z.ZodObject<{
        card: z.ZodOptional<z.ZodObject<{
            shadow: z.ZodOptional<z.ZodEnum<{
                none: "none";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>>;
            padding: z.ZodOptional<z.ZodEnum<{
                default: "default";
                compact: "compact";
                comfortable: "comfortable";
                spacious: "spacious";
            }>>;
            border: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        table: z.ZodOptional<z.ZodObject<{
            striped: z.ZodOptional<z.ZodBoolean>;
            density: z.ZodOptional<z.ZodEnum<{
                default: "default";
                compact: "compact";
                comfortable: "comfortable";
            }>>;
            headerBackground: z.ZodOptional<z.ZodBoolean>;
            hoverRow: z.ZodOptional<z.ZodBoolean>;
            borderStyle: z.ZodOptional<z.ZodEnum<{
                none: "none";
                horizontal: "horizontal";
                grid: "grid";
            }>>;
        }, z.core.$strict>>;
        button: z.ZodOptional<z.ZodObject<{
            weight: z.ZodOptional<z.ZodEnum<{
                bold: "bold";
                light: "light";
                medium: "medium";
            }>>;
            uppercase: z.ZodOptional<z.ZodBoolean>;
            iconSize: z.ZodOptional<z.ZodEnum<{
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
        }, z.core.$strict>>;
        input: z.ZodOptional<z.ZodObject<{
            size: z.ZodOptional<z.ZodEnum<{
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
            variant: z.ZodOptional<z.ZodEnum<{
                outline: "outline";
                filled: "filled";
                underline: "underline";
            }>>;
        }, z.core.$strict>>;
        modal: z.ZodOptional<z.ZodObject<{
            overlay: z.ZodOptional<z.ZodEnum<{
                light: "light";
                dark: "dark";
                blur: "blur";
            }>>;
            animation: z.ZodOptional<z.ZodEnum<{
                none: "none";
                scale: "scale";
                fade: "fade";
                "slide-up": "slide-up";
            }>>;
        }, z.core.$strict>>;
        badge: z.ZodOptional<z.ZodObject<{
            variant: z.ZodOptional<z.ZodEnum<{
                outline: "outline";
                solid: "solid";
                soft: "soft";
            }>>;
            rounded: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        toast: z.ZodOptional<z.ZodObject<{
            position: z.ZodOptional<z.ZodEnum<{
                "top-right": "top-right";
                "top-center": "top-center";
                "bottom-right": "bottom-right";
                "bottom-center": "bottom-center";
            }>>;
            animation: z.ZodOptional<z.ZodEnum<{
                pop: "pop";
                fade: "fade";
                slide: "slide";
            }>>;
        }, z.core.$strict>>;
        scrollbar: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodString>;
            track: z.ZodOptional<z.ZodString>;
            thumb: z.ZodOptional<z.ZodString>;
            thumbHover: z.ZodOptional<z.ZodString>;
            radius: z.ZodOptional<z.ZodEnum<{
                none: "none";
                sm: "sm";
                md: "md";
                lg: "lg";
                full: "full";
            }>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
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
        }, z.core.$strict>>;
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
        }, z.core.$strict>>;
        radius: z.ZodOptional<z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>>;
        spacing: z.ZodOptional<z.ZodEnum<{
            default: "default";
            compact: "compact";
            comfortable: "comfortable";
            spacious: "spacious";
        }>>;
        font: z.ZodOptional<z.ZodObject<{
            sans: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            mono: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            display: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            baseSize: z.ZodOptional<z.ZodNumber>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        components: z.ZodOptional<z.ZodObject<{
            card: z.ZodOptional<z.ZodObject<{
                shadow: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>>;
                padding: z.ZodOptional<z.ZodEnum<{
                    default: "default";
                    compact: "compact";
                    comfortable: "comfortable";
                    spacious: "spacious";
                }>>;
                border: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>>;
            table: z.ZodOptional<z.ZodObject<{
                striped: z.ZodOptional<z.ZodBoolean>;
                density: z.ZodOptional<z.ZodEnum<{
                    default: "default";
                    compact: "compact";
                    comfortable: "comfortable";
                }>>;
                headerBackground: z.ZodOptional<z.ZodBoolean>;
                hoverRow: z.ZodOptional<z.ZodBoolean>;
                borderStyle: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    horizontal: "horizontal";
                    grid: "grid";
                }>>;
            }, z.core.$strict>>;
            button: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodEnum<{
                    bold: "bold";
                    light: "light";
                    medium: "medium";
                }>>;
                uppercase: z.ZodOptional<z.ZodBoolean>;
                iconSize: z.ZodOptional<z.ZodEnum<{
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                }>>;
            }, z.core.$strict>>;
            input: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodEnum<{
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                }>>;
                variant: z.ZodOptional<z.ZodEnum<{
                    outline: "outline";
                    filled: "filled";
                    underline: "underline";
                }>>;
            }, z.core.$strict>>;
            modal: z.ZodOptional<z.ZodObject<{
                overlay: z.ZodOptional<z.ZodEnum<{
                    light: "light";
                    dark: "dark";
                    blur: "blur";
                }>>;
                animation: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    scale: "scale";
                    fade: "fade";
                    "slide-up": "slide-up";
                }>>;
            }, z.core.$strict>>;
            badge: z.ZodOptional<z.ZodObject<{
                variant: z.ZodOptional<z.ZodEnum<{
                    outline: "outline";
                    solid: "solid";
                    soft: "soft";
                }>>;
                rounded: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>>;
            toast: z.ZodOptional<z.ZodObject<{
                position: z.ZodOptional<z.ZodEnum<{
                    "top-right": "top-right";
                    "top-center": "top-center";
                    "bottom-right": "bottom-right";
                    "bottom-center": "bottom-center";
                }>>;
                animation: z.ZodOptional<z.ZodEnum<{
                    pop: "pop";
                    fade: "fade";
                    slide: "slide";
                }>>;
            }, z.core.$strict>>;
            scrollbar: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodString>;
                track: z.ZodOptional<z.ZodString>;
                thumb: z.ZodOptional<z.ZodString>;
                thumbHover: z.ZodOptional<z.ZodString>;
                radius: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    full: "full";
                }>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>>;
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
        }, z.core.$strict>>;
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
        }, z.core.$strict>>;
        radius: z.ZodOptional<z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>>;
        spacing: z.ZodOptional<z.ZodEnum<{
            default: "default";
            compact: "compact";
            comfortable: "comfortable";
            spacious: "spacious";
        }>>;
        font: z.ZodOptional<z.ZodObject<{
            sans: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            mono: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            display: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                family: z.ZodString;
                source: z.ZodEnum<{
                    google: "google";
                    url: "url";
                }>;
                url: z.ZodOptional<z.ZodString>;
                weights: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strict>]>>;
            baseSize: z.ZodOptional<z.ZodNumber>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
        components: z.ZodOptional<z.ZodObject<{
            card: z.ZodOptional<z.ZodObject<{
                shadow: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>>;
                padding: z.ZodOptional<z.ZodEnum<{
                    default: "default";
                    compact: "compact";
                    comfortable: "comfortable";
                    spacious: "spacious";
                }>>;
                border: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>>;
            table: z.ZodOptional<z.ZodObject<{
                striped: z.ZodOptional<z.ZodBoolean>;
                density: z.ZodOptional<z.ZodEnum<{
                    default: "default";
                    compact: "compact";
                    comfortable: "comfortable";
                }>>;
                headerBackground: z.ZodOptional<z.ZodBoolean>;
                hoverRow: z.ZodOptional<z.ZodBoolean>;
                borderStyle: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    horizontal: "horizontal";
                    grid: "grid";
                }>>;
            }, z.core.$strict>>;
            button: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodEnum<{
                    bold: "bold";
                    light: "light";
                    medium: "medium";
                }>>;
                uppercase: z.ZodOptional<z.ZodBoolean>;
                iconSize: z.ZodOptional<z.ZodEnum<{
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                }>>;
            }, z.core.$strict>>;
            input: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodEnum<{
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                }>>;
                variant: z.ZodOptional<z.ZodEnum<{
                    outline: "outline";
                    filled: "filled";
                    underline: "underline";
                }>>;
            }, z.core.$strict>>;
            modal: z.ZodOptional<z.ZodObject<{
                overlay: z.ZodOptional<z.ZodEnum<{
                    light: "light";
                    dark: "dark";
                    blur: "blur";
                }>>;
                animation: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    scale: "scale";
                    fade: "fade";
                    "slide-up": "slide-up";
                }>>;
            }, z.core.$strict>>;
            badge: z.ZodOptional<z.ZodObject<{
                variant: z.ZodOptional<z.ZodEnum<{
                    outline: "outline";
                    solid: "solid";
                    soft: "soft";
                }>>;
                rounded: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>>;
            toast: z.ZodOptional<z.ZodObject<{
                position: z.ZodOptional<z.ZodEnum<{
                    "top-right": "top-right";
                    "top-center": "top-center";
                    "bottom-right": "bottom-right";
                    "bottom-center": "bottom-center";
                }>>;
                animation: z.ZodOptional<z.ZodEnum<{
                    pop: "pop";
                    fade: "fade";
                    slide: "slide";
                }>>;
            }, z.core.$strict>>;
            scrollbar: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodString>;
                track: z.ZodOptional<z.ZodString>;
                thumb: z.ZodOptional<z.ZodString>;
                thumbHover: z.ZodOptional<z.ZodString>;
                radius: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    full: "full";
                }>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        tokens: z.ZodOptional<z.ZodObject<{
            shadow: z.ZodOptional<z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>>;
            durations: z.ZodOptional<z.ZodObject<{
                instant: z.ZodOptional<z.ZodNumber>;
                fast: z.ZodOptional<z.ZodNumber>;
                normal: z.ZodOptional<z.ZodNumber>;
                slow: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            easings: z.ZodOptional<z.ZodObject<{
                default: z.ZodOptional<z.ZodString>;
                in: z.ZodOptional<z.ZodString>;
                out: z.ZodOptional<z.ZodString>;
                inOut: z.ZodOptional<z.ZodString>;
                spring: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            opacity: z.ZodOptional<z.ZodObject<{
                disabled: z.ZodOptional<z.ZodNumber>;
                hover: z.ZodOptional<z.ZodNumber>;
                muted: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            lineHeight: z.ZodOptional<z.ZodObject<{
                none: z.ZodOptional<z.ZodNumber>;
                tight: z.ZodOptional<z.ZodNumber>;
                normal: z.ZodOptional<z.ZodNumber>;
                relaxed: z.ZodOptional<z.ZodNumber>;
                loose: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            tracking: z.ZodOptional<z.ZodObject<{
                tight: z.ZodOptional<z.ZodString>;
                normal: z.ZodOptional<z.ZodString>;
                wide: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            borderWidth: z.ZodOptional<z.ZodObject<{
                none: z.ZodOptional<z.ZodString>;
                thin: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                thick: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    mode: z.ZodOptional<z.ZodEnum<{
        light: "light";
        dark: "dark";
        system: "system";
    }>>;
    editor: z.ZodOptional<z.ZodObject<{
        persist: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"none">, z.ZodLiteral<"localStorage">, z.ZodLiteral<"sessionStorage">, z.ZodObject<{
            resource: z.ZodString;
        }, z.core.$strict>]>>;
    }, z.core.$strict>>;
}, z.core.$strict>;

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
