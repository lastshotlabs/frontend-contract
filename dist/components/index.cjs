"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  SURFACE_STATE_NAMES: () => SURFACE_STATE_NAMES,
  activeConfigSchema: () => activeConfigSchema,
  componentAlignItemsSchema: () => componentAlignItemsSchema,
  componentAnimationSchema: () => componentAnimationSchema,
  componentBackgroundSchema: () => componentBackgroundSchema,
  componentDisplaySchema: () => componentDisplaySchema,
  componentFlexDirectionSchema: () => componentFlexDirectionSchema,
  componentFlexWrapSchema: () => componentFlexWrapSchema,
  componentGradientSchema: () => componentGradientSchema,
  componentGradientStopSchema: () => componentGradientStopSchema,
  componentJustifyContentSchema: () => componentJustifyContentSchema,
  componentPositionSchema: () => componentPositionSchema,
  componentTextAlignSchema: () => componentTextAlignSchema,
  componentTokenOverridesSchema: () => componentTokenOverridesSchema,
  componentTransitionSchema: () => componentTransitionSchema,
  componentZIndexSchema: () => componentZIndexSchema,
  dimensionValueSchema: () => dimensionValueSchema,
  exitAnimationSchema: () => exitAnimationSchema,
  extendSharedComponentSchema: () => extendSharedComponentSchema,
  focusConfigSchema: () => focusConfigSchema,
  fontSizeEnum: () => fontSizeEnum,
  fontSizeValueSchema: () => fontSizeValueSchema,
  fontWeightEnum: () => fontWeightEnum,
  fontWeightValueSchema: () => fontWeightValueSchema,
  hoverConfigSchema: () => hoverConfigSchema,
  letterSpacingEnum: () => letterSpacingEnum,
  letterSpacingValueSchema: () => letterSpacingValueSchema,
  lineHeightEnum: () => lineHeightEnum,
  lineHeightValueSchema: () => lineHeightValueSchema,
  radiusEnum: () => radiusEnum,
  radiusValueSchema: () => radiusValueSchema,
  responsiveValue: () => responsiveValue,
  shadowEnum: () => shadowEnum,
  shadowValueSchema: () => shadowValueSchema,
  sharedBaseComponentSchema: () => sharedBaseComponentSchema,
  slotStateNameSchema: () => slotStateNameSchema,
  slotsSchema: () => slotsSchema,
  spacingEnum: () => spacingEnum,
  spacingValueSchema: () => spacingValueSchema,
  statefulElementSchema: () => statefulElementSchema,
  styleableElementFields: () => styleableElementFields,
  styleableElementSchema: () => styleableElementSchema,
  surfaceStateNameSchema: () => surfaceStateNameSchema
});
module.exports = __toCommonJS(components_exports);

// src/components/schema.ts
var import_zod2 = require("zod");

// src/refs/from.ts
var FROM_REF_TRANSFORMS = [
  "uppercase",
  "lowercase",
  "trim",
  "length",
  "number",
  "boolean",
  "string",
  "json",
  "keys",
  "values",
  "first",
  "last",
  "count",
  "sum",
  "join",
  "split",
  "default"
];

// src/refs/schema.ts
var import_zod = require("zod");
var fromRefSchema = import_zod.z.object({
  from: import_zod.z.string(),
  transform: import_zod.z.enum(FROM_REF_TRANSFORMS).optional(),
  transformArg: import_zod.z.union([import_zod.z.string(), import_zod.z.number()]).optional()
}).strict();
var exprRefSchema = import_zod.z.object({
  expr: import_zod.z.string()
}).strict();

// src/components/schema.ts
var componentTokenOverridesSchema = import_zod2.z.record(import_zod2.z.string(), import_zod2.z.string());
var componentZIndexSchema = import_zod2.z.union([
  import_zod2.z.enum([
    "base",
    "dropdown",
    "sticky",
    "overlay",
    "modal",
    "popover",
    "toast"
  ]),
  import_zod2.z.number()
]);
var componentAnimationSchema = import_zod2.z.object({
  enter: import_zod2.z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale",
    "bounce"
  ]),
  duration: import_zod2.z.union([import_zod2.z.enum(["instant", "fast", "normal", "slow"]), import_zod2.z.number()]).optional(),
  delay: import_zod2.z.number().optional(),
  easing: import_zod2.z.union([import_zod2.z.enum(["default", "in", "out", "in-out", "spring"]), import_zod2.z.string()]).optional(),
  stagger: import_zod2.z.number().optional()
}).strict();
var componentGradientStopSchema = import_zod2.z.object({
  color: import_zod2.z.string(),
  position: import_zod2.z.string().optional()
}).strict();
var componentGradientSchema = import_zod2.z.object({
  type: import_zod2.z.enum(["linear", "radial", "conic"]).default("linear"),
  direction: import_zod2.z.string().optional(),
  stops: import_zod2.z.array(componentGradientStopSchema).min(2)
}).strict();
var componentBackgroundSchema = import_zod2.z.union([
  import_zod2.z.string(),
  import_zod2.z.object({
    image: import_zod2.z.string().optional(),
    overlay: import_zod2.z.string().optional(),
    gradient: componentGradientSchema.optional(),
    position: import_zod2.z.string().optional(),
    size: import_zod2.z.enum(["cover", "contain", "auto"]).optional(),
    fixed: import_zod2.z.boolean().optional()
  }).strict()
]);
var componentTransitionSchema = import_zod2.z.union([
  import_zod2.z.enum(["all", "colors", "opacity", "shadow", "transform"]),
  import_zod2.z.object({
    property: import_zod2.z.string().default("all"),
    duration: import_zod2.z.union([import_zod2.z.enum(["instant", "fast", "normal", "slow"]), import_zod2.z.number()]).optional(),
    easing: import_zod2.z.union([
      import_zod2.z.enum(["default", "in", "out", "in-out", "spring"]),
      import_zod2.z.string()
    ]).optional()
  }).strict()
]);
var spacingEnum = import_zod2.z.enum([
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
var radiusEnum = import_zod2.z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full"
]);
var shadowEnum = import_zod2.z.enum(["none", "xs", "sm", "md", "lg", "xl"]);
var fontSizeEnum = import_zod2.z.enum([
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl"
]);
var fontWeightEnum = import_zod2.z.enum([
  "light",
  "normal",
  "medium",
  "semibold",
  "bold"
]);
var lineHeightEnum = import_zod2.z.enum([
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose"
]);
var letterSpacingEnum = import_zod2.z.enum(["tight", "normal", "wide"]);
var componentDisplaySchema = import_zod2.z.enum([
  "flex",
  "grid",
  "block",
  "inline",
  "inline-flex",
  "inline-grid",
  "none"
]);
var componentFlexDirectionSchema = import_zod2.z.enum([
  "row",
  "column",
  "row-reverse",
  "column-reverse"
]);
var componentAlignItemsSchema = import_zod2.z.enum([
  "start",
  "center",
  "end",
  "stretch",
  "baseline"
]);
var componentJustifyContentSchema = import_zod2.z.enum([
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly"
]);
var componentTextAlignSchema = import_zod2.z.enum([
  "left",
  "center",
  "right",
  "justify"
]);
var componentPositionSchema = import_zod2.z.enum([
  "relative",
  "absolute",
  "fixed",
  "sticky"
]);
var componentFlexWrapSchema = import_zod2.z.enum([
  "wrap",
  "nowrap",
  "wrap-reverse"
]);
var spacingValueSchema = import_zod2.z.union([
  spacingEnum,
  import_zod2.z.string(),
  import_zod2.z.number()
]);
var radiusValueSchema = import_zod2.z.union([radiusEnum, import_zod2.z.string(), import_zod2.z.number()]);
var shadowValueSchema = import_zod2.z.union([shadowEnum, import_zod2.z.string()]);
var fontSizeValueSchema = import_zod2.z.union([
  fontSizeEnum,
  import_zod2.z.string(),
  import_zod2.z.number()
]);
var fontWeightValueSchema = import_zod2.z.union([
  fontWeightEnum,
  import_zod2.z.number(),
  import_zod2.z.string()
]);
var lineHeightValueSchema = import_zod2.z.union([
  lineHeightEnum,
  import_zod2.z.string(),
  import_zod2.z.number()
]);
var letterSpacingValueSchema = import_zod2.z.union([
  letterSpacingEnum,
  import_zod2.z.string(),
  import_zod2.z.number()
]);
var dimensionValueSchema = import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]);
function responsiveValue(valueSchema) {
  return import_zod2.z.union([
    valueSchema,
    import_zod2.z.object({
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
var hoverConfigSchema = import_zod2.z.object({
  bg: import_zod2.z.string().optional(),
  color: import_zod2.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  borderRadius: radiusValueSchema.optional(),
  border: import_zod2.z.string().optional(),
  opacity: import_zod2.z.number().min(0).max(1).optional(),
  transform: import_zod2.z.string().optional(),
  scale: import_zod2.z.number().optional()
}).strict();
var focusConfigSchema = import_zod2.z.object({
  bg: import_zod2.z.string().optional(),
  color: import_zod2.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  ring: import_zod2.z.union([import_zod2.z.boolean(), import_zod2.z.string()]).optional(),
  outline: import_zod2.z.string().optional()
}).strict();
var activeConfigSchema = import_zod2.z.object({
  bg: import_zod2.z.string().optional(),
  color: import_zod2.z.string().optional(),
  transform: import_zod2.z.string().optional(),
  scale: import_zod2.z.number().optional()
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
  bg: import_zod2.z.union([import_zod2.z.string(), componentBackgroundSchema]).optional(),
  color: import_zod2.z.string().optional(),
  borderRadius: radiusValueSchema.optional(),
  border: import_zod2.z.string().optional(),
  shadow: shadowValueSchema.optional(),
  opacity: import_zod2.z.number().min(0).max(1).optional(),
  overflow: import_zod2.z.enum(["auto", "hidden", "scroll", "visible"]).optional(),
  position: componentPositionSchema.optional(),
  inset: import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]).optional(),
  display: responsiveDisplay.optional(),
  flexDirection: responsiveFlexDirection.optional(),
  alignItems: componentAlignItemsSchema.optional(),
  justifyContent: componentJustifyContentSchema.optional(),
  flexWrap: componentFlexWrapSchema.optional(),
  flex: import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]).optional(),
  textAlign: componentTextAlignSchema.optional(),
  fontSize: responsiveFontSize.optional(),
  fontWeight: fontWeightValueSchema.optional(),
  lineHeight: lineHeightValueSchema.optional(),
  letterSpacing: letterSpacingValueSchema.optional(),
  hover: hoverConfigSchema.optional(),
  focus: focusConfigSchema.optional(),
  active: activeConfigSchema.optional()
};
var styleableElementSchema = import_zod2.z.object(styleableElementFields).strict();
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
var surfaceStateNameSchema = import_zod2.z.enum(SURFACE_STATE_NAMES);
var slotStateNameSchema = surfaceStateNameSchema;
var statefulElementSchema = styleableElementSchema.extend({
  states: import_zod2.z.partialRecord(surfaceStateNameSchema, styleableElementSchema.partial()).optional()
});
function slotsSchema(slotNames) {
  return import_zod2.z.object(
    Object.fromEntries(
      slotNames.map((slot) => [slot, statefulElementSchema.optional()])
    )
  ).strict();
}
var exitAnimationSchema = import_zod2.z.object({
  preset: import_zod2.z.enum([
    "fade",
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale"
  ]).optional(),
  duration: import_zod2.z.enum(["instant", "fast", "normal", "slow"]).optional()
}).strict();
var sharedBaseComponentSchema = import_zod2.z.object({
  id: import_zod2.z.string().optional(),
  tokens: componentTokenOverridesSchema.optional(),
  visibleWhen: import_zod2.z.string().optional(),
  visible: import_zod2.z.union([import_zod2.z.boolean(), fromRefSchema, exprRefSchema]).optional(),
  zIndex: componentZIndexSchema.optional(),
  animation: componentAnimationSchema.optional(),
  glass: import_zod2.z.boolean().optional(),
  background: componentBackgroundSchema.optional(),
  transition: componentTransitionSchema.optional(),
  exitAnimation: exitAnimationSchema.optional(),
  span: responsiveValue(import_zod2.z.number().int().min(1).max(12)).optional(),
  slots: slotsSchema(["root"]).optional(),
  ...styleableElementFields
});
function extendSharedComponentSchema(shape) {
  return sharedBaseComponentSchema.extend(shape);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SURFACE_STATE_NAMES,
  activeConfigSchema,
  componentAlignItemsSchema,
  componentAnimationSchema,
  componentBackgroundSchema,
  componentDisplaySchema,
  componentFlexDirectionSchema,
  componentFlexWrapSchema,
  componentGradientSchema,
  componentGradientStopSchema,
  componentJustifyContentSchema,
  componentPositionSchema,
  componentTextAlignSchema,
  componentTokenOverridesSchema,
  componentTransitionSchema,
  componentZIndexSchema,
  dimensionValueSchema,
  exitAnimationSchema,
  extendSharedComponentSchema,
  focusConfigSchema,
  fontSizeEnum,
  fontSizeValueSchema,
  fontWeightEnum,
  fontWeightValueSchema,
  hoverConfigSchema,
  letterSpacingEnum,
  letterSpacingValueSchema,
  lineHeightEnum,
  lineHeightValueSchema,
  radiusEnum,
  radiusValueSchema,
  responsiveValue,
  shadowEnum,
  shadowValueSchema,
  sharedBaseComponentSchema,
  slotStateNameSchema,
  slotsSchema,
  spacingEnum,
  spacingValueSchema,
  statefulElementSchema,
  styleableElementFields,
  styleableElementSchema,
  surfaceStateNameSchema
});
//# sourceMappingURL=index.cjs.map