import {
  exprRefSchema,
  fromRefSchema
} from "./chunk-TQB3JHYG.js";

// src/components/schema.ts
import { z } from "zod";
var componentTokenOverridesSchema = z.record(z.string(), z.string());
var componentZIndexSchema = z.union([
  z.enum([
    "base",
    "dropdown",
    "sticky",
    "overlay",
    "modal",
    "popover",
    "toast"
  ]),
  z.number()
]);
var componentAnimationSchema = z.object({
  enter: z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale",
    "bounce"
  ]),
  duration: z.union([z.enum(["instant", "fast", "normal", "slow"]), z.number()]).optional(),
  delay: z.number().optional(),
  easing: z.union([z.enum(["default", "in", "out", "in-out", "spring"]), z.string()]).optional(),
  stagger: z.number().optional()
}).strict();
var componentGradientStopSchema = z.object({
  color: z.string(),
  position: z.string().optional()
}).strict();
var componentGradientSchema = z.object({
  type: z.enum(["linear", "radial", "conic"]).default("linear"),
  direction: z.string().optional(),
  stops: z.array(componentGradientStopSchema).min(2)
}).strict();
var componentBackgroundSchema = z.union([
  z.string(),
  z.object({
    image: z.string().optional(),
    overlay: z.string().optional(),
    gradient: componentGradientSchema.optional(),
    position: z.string().optional(),
    size: z.enum(["cover", "contain", "auto"]).optional(),
    fixed: z.boolean().optional()
  }).strict()
]);
var componentTransitionSchema = z.union([
  z.enum(["all", "colors", "opacity", "shadow", "transform"]),
  z.object({
    property: z.string().default("all"),
    duration: z.union([z.enum(["instant", "fast", "normal", "slow"]), z.number()]).optional(),
    easing: z.union([
      z.enum(["default", "in", "out", "in-out", "spring"]),
      z.string()
    ]).optional()
  }).strict()
]);
var spacingEnum = z.enum([
  "none",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl"
]);
var radiusEnum = z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full"
]);
var shadowEnum = z.enum(["none", "xs", "sm", "md", "lg", "xl"]);
var fontSizeEnum = z.enum([
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl"
]);
var fontWeightEnum = z.enum([
  "light",
  "normal",
  "medium",
  "semibold",
  "bold"
]);
var lineHeightEnum = z.enum([
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose"
]);
var letterSpacingEnum = z.enum(["tight", "normal", "wide"]);
var componentDisplaySchema = z.enum([
  "flex",
  "grid",
  "block",
  "inline",
  "inline-flex",
  "inline-grid",
  "none"
]);
var componentFlexDirectionSchema = z.enum([
  "row",
  "column",
  "row-reverse",
  "column-reverse"
]);
var componentAlignItemsSchema = z.enum([
  "start",
  "center",
  "end",
  "stretch",
  "baseline"
]);
var componentJustifyContentSchema = z.enum([
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly"
]);
var componentTextAlignSchema = z.enum([
  "left",
  "center",
  "right",
  "justify"
]);
var componentPositionSchema = z.enum([
  "relative",
  "absolute",
  "fixed",
  "sticky"
]);
var componentFlexWrapSchema = z.enum([
  "wrap",
  "nowrap",
  "wrap-reverse"
]);
var spacingValueSchema = z.union([
  spacingEnum,
  z.string(),
  z.number()
]);
var radiusValueSchema = z.union([radiusEnum, z.string(), z.number()]);
var shadowValueSchema = z.union([shadowEnum, z.string()]);
var fontSizeValueSchema = z.union([
  fontSizeEnum,
  z.string(),
  z.number()
]);
var fontWeightValueSchema = z.union([
  fontWeightEnum,
  z.number(),
  z.string()
]);
var lineHeightValueSchema = z.union([
  lineHeightEnum,
  z.string(),
  z.number()
]);
var letterSpacingValueSchema = z.union([
  letterSpacingEnum,
  z.string(),
  z.number()
]);
var dimensionValueSchema = z.union([z.string(), z.number()]);
function responsiveValue(valueSchema) {
  return z.union([
    valueSchema,
    z.object({
      default: valueSchema,
      sm: valueSchema.optional(),
      md: valueSchema.optional(),
      lg: valueSchema.optional(),
      xl: valueSchema.optional(),
      "2xl": valueSchema.optional()
    }).strict()
  ]);
}
var responsiveSpacing = responsiveValue(spacingValueSchema);
var responsiveDimension = responsiveValue(dimensionValueSchema);
var responsiveFontSize = responsiveValue(fontSizeValueSchema);
var responsiveDisplay = responsiveValue(componentDisplaySchema);
var responsiveFlexDirection = responsiveValue(componentFlexDirectionSchema);
var hoverConfigSchema = z.object({
  bg: z.string().optional(),
  color: z.string().optional(),
  shadow: shadowValueSchema.optional(),
  borderRadius: radiusValueSchema.optional(),
  border: z.string().optional(),
  opacity: z.number().min(0).max(1).optional(),
  transform: z.string().optional(),
  scale: z.number().optional()
}).strict();
var focusConfigSchema = z.object({
  bg: z.string().optional(),
  color: z.string().optional(),
  shadow: shadowValueSchema.optional(),
  ring: z.union([z.boolean(), z.string()]).optional(),
  outline: z.string().optional()
}).strict();
var activeConfigSchema = z.object({
  bg: z.string().optional(),
  color: z.string().optional(),
  transform: z.string().optional(),
  scale: z.number().optional()
}).strict();
var styleableElementFields = {
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
  active: activeConfigSchema.optional()
};
var styleableElementSchema = z.object(styleableElementFields).strict();
var SURFACE_STATE_NAMES = [
  "hover",
  "focus",
  "open",
  "selected",
  "current",
  "active",
  "completed",
  "invalid",
  "disabled"
];
var surfaceStateNameSchema = z.enum(SURFACE_STATE_NAMES);
var slotStateNameSchema = surfaceStateNameSchema;
var statefulElementSchema = styleableElementSchema.extend({
  states: z.partialRecord(surfaceStateNameSchema, styleableElementSchema.partial()).optional()
});
function slotsSchema(slotNames) {
  return z.object(
    Object.fromEntries(
      slotNames.map((slot) => [slot, statefulElementSchema.optional()])
    )
  ).strict();
}
var exitAnimationSchema = z.object({
  preset: z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale"
  ]).optional(),
  duration: z.enum(["instant", "fast", "normal", "slow"]).optional()
}).strict();
var sharedBaseComponentSchema = z.object({
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
  ...styleableElementFields
});
function extendSharedComponentSchema(shape) {
  return sharedBaseComponentSchema.extend(shape);
}

export {
  componentTokenOverridesSchema,
  componentZIndexSchema,
  componentAnimationSchema,
  componentGradientStopSchema,
  componentGradientSchema,
  componentBackgroundSchema,
  componentTransitionSchema,
  spacingEnum,
  radiusEnum,
  shadowEnum,
  fontSizeEnum,
  fontWeightEnum,
  lineHeightEnum,
  letterSpacingEnum,
  componentDisplaySchema,
  componentFlexDirectionSchema,
  componentAlignItemsSchema,
  componentJustifyContentSchema,
  componentTextAlignSchema,
  componentPositionSchema,
  componentFlexWrapSchema,
  spacingValueSchema,
  radiusValueSchema,
  shadowValueSchema,
  fontSizeValueSchema,
  fontWeightValueSchema,
  lineHeightValueSchema,
  letterSpacingValueSchema,
  dimensionValueSchema,
  responsiveValue,
  hoverConfigSchema,
  focusConfigSchema,
  activeConfigSchema,
  styleableElementFields,
  styleableElementSchema,
  SURFACE_STATE_NAMES,
  surfaceStateNameSchema,
  slotStateNameSchema,
  statefulElementSchema,
  slotsSchema,
  exitAnimationSchema,
  sharedBaseComponentSchema,
  extendSharedComponentSchema
};
//# sourceMappingURL=chunk-5M4JEJIN.js.map