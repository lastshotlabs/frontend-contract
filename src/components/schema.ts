import { z } from "zod";
import { exprRefSchema, fromRefSchema } from "../refs";

export const componentTokenOverridesSchema = z.record(z.string(), z.string());

export const componentZIndexSchema = z.union([
  z.enum([
    "base",
    "dropdown",
    "sticky",
    "overlay",
    "modal",
    "popover",
    "toast",
  ]),
  z.number(),
]);

export const componentAnimationSchema = z
  .object({
    enter: z.enum([
      "fade",
      "fade-up",
      "fade-down",
      "slide-left",
      "slide-right",
      "scale",
      "bounce",
    ]),
    duration: z
      .union([z.enum(["instant", "fast", "normal", "slow"]), z.number()])
      .optional(),
    delay: z.number().optional(),
    easing: z
      .union([z.enum(["default", "in", "out", "in-out", "spring"]), z.string()])
      .optional(),
    stagger: z.number().optional(),
  })
  .strict();

export const componentGradientStopSchema = z
  .object({
    color: z.string(),
    position: z.string().optional(),
  })
  .strict();

export const componentGradientSchema = z
  .object({
    type: z.enum(["linear", "radial", "conic"]).default("linear"),
    direction: z.string().optional(),
    stops: z.array(componentGradientStopSchema).min(2),
  })
  .strict();

export const componentBackgroundSchema = z.union([
  z.string(),
  z
    .object({
      image: z.string().optional(),
      overlay: z.string().optional(),
      gradient: componentGradientSchema.optional(),
      position: z.string().optional(),
      size: z.enum(["cover", "contain", "auto"]).optional(),
      fixed: z.boolean().optional(),
    })
    .strict(),
]);

export const componentTransitionSchema = z.union([
  z.enum(["all", "colors", "opacity", "shadow", "transform"]),
  z
    .object({
      property: z.string().default("all"),
      duration: z
        .union([z.enum(["instant", "fast", "normal", "slow"]), z.number()])
        .optional(),
      easing: z
        .union([
          z.enum(["default", "in", "out", "in-out", "spring"]),
          z.string(),
        ])
        .optional(),
    })
    .strict(),
]);

export const spacingEnum = z.enum([
  "none",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
]);

export const radiusEnum = z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
]);

export const shadowEnum = z.enum(["none", "xs", "sm", "md", "lg", "xl"]);

export const fontSizeEnum = z.enum([
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
]);

export const fontWeightEnum = z.enum([
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
]);

export const lineHeightEnum = z.enum([
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose",
]);

export const letterSpacingEnum = z.enum(["tight", "normal", "wide"]);

export const componentDisplaySchema = z.enum([
  "flex",
  "grid",
  "block",
  "inline",
  "inline-flex",
  "inline-grid",
  "none",
]);

export const componentFlexDirectionSchema = z.enum([
  "row",
  "column",
  "row-reverse",
  "column-reverse",
]);

export const componentAlignItemsSchema = z.enum([
  "start",
  "center",
  "end",
  "stretch",
  "baseline",
]);

export const componentJustifyContentSchema = z.enum([
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
]);

export const componentTextAlignSchema = z.enum([
  "left",
  "center",
  "right",
  "justify",
]);

export const componentPositionSchema = z.enum([
  "relative",
  "absolute",
  "fixed",
  "sticky",
]);

export const componentFlexWrapSchema = z.enum([
  "wrap",
  "nowrap",
  "wrap-reverse",
]);

export const spacingValueSchema = z.union([
  spacingEnum,
  z.string(),
  z.number(),
]);
export const radiusValueSchema = z.union([radiusEnum, z.string(), z.number()]);
export const shadowValueSchema = z.union([shadowEnum, z.string()]);
export const fontSizeValueSchema = z.union([
  fontSizeEnum,
  z.string(),
  z.number(),
]);
export const fontWeightValueSchema = z.union([
  fontWeightEnum,
  z.number(),
  z.string(),
]);
export const lineHeightValueSchema = z.union([
  lineHeightEnum,
  z.string(),
  z.number(),
]);
export const letterSpacingValueSchema = z.union([
  letterSpacingEnum,
  z.string(),
  z.number(),
]);
export const dimensionValueSchema = z.union([z.string(), z.number()]);

export function responsiveValue<T extends z.ZodTypeAny>(valueSchema: T) {
  return z.union([
    valueSchema,
    z
      .object({
        default: valueSchema,
        sm: valueSchema.optional(),
        md: valueSchema.optional(),
        lg: valueSchema.optional(),
        xl: valueSchema.optional(),
        "2xl": valueSchema.optional(),
      })
      .strict(),
  ]);
}

const responsiveSpacing = responsiveValue(spacingValueSchema);
const responsiveDimension = responsiveValue(dimensionValueSchema);
const responsiveFontSize = responsiveValue(fontSizeValueSchema);
const responsiveDisplay = responsiveValue(componentDisplaySchema);
const responsiveFlexDirection = responsiveValue(componentFlexDirectionSchema);

export const hoverConfigSchema = z
  .object({
    bg: z.string().optional(),
    color: z.string().optional(),
    shadow: shadowValueSchema.optional(),
    borderRadius: radiusValueSchema.optional(),
    border: z.string().optional(),
    opacity: z.number().min(0).max(1).optional(),
    transform: z.string().optional(),
    scale: z.number().optional(),
  })
  .strict();

export const focusConfigSchema = z
  .object({
    bg: z.string().optional(),
    color: z.string().optional(),
    shadow: shadowValueSchema.optional(),
    ring: z.union([z.boolean(), z.string()]).optional(),
    outline: z.string().optional(),
  })
  .strict();

export const activeConfigSchema = z
  .object({
    bg: z.string().optional(),
    color: z.string().optional(),
    transform: z.string().optional(),
    scale: z.number().optional(),
  })
  .strict();

export const styleableElementFields = {
  padding: responsiveSpacing.optional(),
  paddingX: responsiveSpacing.optional(),
  paddingY: responsiveSpacing.optional(),
  margin: responsiveSpacing.optional(),
  marginX: responsiveSpacing.optional(),
  marginY: responsiveSpacing.optional(),
  gap: responsiveSpacing.optional(),
  width: responsiveDimension.optional(),
  minWidth: responsiveDimension.optional(),
  maxWidth: responsiveDimension.optional(),
  height: responsiveDimension.optional(),
  minHeight: responsiveDimension.optional(),
  maxHeight: responsiveDimension.optional(),
  bg: z.union([z.string(), componentBackgroundSchema]).optional(),
  color: z.string().optional(),
  borderRadius: radiusValueSchema.optional(),
  border: z.string().optional(),
  shadow: shadowValueSchema.optional(),
  opacity: z.number().min(0).max(1).optional(),
  overflow: z.enum(["auto", "hidden", "scroll", "visible"]).optional(),
  position: componentPositionSchema.optional(),
  inset: z.union([z.string(), z.number()]).optional(),
  display: responsiveDisplay.optional(),
  flexDirection: responsiveFlexDirection.optional(),
  alignItems: componentAlignItemsSchema.optional(),
  justifyContent: componentJustifyContentSchema.optional(),
  flexWrap: componentFlexWrapSchema.optional(),
  flex: z.union([z.string(), z.number()]).optional(),
  textAlign: componentTextAlignSchema.optional(),
  fontSize: responsiveFontSize.optional(),
  fontWeight: fontWeightValueSchema.optional(),
  lineHeight: lineHeightValueSchema.optional(),
  letterSpacing: letterSpacingValueSchema.optional(),
  hover: hoverConfigSchema.optional(),
  focus: focusConfigSchema.optional(),
  active: activeConfigSchema.optional(),
} as const;

export const styleableElementSchema = z.object(styleableElementFields).strict();

export const SURFACE_STATE_NAMES = [
  "hover",
  "focus",
  "open",
  "selected",
  "current",
  "active",
  "completed",
  "invalid",
  "disabled",
] as const;

export const surfaceStateNameSchema = z.enum(SURFACE_STATE_NAMES);
export const slotStateNameSchema = surfaceStateNameSchema;

export const statefulElementSchema = styleableElementSchema.extend({
  states: z
    .partialRecord(surfaceStateNameSchema, styleableElementSchema.partial())
    .optional(),
});

export function slotsSchema<const T extends readonly [string, ...string[]]>(
  slotNames: T,
) {
  return z
    .object(
      Object.fromEntries(
        slotNames.map((slot) => [slot, statefulElementSchema.optional()]),
      ) as Record<T[number], z.ZodOptional<typeof statefulElementSchema>>,
    )
    .strict();
}

export const exitAnimationSchema = z
  .object({
    preset: z
      .enum([
        "fade",
        "fade-up",
        "fade-down",
        "slide-left",
        "slide-right",
        "scale",
      ])
      .optional(),
    duration: z.enum(["instant", "fast", "normal", "slow"]).optional(),
  })
  .strict();

export const sharedBaseComponentSchema = z.object({
  id: z.string().optional(),
  tokens: componentTokenOverridesSchema.optional(),
  visibleWhen: z.string().optional(),
  visible: z.union([z.boolean(), fromRefSchema, exprRefSchema]).optional(),
  zIndex: componentZIndexSchema.optional(),
  animation: componentAnimationSchema.optional(),
  glass: z.boolean().optional(),
  background: componentBackgroundSchema.optional(),
  transition: componentTransitionSchema.optional(),
  exitAnimation: exitAnimationSchema.optional(),
  span: responsiveValue(z.number().int().min(1).max(12)).optional(),
  slots: slotsSchema(["root"]).optional(),
  ...styleableElementFields,
});

export function extendSharedComponentSchema<T extends z.ZodRawShape>(shape: T) {
  return sharedBaseComponentSchema.extend(shape);
}

export type StyleableElementConfig = z.infer<typeof styleableElementSchema>;
export type StatefulElementConfig = z.infer<typeof statefulElementSchema>;
export type SharedBaseComponentConfig = z.infer<
  typeof sharedBaseComponentSchema
>;
export type SurfaceStateName = z.infer<typeof surfaceStateNameSchema>;
