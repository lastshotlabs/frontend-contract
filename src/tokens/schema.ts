import { z } from "zod";

export const themeColorsSchema = z
  .object({
    primary: z.string().optional(),
    secondary: z.string().optional(),
    muted: z.string().optional(),
    accent: z.string().optional(),
    destructive: z.string().optional(),
    success: z.string().optional(),
    warning: z.string().optional(),
    info: z.string().optional(),
    background: z.string().optional(),
    card: z.string().optional(),
    popover: z.string().optional(),
    sidebar: z.string().optional(),
    border: z.string().optional(),
    input: z.string().optional(),
    ring: z.string().optional(),
    chart: z
      .tuple([z.string(), z.string(), z.string(), z.string(), z.string()])
      .optional(),
  })
  .strict();

export const radiusSchema = z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
]);

export const spacingSchema = z.enum([
  "compact",
  "default",
  "comfortable",
  "spacious",
]);

const fontSourceSchema = z
  .object({
    family: z.string().min(1),
    source: z.enum(["google", "url"]),
    url: z.string().min(1).optional(),
    weights: z.array(z.number().int().positive()).min(1).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.source === "url" && !value.url) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "url is required when source is \"url\"",
        path: ["url"],
      });
    }
  });

const fontRoleSchema = z.union([z.string(), fontSourceSchema]);

export const fontSchema = z
  .object({
    sans: fontRoleSchema.optional(),
    mono: fontRoleSchema.optional(),
    display: fontRoleSchema.optional(),
    baseSize: z.number().min(10).max(24).optional(),
    scale: z.number().min(1.1).max(1.5).optional(),
  })
  .strict();

export const componentTokensSchema = z
  .object({
    card: z
      .object({
        shadow: z.enum(["none", "sm", "md", "lg", "xl"]).optional(),
        padding: spacingSchema.optional(),
        border: z.boolean().optional(),
      })
      .strict()
      .optional(),
    table: z
      .object({
        striped: z.boolean().optional(),
        density: z.enum(["compact", "default", "comfortable"]).optional(),
        headerBackground: z.boolean().optional(),
        hoverRow: z.boolean().optional(),
        borderStyle: z.enum(["none", "horizontal", "grid"]).optional(),
      })
      .strict()
      .optional(),
    button: z
      .object({
        weight: z.enum(["light", "medium", "bold"]).optional(),
        uppercase: z.boolean().optional(),
        iconSize: z.enum(["sm", "md", "lg"]).optional(),
      })
      .strict()
      .optional(),
    input: z
      .object({
        size: z.enum(["sm", "md", "lg"]).optional(),
        variant: z.enum(["outline", "filled", "underline"]).optional(),
      })
      .strict()
      .optional(),
    modal: z
      .object({
        overlay: z.enum(["light", "dark", "blur"]).optional(),
        animation: z.enum(["fade", "scale", "slide-up", "none"]).optional(),
      })
      .strict()
      .optional(),
    badge: z
      .object({
        variant: z.enum(["solid", "outline", "soft"]).optional(),
        rounded: z.boolean().optional(),
      })
      .strict()
      .optional(),
    toast: z
      .object({
        position: z
          .enum(["top-right", "top-center", "bottom-right", "bottom-center"])
          .optional(),
        animation: z.enum(["slide", "fade", "pop"]).optional(),
      })
      .strict()
      .optional(),
    scrollbar: z
      .object({
        width: z.string().optional(),
        track: z.string().optional(),
        thumb: z.string().optional(),
        thumbHover: z.string().optional(),
        radius: z.enum(["none", "sm", "md", "lg", "full"]).optional(),
      })
      .strict()
      .optional(),
  })
  .strict();

export const shadowSchema = z.enum(["none", "xs", "sm", "md", "lg", "xl"]);

export const globalTokensSchema = z
  .object({
    shadow: shadowSchema.optional(),
    durations: z
      .object({
        instant: z.number().min(0).max(200).optional(),
        fast: z.number().min(50).max(500).optional(),
        normal: z.number().min(100).max(1000).optional(),
        slow: z.number().min(200).max(2000).optional(),
      })
      .strict()
      .optional(),
    easings: z
      .object({
        default: z.string().optional(),
        in: z.string().optional(),
        out: z.string().optional(),
        inOut: z.string().optional(),
        spring: z.string().optional(),
      })
      .strict()
      .optional(),
    opacity: z
      .object({
        disabled: z.number().min(0).max(1).optional(),
        hover: z.number().min(0).max(1).optional(),
        muted: z.number().min(0).max(1).optional(),
      })
      .strict()
      .optional(),
    lineHeight: z
      .object({
        none: z.number().optional(),
        tight: z.number().optional(),
        normal: z.number().optional(),
        relaxed: z.number().optional(),
        loose: z.number().optional(),
      })
      .strict()
      .optional(),
    tracking: z
      .object({
        tight: z.string().optional(),
        normal: z.string().optional(),
        wide: z.string().optional(),
      })
      .strict()
      .optional(),
    borderWidth: z
      .object({
        none: z.string().optional(),
        thin: z.string().optional(),
        default: z.string().optional(),
        thick: z.string().optional(),
      })
      .strict()
      .optional(),
  })
  .strict();

export const flavorOverrideSchema = z
  .object({
    extends: z.string().min(1),
    displayName: z.string().optional(),
    colors: themeColorsSchema.optional(),
    darkColors: themeColorsSchema.optional(),
    radius: radiusSchema.optional(),
    spacing: spacingSchema.optional(),
    font: fontSchema.optional(),
    components: componentTokensSchema.optional(),
  })
  .strict();

export const themeConfigSchema = z
  .object({
    flavor: z.string().optional(),
    flavors: z.record(z.string(), flavorOverrideSchema).optional(),
    overrides: z
      .object({
        colors: themeColorsSchema.optional(),
        darkColors: themeColorsSchema.optional(),
        radius: radiusSchema.optional(),
        spacing: spacingSchema.optional(),
        font: fontSchema.optional(),
        components: componentTokensSchema.optional(),
        tokens: globalTokensSchema.optional(),
      })
      .strict()
      .optional(),
    mode: z.enum(["light", "dark", "system"]).optional(),
    editor: z
      .object({
        persist: z
          .union([
            z.literal("none"),
            z.literal("localStorage"),
            z.literal("sessionStorage"),
            z.object({ resource: z.string() }).strict(),
          ])
          .default("localStorage"),
      })
      .strict()
      .optional(),
  })
  .strict();
