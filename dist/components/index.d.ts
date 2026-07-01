import { z } from 'zod';

declare const componentTokenOverridesSchema: z.ZodRecord<z.ZodString, z.ZodString>;
declare const componentZIndexSchema: z.ZodUnion<readonly [z.ZodEnum<{
    toast: "toast";
    modal: "modal";
    popover: "popover";
    overlay: "overlay";
    base: "base";
    dropdown: "dropdown";
    sticky: "sticky";
}>, z.ZodNumber]>;
declare const componentAnimationSchema: z.ZodObject<{
    enter: z.ZodEnum<{
        scale: "scale";
        fade: "fade";
        "fade-up": "fade-up";
        "fade-down": "fade-down";
        "slide-left": "slide-left";
        "slide-right": "slide-right";
        bounce: "bounce";
    }>;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        instant: "instant";
        fast: "fast";
        normal: "normal";
        slow: "slow";
    }>, z.ZodNumber]>>;
    delay: z.ZodOptional<z.ZodNumber>;
    easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        default: "default";
        in: "in";
        out: "out";
        spring: "spring";
        "in-out": "in-out";
    }>, z.ZodString]>>;
    stagger: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const componentGradientStopSchema: z.ZodObject<{
    color: z.ZodString;
    position: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
declare const componentGradientSchema: z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<{
        linear: "linear";
        radial: "radial";
        conic: "conic";
    }>>;
    direction: z.ZodOptional<z.ZodString>;
    stops: z.ZodArray<z.ZodObject<{
        color: z.ZodString;
        position: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
declare const componentBackgroundSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    overlay: z.ZodOptional<z.ZodString>;
    gradient: z.ZodOptional<z.ZodObject<{
        type: z.ZodDefault<z.ZodEnum<{
            linear: "linear";
            radial: "radial";
            conic: "conic";
        }>>;
        direction: z.ZodOptional<z.ZodString>;
        stops: z.ZodArray<z.ZodObject<{
            color: z.ZodString;
            position: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    position: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        cover: "cover";
        contain: "contain";
    }>>;
    fixed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>]>;
declare const componentTransitionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    transform: "transform";
    all: "all";
    shadow: "shadow";
    opacity: "opacity";
    colors: "colors";
}>, z.ZodObject<{
    property: z.ZodDefault<z.ZodString>;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        instant: "instant";
        fast: "fast";
        normal: "normal";
        slow: "slow";
    }>, z.ZodNumber]>>;
    easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        default: "default";
        in: "in";
        out: "out";
        spring: "spring";
        "in-out": "in-out";
    }>, z.ZodString]>>;
}, z.core.$strict>]>;
declare const spacingEnum: z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
    "2xs": "2xs";
    "2xl": "2xl";
    "3xl": "3xl";
}>;
declare const radiusEnum: z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
    full: "full";
}>;
declare const shadowEnum: z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
}>;
declare const fontSizeEnum: z.ZodEnum<{
    xs: "xs";
    sm: "sm";
    lg: "lg";
    xl: "xl";
    base: "base";
    "2xl": "2xl";
    "3xl": "3xl";
    "4xl": "4xl";
}>;
declare const fontWeightEnum: z.ZodEnum<{
    bold: "bold";
    light: "light";
    medium: "medium";
    normal: "normal";
    semibold: "semibold";
}>;
declare const lineHeightEnum: z.ZodEnum<{
    none: "none";
    normal: "normal";
    tight: "tight";
    relaxed: "relaxed";
    loose: "loose";
    snug: "snug";
}>;
declare const letterSpacingEnum: z.ZodEnum<{
    normal: "normal";
    tight: "tight";
    wide: "wide";
}>;
declare const componentDisplaySchema: z.ZodEnum<{
    none: "none";
    block: "block";
    grid: "grid";
    flex: "flex";
    inline: "inline";
    "inline-flex": "inline-flex";
    "inline-grid": "inline-grid";
}>;
declare const componentFlexDirectionSchema: z.ZodEnum<{
    row: "row";
    column: "column";
    "row-reverse": "row-reverse";
    "column-reverse": "column-reverse";
}>;
declare const componentAlignItemsSchema: z.ZodEnum<{
    start: "start";
    center: "center";
    end: "end";
    stretch: "stretch";
    baseline: "baseline";
}>;
declare const componentJustifyContentSchema: z.ZodEnum<{
    start: "start";
    center: "center";
    end: "end";
    between: "between";
    around: "around";
    evenly: "evenly";
}>;
declare const componentTextAlignSchema: z.ZodEnum<{
    center: "center";
    left: "left";
    right: "right";
    justify: "justify";
}>;
declare const componentPositionSchema: z.ZodEnum<{
    fixed: "fixed";
    sticky: "sticky";
    relative: "relative";
    absolute: "absolute";
}>;
declare const componentFlexWrapSchema: z.ZodEnum<{
    wrap: "wrap";
    nowrap: "nowrap";
    "wrap-reverse": "wrap-reverse";
}>;
declare const spacingValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
    "2xs": "2xs";
    "2xl": "2xl";
    "3xl": "3xl";
}>, z.ZodString, z.ZodNumber]>;
declare const radiusValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
    full: "full";
}>, z.ZodString, z.ZodNumber]>;
declare const shadowValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    xs: "xs";
    sm: "sm";
    md: "md";
    lg: "lg";
    xl: "xl";
}>, z.ZodString]>;
declare const fontSizeValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    xs: "xs";
    sm: "sm";
    lg: "lg";
    xl: "xl";
    base: "base";
    "2xl": "2xl";
    "3xl": "3xl";
    "4xl": "4xl";
}>, z.ZodString, z.ZodNumber]>;
declare const fontWeightValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    bold: "bold";
    light: "light";
    medium: "medium";
    normal: "normal";
    semibold: "semibold";
}>, z.ZodNumber, z.ZodString]>;
declare const lineHeightValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    normal: "normal";
    tight: "tight";
    relaxed: "relaxed";
    loose: "loose";
    snug: "snug";
}>, z.ZodString, z.ZodNumber]>;
declare const letterSpacingValueSchema: z.ZodUnion<readonly [z.ZodEnum<{
    normal: "normal";
    tight: "tight";
    wide: "wide";
}>, z.ZodString, z.ZodNumber]>;
declare const dimensionValueSchema: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
declare function responsiveValue<T extends z.ZodTypeAny>(valueSchema: T): z.ZodUnion<readonly [T, z.ZodObject<{
    default: T;
    sm: z.ZodOptional<T>;
    md: z.ZodOptional<T>;
    lg: z.ZodOptional<T>;
    xl: z.ZodOptional<T>;
    "2xl": z.ZodOptional<T>;
}, z.core.$strict>]>;
declare const hoverConfigSchema: z.ZodObject<{
    bg: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    opacity: z.ZodOptional<z.ZodNumber>;
    transform: z.ZodOptional<z.ZodString>;
    scale: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const focusConfigSchema: z.ZodObject<{
    bg: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
    outline: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
declare const activeConfigSchema: z.ZodObject<{
    bg: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    transform: z.ZodOptional<z.ZodString>;
    scale: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
declare const styleableElementFields: {
    readonly padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    readonly color: z.ZodOptional<z.ZodString>;
    readonly borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    readonly border: z.ZodOptional<z.ZodString>;
    readonly shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    readonly opacity: z.ZodOptional<z.ZodNumber>;
    readonly overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    readonly position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    readonly inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    readonly display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    readonly flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    readonly alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    readonly justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    readonly flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    readonly flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    readonly textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    readonly fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    readonly fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    readonly lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    readonly letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    readonly hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    readonly focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    readonly active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
};
declare const styleableElementSchema: z.ZodObject<{
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
declare const SURFACE_STATE_NAMES: readonly ["hover", "focus", "open", "selected", "current", "active", "completed", "invalid", "disabled"];
declare const surfaceStateNameSchema: z.ZodEnum<{
    disabled: "disabled";
    hover: "hover";
    focus: "focus";
    open: "open";
    selected: "selected";
    current: "current";
    active: "active";
    completed: "completed";
    invalid: "invalid";
}>;
declare const slotStateNameSchema: z.ZodEnum<{
    disabled: "disabled";
    hover: "hover";
    focus: "focus";
    open: "open";
    selected: "selected";
    current: "current";
    active: "active";
    completed: "completed";
    invalid: "invalid";
}>;
declare const statefulElementSchema: z.ZodObject<{
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    states: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        disabled: "disabled";
        hover: "hover";
        focus: "focus";
        open: "open";
        selected: "selected";
        current: "current";
        active: "active";
        completed: "completed";
        invalid: "invalid";
    }> & z.core.$partial, z.ZodObject<{
        padding: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        paddingX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        paddingY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        margin: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        marginX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        marginY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        gap: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        width: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        minWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        maxWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        height: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        minHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        maxHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        bg: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            image: z.ZodOptional<z.ZodString>;
            overlay: z.ZodOptional<z.ZodString>;
            gradient: z.ZodOptional<z.ZodObject<{
                type: z.ZodDefault<z.ZodEnum<{
                    linear: "linear";
                    radial: "radial";
                    conic: "conic";
                }>>;
                direction: z.ZodOptional<z.ZodString>;
                stops: z.ZodArray<z.ZodObject<{
                    color: z.ZodString;
                    position: z.ZodOptional<z.ZodString>;
                }, z.core.$strict>>;
            }, z.core.$strict>>;
            position: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodEnum<{
                auto: "auto";
                cover: "cover";
                contain: "contain";
            }>>;
            fixed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>]>]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        borderRadius: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>>;
        border: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        shadow: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>>;
        opacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        overflow: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            hidden: "hidden";
            scroll: "scroll";
            visible: "visible";
        }>>>;
        position: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            fixed: "fixed";
            sticky: "sticky";
            relative: "relative";
            absolute: "absolute";
        }>>>;
        inset: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        display: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>, z.ZodObject<{
            default: z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>;
            sm: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            md: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            lg: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            xl: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            "2xl": z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
        }, z.core.$strict>]>>>;
        flexDirection: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>, z.ZodObject<{
            default: z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>;
            sm: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            md: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            lg: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            xl: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            "2xl": z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
        }, z.core.$strict>]>>>;
        alignItems: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            start: "start";
            center: "center";
            end: "end";
            stretch: "stretch";
            baseline: "baseline";
        }>>>;
        justifyContent: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            start: "start";
            center: "center";
            end: "end";
            between: "between";
            around: "around";
            evenly: "evenly";
        }>>>;
        flexWrap: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            wrap: "wrap";
            nowrap: "nowrap";
            "wrap-reverse": "wrap-reverse";
        }>>>;
        flex: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        textAlign: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            center: "center";
            left: "left";
            right: "right";
            justify: "justify";
        }>>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            bold: "bold";
            light: "light";
            medium: "medium";
            normal: "normal";
            semibold: "semibold";
        }>, z.ZodNumber, z.ZodString]>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            normal: "normal";
            tight: "tight";
            relaxed: "relaxed";
            loose: "loose";
            snug: "snug";
        }>, z.ZodString, z.ZodNumber]>>>;
        letterSpacing: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            normal: "normal";
            tight: "tight";
            wide: "wide";
        }>, z.ZodString, z.ZodNumber]>>>;
        hover: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                full: "full";
            }>, z.ZodString, z.ZodNumber]>>;
            border: z.ZodOptional<z.ZodString>;
            opacity: z.ZodOptional<z.ZodNumber>;
            transform: z.ZodOptional<z.ZodString>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>>;
        focus: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            outline: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        active: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            transform: z.ZodOptional<z.ZodString>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
declare function slotsSchema<const T extends readonly [string, ...string[]]>(slotNames: T): z.ZodObject<Record<T[number], z.ZodOptional<z.ZodObject<{
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    states: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        disabled: "disabled";
        hover: "hover";
        focus: "focus";
        open: "open";
        selected: "selected";
        current: "current";
        active: "active";
        completed: "completed";
        invalid: "invalid";
    }> & z.core.$partial, z.ZodObject<{
        padding: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        paddingX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        paddingY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        margin: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        marginX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        marginY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        gap: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        width: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        minWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        maxWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        height: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        minHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        maxHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        bg: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            image: z.ZodOptional<z.ZodString>;
            overlay: z.ZodOptional<z.ZodString>;
            gradient: z.ZodOptional<z.ZodObject<{
                type: z.ZodDefault<z.ZodEnum<{
                    linear: "linear";
                    radial: "radial";
                    conic: "conic";
                }>>;
                direction: z.ZodOptional<z.ZodString>;
                stops: z.ZodArray<z.ZodObject<{
                    color: z.ZodString;
                    position: z.ZodOptional<z.ZodString>;
                }, z.core.$strict>>;
            }, z.core.$strict>>;
            position: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodEnum<{
                auto: "auto";
                cover: "cover";
                contain: "contain";
            }>>;
            fixed: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>]>]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        borderRadius: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>>;
        border: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        shadow: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>>;
        opacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        overflow: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            hidden: "hidden";
            scroll: "scroll";
            visible: "visible";
        }>>>;
        position: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            fixed: "fixed";
            sticky: "sticky";
            relative: "relative";
            absolute: "absolute";
        }>>>;
        inset: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        display: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>, z.ZodObject<{
            default: z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>;
            sm: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            md: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            lg: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            xl: z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
            "2xl": z.ZodOptional<z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>>;
        }, z.core.$strict>]>>>;
        flexDirection: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>, z.ZodObject<{
            default: z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>;
            sm: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            md: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            lg: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            xl: z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
            "2xl": z.ZodOptional<z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>>;
        }, z.core.$strict>]>>>;
        alignItems: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            start: "start";
            center: "center";
            end: "end";
            stretch: "stretch";
            baseline: "baseline";
        }>>>;
        justifyContent: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            start: "start";
            center: "center";
            end: "end";
            between: "between";
            around: "around";
            evenly: "evenly";
        }>>>;
        flexWrap: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            wrap: "wrap";
            nowrap: "nowrap";
            "wrap-reverse": "wrap-reverse";
        }>>>;
        flex: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        textAlign: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            center: "center";
            left: "left";
            right: "right";
            justify: "justify";
        }>>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
            default: z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>;
            sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
            "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>>;
        }, z.core.$strict>]>>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            bold: "bold";
            light: "light";
            medium: "medium";
            normal: "normal";
            semibold: "semibold";
        }>, z.ZodNumber, z.ZodString]>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            normal: "normal";
            tight: "tight";
            relaxed: "relaxed";
            loose: "loose";
            snug: "snug";
        }>, z.ZodString, z.ZodNumber]>>>;
        letterSpacing: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            normal: "normal";
            tight: "tight";
            wide: "wide";
        }>, z.ZodString, z.ZodNumber]>>>;
        hover: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                full: "full";
            }>, z.ZodString, z.ZodNumber]>>;
            border: z.ZodOptional<z.ZodString>;
            opacity: z.ZodOptional<z.ZodNumber>;
            transform: z.ZodOptional<z.ZodString>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>>;
        focus: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            outline: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        active: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            bg: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            transform: z.ZodOptional<z.ZodString>;
            scale: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>>;
}, z.core.$strict>>> extends infer T_1 ? { -readonly [P in keyof T_1]: T_1[P]; } : never, z.core.$strict>;
declare const exitAnimationSchema: z.ZodObject<{
    preset: z.ZodOptional<z.ZodEnum<{
        scale: "scale";
        fade: "fade";
        "fade-up": "fade-up";
        "fade-down": "fade-down";
        "slide-left": "slide-left";
        "slide-right": "slide-right";
    }>>;
    duration: z.ZodOptional<z.ZodEnum<{
        instant: "instant";
        fast: "fast";
        normal: "normal";
        slow: "slow";
    }>>;
}, z.core.$strict>;
declare const sharedBaseComponentSchema: z.ZodObject<{
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    id: z.ZodOptional<z.ZodString>;
    tokens: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    visibleWhen: z.ZodOptional<z.ZodString>;
    visible: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
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
        expr: z.ZodString;
    }, z.core.$strict>]>>;
    zIndex: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        toast: "toast";
        modal: "modal";
        popover: "popover";
        overlay: "overlay";
        base: "base";
        dropdown: "dropdown";
        sticky: "sticky";
    }>, z.ZodNumber]>>;
    animation: z.ZodOptional<z.ZodObject<{
        enter: z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
            bounce: "bounce";
        }>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        delay: z.ZodOptional<z.ZodNumber>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
        stagger: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    glass: z.ZodOptional<z.ZodBoolean>;
    background: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>>;
    transition: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        transform: "transform";
        all: "all";
        shadow: "shadow";
        opacity: "opacity";
        colors: "colors";
    }>, z.ZodObject<{
        property: z.ZodDefault<z.ZodString>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
    }, z.core.$strict>]>>;
    exitAnimation: z.ZodOptional<z.ZodObject<{
        preset: z.ZodOptional<z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
        }>>;
        duration: z.ZodOptional<z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>>;
    }, z.core.$strict>>;
    span: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        default: z.ZodNumber;
        sm: z.ZodOptional<z.ZodNumber>;
        md: z.ZodOptional<z.ZodNumber>;
        lg: z.ZodOptional<z.ZodNumber>;
        xl: z.ZodOptional<z.ZodNumber>;
        "2xl": z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    slots: z.ZodOptional<z.ZodObject<{
        root: z.ZodOptional<z.ZodObject<{
            padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                image: z.ZodOptional<z.ZodString>;
                overlay: z.ZodOptional<z.ZodString>;
                gradient: z.ZodOptional<z.ZodObject<{
                    type: z.ZodDefault<z.ZodEnum<{
                        linear: "linear";
                        radial: "radial";
                        conic: "conic";
                    }>>;
                    direction: z.ZodOptional<z.ZodString>;
                    stops: z.ZodArray<z.ZodObject<{
                        color: z.ZodString;
                        position: z.ZodOptional<z.ZodString>;
                    }, z.core.$strict>>;
                }, z.core.$strict>>;
                position: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    cover: "cover";
                    contain: "contain";
                }>>;
                fixed: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>]>]>>;
            color: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                full: "full";
            }>, z.ZodString, z.ZodNumber]>>;
            border: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            opacity: z.ZodOptional<z.ZodNumber>;
            overflow: z.ZodOptional<z.ZodEnum<{
                auto: "auto";
                hidden: "hidden";
                scroll: "scroll";
                visible: "visible";
            }>>;
            position: z.ZodOptional<z.ZodEnum<{
                fixed: "fixed";
                sticky: "sticky";
                relative: "relative";
                absolute: "absolute";
            }>>;
            inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
            }, z.core.$strict>]>>;
            flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
            }, z.core.$strict>]>>;
            alignItems: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                stretch: "stretch";
                baseline: "baseline";
            }>>;
            justifyContent: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                between: "between";
                around: "around";
                evenly: "evenly";
            }>>;
            flexWrap: z.ZodOptional<z.ZodEnum<{
                wrap: "wrap";
                nowrap: "nowrap";
                "wrap-reverse": "wrap-reverse";
            }>>;
            flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            textAlign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                left: "left";
                right: "right";
                justify: "justify";
            }>>;
            fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                bold: "bold";
                light: "light";
                medium: "medium";
                normal: "normal";
                semibold: "semibold";
            }>, z.ZodNumber, z.ZodString]>>;
            lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                normal: "normal";
                tight: "tight";
                relaxed: "relaxed";
                loose: "loose";
                snug: "snug";
            }>, z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                normal: "normal";
                tight: "tight";
                wide: "wide";
            }>, z.ZodString, z.ZodNumber]>>;
            hover: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>;
                border: z.ZodOptional<z.ZodString>;
                opacity: z.ZodOptional<z.ZodNumber>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            focus: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                outline: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            active: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            states: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                disabled: "disabled";
                hover: "hover";
                focus: "focus";
                open: "open";
                selected: "selected";
                current: "current";
                active: "active";
                completed: "completed";
                invalid: "invalid";
            }> & z.core.$partial, z.ZodObject<{
                padding: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                margin: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                gap: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                width: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                height: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                bg: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                    image: z.ZodOptional<z.ZodString>;
                    overlay: z.ZodOptional<z.ZodString>;
                    gradient: z.ZodOptional<z.ZodObject<{
                        type: z.ZodDefault<z.ZodEnum<{
                            linear: "linear";
                            radial: "radial";
                            conic: "conic";
                        }>>;
                        direction: z.ZodOptional<z.ZodString>;
                        stops: z.ZodArray<z.ZodObject<{
                            color: z.ZodString;
                            position: z.ZodOptional<z.ZodString>;
                        }, z.core.$strict>>;
                    }, z.core.$strict>>;
                    position: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodEnum<{
                        auto: "auto";
                        cover: "cover";
                        contain: "contain";
                    }>>;
                    fixed: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strict>]>]>>>;
                color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                borderRadius: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>>;
                border: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                shadow: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>>;
                opacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                overflow: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    hidden: "hidden";
                    scroll: "scroll";
                    visible: "visible";
                }>>>;
                position: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    fixed: "fixed";
                    sticky: "sticky";
                    relative: "relative";
                    absolute: "absolute";
                }>>>;
                inset: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                display: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                }, z.core.$strict>]>>>;
                flexDirection: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                }, z.core.$strict>]>>>;
                alignItems: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    stretch: "stretch";
                    baseline: "baseline";
                }>>>;
                justifyContent: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    between: "between";
                    around: "around";
                    evenly: "evenly";
                }>>>;
                flexWrap: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    wrap: "wrap";
                    nowrap: "nowrap";
                    "wrap-reverse": "wrap-reverse";
                }>>>;
                flex: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                textAlign: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    left: "left";
                    right: "right";
                    justify: "justify";
                }>>>;
                fontSize: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                fontWeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    bold: "bold";
                    light: "light";
                    medium: "medium";
                    normal: "normal";
                    semibold: "semibold";
                }>, z.ZodNumber, z.ZodString]>>>;
                lineHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    normal: "normal";
                    tight: "tight";
                    relaxed: "relaxed";
                    loose: "loose";
                    snug: "snug";
                }>, z.ZodString, z.ZodNumber]>>>;
                letterSpacing: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    normal: "normal";
                    tight: "tight";
                    wide: "wide";
                }>, z.ZodString, z.ZodNumber]>>>;
                hover: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        full: "full";
                    }>, z.ZodString, z.ZodNumber]>>;
                    border: z.ZodOptional<z.ZodString>;
                    opacity: z.ZodOptional<z.ZodNumber>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
                focus: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                    outline: z.ZodOptional<z.ZodString>;
                }, z.core.$strict>>>;
                active: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
            }, z.core.$strict>>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strip>;
declare function extendSharedComponentSchema<T extends z.ZodRawShape>(shape: T): z.ZodObject<(("id" | "background" | "border" | "display" | "shadow" | "padding" | "animation" | "position" | "width" | "hover" | "opacity" | "lineHeight" | "tokens" | "color" | "flex" | "bg" | "borderRadius" | "visible" | "focus" | "active" | "paddingX" | "paddingY" | "margin" | "marginX" | "marginY" | "gap" | "minWidth" | "maxWidth" | "height" | "minHeight" | "maxHeight" | "overflow" | "inset" | "flexDirection" | "alignItems" | "justifyContent" | "flexWrap" | "textAlign" | "fontSize" | "fontWeight" | "letterSpacing" | "visibleWhen" | "zIndex" | "glass" | "transition" | "exitAnimation" | "span" | "slots") & keyof T extends never ? {
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    id: z.ZodOptional<z.ZodString>;
    tokens: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    visibleWhen: z.ZodOptional<z.ZodString>;
    visible: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
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
        expr: z.ZodString;
    }, z.core.$strict>]>>;
    zIndex: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        toast: "toast";
        modal: "modal";
        popover: "popover";
        overlay: "overlay";
        base: "base";
        dropdown: "dropdown";
        sticky: "sticky";
    }>, z.ZodNumber]>>;
    animation: z.ZodOptional<z.ZodObject<{
        enter: z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
            bounce: "bounce";
        }>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        delay: z.ZodOptional<z.ZodNumber>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
        stagger: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    glass: z.ZodOptional<z.ZodBoolean>;
    background: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>>;
    transition: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        transform: "transform";
        all: "all";
        shadow: "shadow";
        opacity: "opacity";
        colors: "colors";
    }>, z.ZodObject<{
        property: z.ZodDefault<z.ZodString>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
    }, z.core.$strict>]>>;
    exitAnimation: z.ZodOptional<z.ZodObject<{
        preset: z.ZodOptional<z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
        }>>;
        duration: z.ZodOptional<z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>>;
    }, z.core.$strict>>;
    span: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        default: z.ZodNumber;
        sm: z.ZodOptional<z.ZodNumber>;
        md: z.ZodOptional<z.ZodNumber>;
        lg: z.ZodOptional<z.ZodNumber>;
        xl: z.ZodOptional<z.ZodNumber>;
        "2xl": z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    slots: z.ZodOptional<z.ZodObject<{
        root: z.ZodOptional<z.ZodObject<{
            padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                image: z.ZodOptional<z.ZodString>;
                overlay: z.ZodOptional<z.ZodString>;
                gradient: z.ZodOptional<z.ZodObject<{
                    type: z.ZodDefault<z.ZodEnum<{
                        linear: "linear";
                        radial: "radial";
                        conic: "conic";
                    }>>;
                    direction: z.ZodOptional<z.ZodString>;
                    stops: z.ZodArray<z.ZodObject<{
                        color: z.ZodString;
                        position: z.ZodOptional<z.ZodString>;
                    }, z.core.$strict>>;
                }, z.core.$strict>>;
                position: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    cover: "cover";
                    contain: "contain";
                }>>;
                fixed: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>]>]>>;
            color: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                full: "full";
            }>, z.ZodString, z.ZodNumber]>>;
            border: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            opacity: z.ZodOptional<z.ZodNumber>;
            overflow: z.ZodOptional<z.ZodEnum<{
                auto: "auto";
                hidden: "hidden";
                scroll: "scroll";
                visible: "visible";
            }>>;
            position: z.ZodOptional<z.ZodEnum<{
                fixed: "fixed";
                sticky: "sticky";
                relative: "relative";
                absolute: "absolute";
            }>>;
            inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
            }, z.core.$strict>]>>;
            flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
            }, z.core.$strict>]>>;
            alignItems: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                stretch: "stretch";
                baseline: "baseline";
            }>>;
            justifyContent: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                between: "between";
                around: "around";
                evenly: "evenly";
            }>>;
            flexWrap: z.ZodOptional<z.ZodEnum<{
                wrap: "wrap";
                nowrap: "nowrap";
                "wrap-reverse": "wrap-reverse";
            }>>;
            flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            textAlign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                left: "left";
                right: "right";
                justify: "justify";
            }>>;
            fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                bold: "bold";
                light: "light";
                medium: "medium";
                normal: "normal";
                semibold: "semibold";
            }>, z.ZodNumber, z.ZodString]>>;
            lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                normal: "normal";
                tight: "tight";
                relaxed: "relaxed";
                loose: "loose";
                snug: "snug";
            }>, z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                normal: "normal";
                tight: "tight";
                wide: "wide";
            }>, z.ZodString, z.ZodNumber]>>;
            hover: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>;
                border: z.ZodOptional<z.ZodString>;
                opacity: z.ZodOptional<z.ZodNumber>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            focus: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                outline: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            active: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            states: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                disabled: "disabled";
                hover: "hover";
                focus: "focus";
                open: "open";
                selected: "selected";
                current: "current";
                active: "active";
                completed: "completed";
                invalid: "invalid";
            }> & z.core.$partial, z.ZodObject<{
                padding: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                margin: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                gap: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                width: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                height: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                bg: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                    image: z.ZodOptional<z.ZodString>;
                    overlay: z.ZodOptional<z.ZodString>;
                    gradient: z.ZodOptional<z.ZodObject<{
                        type: z.ZodDefault<z.ZodEnum<{
                            linear: "linear";
                            radial: "radial";
                            conic: "conic";
                        }>>;
                        direction: z.ZodOptional<z.ZodString>;
                        stops: z.ZodArray<z.ZodObject<{
                            color: z.ZodString;
                            position: z.ZodOptional<z.ZodString>;
                        }, z.core.$strict>>;
                    }, z.core.$strict>>;
                    position: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodEnum<{
                        auto: "auto";
                        cover: "cover";
                        contain: "contain";
                    }>>;
                    fixed: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strict>]>]>>>;
                color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                borderRadius: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>>;
                border: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                shadow: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>>;
                opacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                overflow: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    hidden: "hidden";
                    scroll: "scroll";
                    visible: "visible";
                }>>>;
                position: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    fixed: "fixed";
                    sticky: "sticky";
                    relative: "relative";
                    absolute: "absolute";
                }>>>;
                inset: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                display: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                }, z.core.$strict>]>>>;
                flexDirection: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                }, z.core.$strict>]>>>;
                alignItems: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    stretch: "stretch";
                    baseline: "baseline";
                }>>>;
                justifyContent: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    between: "between";
                    around: "around";
                    evenly: "evenly";
                }>>>;
                flexWrap: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    wrap: "wrap";
                    nowrap: "nowrap";
                    "wrap-reverse": "wrap-reverse";
                }>>>;
                flex: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                textAlign: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    left: "left";
                    right: "right";
                    justify: "justify";
                }>>>;
                fontSize: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                fontWeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    bold: "bold";
                    light: "light";
                    medium: "medium";
                    normal: "normal";
                    semibold: "semibold";
                }>, z.ZodNumber, z.ZodString]>>>;
                lineHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    normal: "normal";
                    tight: "tight";
                    relaxed: "relaxed";
                    loose: "loose";
                    snug: "snug";
                }>, z.ZodString, z.ZodNumber]>>>;
                letterSpacing: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    normal: "normal";
                    tight: "tight";
                    wide: "wide";
                }>, z.ZodString, z.ZodNumber]>>>;
                hover: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        full: "full";
                    }>, z.ZodString, z.ZodNumber]>>;
                    border: z.ZodOptional<z.ZodString>;
                    opacity: z.ZodOptional<z.ZodNumber>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
                focus: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                    outline: z.ZodOptional<z.ZodString>;
                }, z.core.$strict>>>;
                active: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
            }, z.core.$strict>>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
} & { -readonly [P in keyof T]: T[P]; } : ({
    padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        "2xs": "2xs";
        "2xl": "2xl";
        "3xl": "3xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            "2xs": "2xs";
            "2xl": "2xl";
            "3xl": "3xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>]>>;
    color: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
        full: "full";
    }>, z.ZodString, z.ZodNumber]>>;
    border: z.ZodOptional<z.ZodString>;
    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        xs: "xs";
        sm: "sm";
        md: "md";
        lg: "lg";
        xl: "xl";
    }>, z.ZodString]>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    overflow: z.ZodOptional<z.ZodEnum<{
        auto: "auto";
        hidden: "hidden";
        scroll: "scroll";
        visible: "visible";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        fixed: "fixed";
        sticky: "sticky";
        relative: "relative";
        absolute: "absolute";
    }>>;
    inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        block: "block";
        grid: "grid";
        flex: "flex";
        inline: "inline";
        "inline-flex": "inline-flex";
        "inline-grid": "inline-grid";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            none: "none";
            block: "block";
            grid: "grid";
            flex: "flex";
            inline: "inline";
            "inline-flex": "inline-flex";
            "inline-grid": "inline-grid";
        }>>;
    }, z.core.$strict>]>>;
    flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        row: "row";
        column: "column";
        "row-reverse": "row-reverse";
        "column-reverse": "column-reverse";
    }>, z.ZodObject<{
        default: z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>;
        sm: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        md: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        lg: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        xl: z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
        "2xl": z.ZodOptional<z.ZodEnum<{
            row: "row";
            column: "column";
            "row-reverse": "row-reverse";
            "column-reverse": "column-reverse";
        }>>;
    }, z.core.$strict>]>>;
    alignItems: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        stretch: "stretch";
        baseline: "baseline";
    }>>;
    justifyContent: z.ZodOptional<z.ZodEnum<{
        start: "start";
        center: "center";
        end: "end";
        between: "between";
        around: "around";
        evenly: "evenly";
    }>>;
    flexWrap: z.ZodOptional<z.ZodEnum<{
        wrap: "wrap";
        nowrap: "nowrap";
        "wrap-reverse": "wrap-reverse";
    }>>;
    flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    textAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        left: "left";
        right: "right";
        justify: "justify";
    }>>;
    fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
        xs: "xs";
        sm: "sm";
        lg: "lg";
        xl: "xl";
        base: "base";
        "2xl": "2xl";
        "3xl": "3xl";
        "4xl": "4xl";
    }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
        default: z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>;
        sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
        "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            xs: "xs";
            sm: "sm";
            lg: "lg";
            xl: "xl";
            base: "base";
            "2xl": "2xl";
            "3xl": "3xl";
            "4xl": "4xl";
        }>, z.ZodString, z.ZodNumber]>>;
    }, z.core.$strict>]>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        bold: "bold";
        light: "light";
        medium: "medium";
        normal: "normal";
        semibold: "semibold";
    }>, z.ZodNumber, z.ZodString]>>;
    lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        none: "none";
        normal: "normal";
        tight: "tight";
        relaxed: "relaxed";
        loose: "loose";
        snug: "snug";
    }>, z.ZodString, z.ZodNumber]>>;
    letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        normal: "normal";
        tight: "tight";
        wide: "wide";
    }>, z.ZodString, z.ZodNumber]>>;
    hover: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
            full: "full";
        }>, z.ZodString, z.ZodNumber]>>;
        border: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    focus: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            none: "none";
            xs: "xs";
            sm: "sm";
            md: "md";
            lg: "lg";
            xl: "xl";
        }>, z.ZodString]>>;
        ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        outline: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    active: z.ZodOptional<z.ZodObject<{
        bg: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        transform: z.ZodOptional<z.ZodString>;
        scale: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    id: z.ZodOptional<z.ZodString>;
    tokens: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    visibleWhen: z.ZodOptional<z.ZodString>;
    visible: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodObject<{
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
        expr: z.ZodString;
    }, z.core.$strict>]>>;
    zIndex: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        toast: "toast";
        modal: "modal";
        popover: "popover";
        overlay: "overlay";
        base: "base";
        dropdown: "dropdown";
        sticky: "sticky";
    }>, z.ZodNumber]>>;
    animation: z.ZodOptional<z.ZodObject<{
        enter: z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
            bounce: "bounce";
        }>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        delay: z.ZodOptional<z.ZodNumber>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
        stagger: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    glass: z.ZodOptional<z.ZodBoolean>;
    background: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        image: z.ZodOptional<z.ZodString>;
        overlay: z.ZodOptional<z.ZodString>;
        gradient: z.ZodOptional<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<{
                linear: "linear";
                radial: "radial";
                conic: "conic";
            }>>;
            direction: z.ZodOptional<z.ZodString>;
            stops: z.ZodArray<z.ZodObject<{
                color: z.ZodString;
                position: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        position: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodEnum<{
            auto: "auto";
            cover: "cover";
            contain: "contain";
        }>>;
        fixed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>]>>;
    transition: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        transform: "transform";
        all: "all";
        shadow: "shadow";
        opacity: "opacity";
        colors: "colors";
    }>, z.ZodObject<{
        property: z.ZodDefault<z.ZodString>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>, z.ZodNumber]>>;
        easing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            default: "default";
            in: "in";
            out: "out";
            spring: "spring";
            "in-out": "in-out";
        }>, z.ZodString]>>;
    }, z.core.$strict>]>>;
    exitAnimation: z.ZodOptional<z.ZodObject<{
        preset: z.ZodOptional<z.ZodEnum<{
            scale: "scale";
            fade: "fade";
            "fade-up": "fade-up";
            "fade-down": "fade-down";
            "slide-left": "slide-left";
            "slide-right": "slide-right";
        }>>;
        duration: z.ZodOptional<z.ZodEnum<{
            instant: "instant";
            fast: "fast";
            normal: "normal";
            slow: "slow";
        }>>;
    }, z.core.$strict>>;
    span: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        default: z.ZodNumber;
        sm: z.ZodOptional<z.ZodNumber>;
        md: z.ZodOptional<z.ZodNumber>;
        lg: z.ZodOptional<z.ZodNumber>;
        xl: z.ZodOptional<z.ZodNumber>;
        "2xl": z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    slots: z.ZodOptional<z.ZodObject<{
        root: z.ZodOptional<z.ZodObject<{
            padding: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            paddingY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            margin: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginX: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            marginY: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            gap: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                "2xs": "2xs";
                "2xl": "2xl";
                "3xl": "3xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            width: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxWidth: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            height: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            minHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            maxHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            bg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                image: z.ZodOptional<z.ZodString>;
                overlay: z.ZodOptional<z.ZodString>;
                gradient: z.ZodOptional<z.ZodObject<{
                    type: z.ZodDefault<z.ZodEnum<{
                        linear: "linear";
                        radial: "radial";
                        conic: "conic";
                    }>>;
                    direction: z.ZodOptional<z.ZodString>;
                    stops: z.ZodArray<z.ZodObject<{
                        color: z.ZodString;
                        position: z.ZodOptional<z.ZodString>;
                    }, z.core.$strict>>;
                }, z.core.$strict>>;
                position: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    cover: "cover";
                    contain: "contain";
                }>>;
                fixed: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strict>]>]>>;
            color: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
                full: "full";
            }>, z.ZodString, z.ZodNumber]>>;
            border: z.ZodOptional<z.ZodString>;
            shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                xs: "xs";
                sm: "sm";
                md: "md";
                lg: "lg";
                xl: "xl";
            }>, z.ZodString]>>;
            opacity: z.ZodOptional<z.ZodNumber>;
            overflow: z.ZodOptional<z.ZodEnum<{
                auto: "auto";
                hidden: "hidden";
                scroll: "scroll";
                visible: "visible";
            }>>;
            position: z.ZodOptional<z.ZodEnum<{
                fixed: "fixed";
                sticky: "sticky";
                relative: "relative";
                absolute: "absolute";
            }>>;
            inset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            display: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                block: "block";
                grid: "grid";
                flex: "flex";
                inline: "inline";
                "inline-flex": "inline-flex";
                "inline-grid": "inline-grid";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>>;
            }, z.core.$strict>]>>;
            flexDirection: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                row: "row";
                column: "column";
                "row-reverse": "row-reverse";
                "column-reverse": "column-reverse";
            }>, z.ZodObject<{
                default: z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>;
                sm: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                md: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                lg: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                xl: z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
                "2xl": z.ZodOptional<z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>>;
            }, z.core.$strict>]>>;
            alignItems: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                stretch: "stretch";
                baseline: "baseline";
            }>>;
            justifyContent: z.ZodOptional<z.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                between: "between";
                around: "around";
                evenly: "evenly";
            }>>;
            flexWrap: z.ZodOptional<z.ZodEnum<{
                wrap: "wrap";
                nowrap: "nowrap";
                "wrap-reverse": "wrap-reverse";
            }>>;
            flex: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
            textAlign: z.ZodOptional<z.ZodEnum<{
                center: "center";
                left: "left";
                right: "right";
                justify: "justify";
            }>>;
            fontSize: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                xs: "xs";
                sm: "sm";
                lg: "lg";
                xl: "xl";
                base: "base";
                "2xl": "2xl";
                "3xl": "3xl";
                "4xl": "4xl";
            }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                default: z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>;
                sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
                "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>>;
            }, z.core.$strict>]>>;
            fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                bold: "bold";
                light: "light";
                medium: "medium";
                normal: "normal";
                semibold: "semibold";
            }>, z.ZodNumber, z.ZodString]>>;
            lineHeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                none: "none";
                normal: "normal";
                tight: "tight";
                relaxed: "relaxed";
                loose: "loose";
                snug: "snug";
            }>, z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                normal: "normal";
                tight: "tight";
                wide: "wide";
            }>, z.ZodString, z.ZodNumber]>>;
            hover: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>;
                border: z.ZodOptional<z.ZodString>;
                opacity: z.ZodOptional<z.ZodNumber>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            focus: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>;
                ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                outline: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            active: z.ZodOptional<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                transform: z.ZodOptional<z.ZodString>;
                scale: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            states: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                disabled: "disabled";
                hover: "hover";
                focus: "focus";
                open: "open";
                selected: "selected";
                current: "current";
                active: "active";
                completed: "completed";
                invalid: "invalid";
            }> & z.core.$partial, z.ZodObject<{
                padding: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                paddingY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                margin: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginX: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                marginY: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                gap: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    "2xs": "2xs";
                    "2xl": "2xl";
                    "3xl": "3xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        "2xs": "2xs";
                        "2xl": "2xl";
                        "3xl": "3xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                width: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxWidth: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                height: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                minHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                maxHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                bg: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                    image: z.ZodOptional<z.ZodString>;
                    overlay: z.ZodOptional<z.ZodString>;
                    gradient: z.ZodOptional<z.ZodObject<{
                        type: z.ZodDefault<z.ZodEnum<{
                            linear: "linear";
                            radial: "radial";
                            conic: "conic";
                        }>>;
                        direction: z.ZodOptional<z.ZodString>;
                        stops: z.ZodArray<z.ZodObject<{
                            color: z.ZodString;
                            position: z.ZodOptional<z.ZodString>;
                        }, z.core.$strict>>;
                    }, z.core.$strict>>;
                    position: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodEnum<{
                        auto: "auto";
                        cover: "cover";
                        contain: "contain";
                    }>>;
                    fixed: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strict>]>]>>>;
                color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                borderRadius: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                    full: "full";
                }>, z.ZodString, z.ZodNumber]>>>;
                border: z.ZodOptional<z.ZodOptional<z.ZodString>>;
                shadow: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    xs: "xs";
                    sm: "sm";
                    md: "md";
                    lg: "lg";
                    xl: "xl";
                }>, z.ZodString]>>>;
                opacity: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
                overflow: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    auto: "auto";
                    hidden: "hidden";
                    scroll: "scroll";
                    visible: "visible";
                }>>>;
                position: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    fixed: "fixed";
                    sticky: "sticky";
                    relative: "relative";
                    absolute: "absolute";
                }>>>;
                inset: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                display: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    block: "block";
                    grid: "grid";
                    flex: "flex";
                    inline: "inline";
                    "inline-flex": "inline-flex";
                    "inline-grid": "inline-grid";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        block: "block";
                        grid: "grid";
                        flex: "flex";
                        inline: "inline";
                        "inline-flex": "inline-flex";
                        "inline-grid": "inline-grid";
                    }>>;
                }, z.core.$strict>]>>>;
                flexDirection: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    row: "row";
                    column: "column";
                    "row-reverse": "row-reverse";
                    "column-reverse": "column-reverse";
                }>, z.ZodObject<{
                    default: z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>;
                    sm: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    md: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    lg: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    xl: z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                    "2xl": z.ZodOptional<z.ZodEnum<{
                        row: "row";
                        column: "column";
                        "row-reverse": "row-reverse";
                        "column-reverse": "column-reverse";
                    }>>;
                }, z.core.$strict>]>>>;
                alignItems: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    stretch: "stretch";
                    baseline: "baseline";
                }>>>;
                justifyContent: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    start: "start";
                    center: "center";
                    end: "end";
                    between: "between";
                    around: "around";
                    evenly: "evenly";
                }>>>;
                flexWrap: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    wrap: "wrap";
                    nowrap: "nowrap";
                    "wrap-reverse": "wrap-reverse";
                }>>>;
                flex: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                textAlign: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                    center: "center";
                    left: "left";
                    right: "right";
                    justify: "justify";
                }>>>;
                fontSize: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodEnum<{
                    xs: "xs";
                    sm: "sm";
                    lg: "lg";
                    xl: "xl";
                    base: "base";
                    "2xl": "2xl";
                    "3xl": "3xl";
                    "4xl": "4xl";
                }>, z.ZodString, z.ZodNumber]>, z.ZodObject<{
                    default: z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>;
                    sm: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    md: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    lg: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    xl: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                    "2xl": z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        xs: "xs";
                        sm: "sm";
                        lg: "lg";
                        xl: "xl";
                        base: "base";
                        "2xl": "2xl";
                        "3xl": "3xl";
                        "4xl": "4xl";
                    }>, z.ZodString, z.ZodNumber]>>;
                }, z.core.$strict>]>>>;
                fontWeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    bold: "bold";
                    light: "light";
                    medium: "medium";
                    normal: "normal";
                    semibold: "semibold";
                }>, z.ZodNumber, z.ZodString]>>>;
                lineHeight: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    none: "none";
                    normal: "normal";
                    tight: "tight";
                    relaxed: "relaxed";
                    loose: "loose";
                    snug: "snug";
                }>, z.ZodString, z.ZodNumber]>>>;
                letterSpacing: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    normal: "normal";
                    tight: "tight";
                    wide: "wide";
                }>, z.ZodString, z.ZodNumber]>>>;
                hover: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    borderRadius: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                        full: "full";
                    }>, z.ZodString, z.ZodNumber]>>;
                    border: z.ZodOptional<z.ZodString>;
                    opacity: z.ZodOptional<z.ZodNumber>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
                focus: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    shadow: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        none: "none";
                        xs: "xs";
                        sm: "sm";
                        md: "md";
                        lg: "lg";
                        xl: "xl";
                    }>, z.ZodString]>>;
                    ring: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                    outline: z.ZodOptional<z.ZodString>;
                }, z.core.$strict>>>;
                active: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    color: z.ZodOptional<z.ZodString>;
                    transform: z.ZodOptional<z.ZodString>;
                    scale: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strict>>>;
            }, z.core.$strict>>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
} extends infer T_2 extends z.core.util.SomeObject ? { [K in keyof T_2 as K extends keyof T ? never : K]: T_2[K]; } : never) & { [K_1 in keyof { -readonly [P in keyof T]: T[P]; }]: { -readonly [P in keyof T]: T[P]; }[K_1]; }) extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never, z.core.$strip>;
type StyleableElementConfig = z.infer<typeof styleableElementSchema>;
type StatefulElementConfig = z.infer<typeof statefulElementSchema>;
type SharedBaseComponentConfig = z.infer<typeof sharedBaseComponentSchema>;
type SurfaceStateName = z.infer<typeof surfaceStateNameSchema>;

export { SURFACE_STATE_NAMES, type SharedBaseComponentConfig, type StatefulElementConfig, type StyleableElementConfig, type SurfaceStateName, activeConfigSchema, componentAlignItemsSchema, componentAnimationSchema, componentBackgroundSchema, componentDisplaySchema, componentFlexDirectionSchema, componentFlexWrapSchema, componentGradientSchema, componentGradientStopSchema, componentJustifyContentSchema, componentPositionSchema, componentTextAlignSchema, componentTokenOverridesSchema, componentTransitionSchema, componentZIndexSchema, dimensionValueSchema, exitAnimationSchema, extendSharedComponentSchema, focusConfigSchema, fontSizeEnum, fontSizeValueSchema, fontWeightEnum, fontWeightValueSchema, hoverConfigSchema, letterSpacingEnum, letterSpacingValueSchema, lineHeightEnum, lineHeightValueSchema, radiusEnum, radiusValueSchema, responsiveValue, shadowEnum, shadowValueSchema, sharedBaseComponentSchema, slotStateNameSchema, slotsSchema, spacingEnum, spacingValueSchema, statefulElementSchema, styleableElementFields, styleableElementSchema, surfaceStateNameSchema };
