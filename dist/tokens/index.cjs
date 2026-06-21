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

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  componentTokensSchema: () => componentTokensSchema,
  flavorOverrideSchema: () => flavorOverrideSchema,
  fontSchema: () => fontSchema,
  globalTokensSchema: () => globalTokensSchema,
  radiusSchema: () => radiusSchema,
  shadowSchema: () => shadowSchema,
  spacingSchema: () => spacingSchema,
  themeColorsSchema: () => themeColorsSchema,
  themeConfigSchema: () => themeConfigSchema
});
module.exports = __toCommonJS(tokens_exports);

// src/tokens/schema.ts
var import_zod = require("zod");
var themeColorsSchema = import_zod.z.object({
  primary: import_zod.z.string().optional(),
  secondary: import_zod.z.string().optional(),
  muted: import_zod.z.string().optional(),
  accent: import_zod.z.string().optional(),
  destructive: import_zod.z.string().optional(),
  success: import_zod.z.string().optional(),
  warning: import_zod.z.string().optional(),
  info: import_zod.z.string().optional(),
  background: import_zod.z.string().optional(),
  card: import_zod.z.string().optional(),
  popover: import_zod.z.string().optional(),
  sidebar: import_zod.z.string().optional(),
  border: import_zod.z.string().optional(),
  input: import_zod.z.string().optional(),
  ring: import_zod.z.string().optional(),
  chart: import_zod.z.tuple([import_zod.z.string(), import_zod.z.string(), import_zod.z.string(), import_zod.z.string(), import_zod.z.string()]).optional()
}).strict();
var radiusSchema = import_zod.z.enum([
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full"
]);
var spacingSchema = import_zod.z.enum([
  "compact",
  "default",
  "comfortable",
  "spacious"
]);
var fontSourceSchema = import_zod.z.object({
  family: import_zod.z.string().min(1),
  source: import_zod.z.enum(["google", "url"]),
  url: import_zod.z.string().min(1).optional(),
  weights: import_zod.z.array(import_zod.z.number().int().positive()).min(1).optional()
}).strict().superRefine((value, ctx) => {
  if (value.source === "url" && !value.url) {
    ctx.addIssue({
      code: import_zod.z.ZodIssueCode.custom,
      message: 'url is required when source is "url"',
      path: ["url"]
    });
  }
});
var fontRoleSchema = import_zod.z.union([import_zod.z.string(), fontSourceSchema]);
var fontSchema = import_zod.z.object({
  sans: fontRoleSchema.optional(),
  mono: fontRoleSchema.optional(),
  display: fontRoleSchema.optional(),
  baseSize: import_zod.z.number().min(10).max(24).optional(),
  scale: import_zod.z.number().min(1.1).max(1.5).optional()
}).strict();
var componentTokensSchema = import_zod.z.object({
  card: import_zod.z.object({
    shadow: import_zod.z.enum(["none", "sm", "md", "lg", "xl"]).optional(),
    padding: spacingSchema.optional(),
    border: import_zod.z.boolean().optional()
  }).strict().optional(),
  table: import_zod.z.object({
    striped: import_zod.z.boolean().optional(),
    density: import_zod.z.enum(["compact", "default", "comfortable"]).optional(),
    headerBackground: import_zod.z.boolean().optional(),
    hoverRow: import_zod.z.boolean().optional(),
    borderStyle: import_zod.z.enum(["none", "horizontal", "grid"]).optional()
  }).strict().optional(),
  button: import_zod.z.object({
    weight: import_zod.z.enum(["light", "medium", "bold"]).optional(),
    uppercase: import_zod.z.boolean().optional(),
    iconSize: import_zod.z.enum(["sm", "md", "lg"]).optional()
  }).strict().optional(),
  input: import_zod.z.object({
    size: import_zod.z.enum(["sm", "md", "lg"]).optional(),
    variant: import_zod.z.enum(["outline", "filled", "underline"]).optional()
  }).strict().optional(),
  modal: import_zod.z.object({
    overlay: import_zod.z.enum(["light", "dark", "blur"]).optional(),
    animation: import_zod.z.enum(["fade", "scale", "slide-up", "none"]).optional()
  }).strict().optional(),
  badge: import_zod.z.object({
    variant: import_zod.z.enum(["solid", "outline", "soft"]).optional(),
    rounded: import_zod.z.boolean().optional()
  }).strict().optional(),
  toast: import_zod.z.object({
    position: import_zod.z.enum(["top-right", "top-center", "bottom-right", "bottom-center"]).optional(),
    animation: import_zod.z.enum(["slide", "fade", "pop"]).optional()
  }).strict().optional(),
  scrollbar: import_zod.z.object({
    width: import_zod.z.string().optional(),
    track: import_zod.z.string().optional(),
    thumb: import_zod.z.string().optional(),
    thumbHover: import_zod.z.string().optional(),
    radius: import_zod.z.enum(["none", "sm", "md", "lg", "full"]).optional()
  }).strict().optional()
}).strict();
var shadowSchema = import_zod.z.enum(["none", "xs", "sm", "md", "lg", "xl"]);
var globalTokensSchema = import_zod.z.object({
  shadow: shadowSchema.optional(),
  durations: import_zod.z.object({
    instant: import_zod.z.number().min(0).max(200).optional(),
    fast: import_zod.z.number().min(50).max(500).optional(),
    normal: import_zod.z.number().min(100).max(1e3).optional(),
    slow: import_zod.z.number().min(200).max(2e3).optional()
  }).strict().optional(),
  easings: import_zod.z.object({
    default: import_zod.z.string().optional(),
    in: import_zod.z.string().optional(),
    out: import_zod.z.string().optional(),
    inOut: import_zod.z.string().optional(),
    spring: import_zod.z.string().optional()
  }).strict().optional(),
  opacity: import_zod.z.object({
    disabled: import_zod.z.number().min(0).max(1).optional(),
    hover: import_zod.z.number().min(0).max(1).optional(),
    muted: import_zod.z.number().min(0).max(1).optional()
  }).strict().optional(),
  lineHeight: import_zod.z.object({
    none: import_zod.z.number().optional(),
    tight: import_zod.z.number().optional(),
    normal: import_zod.z.number().optional(),
    relaxed: import_zod.z.number().optional(),
    loose: import_zod.z.number().optional()
  }).strict().optional(),
  tracking: import_zod.z.object({
    tight: import_zod.z.string().optional(),
    normal: import_zod.z.string().optional(),
    wide: import_zod.z.string().optional()
  }).strict().optional(),
  borderWidth: import_zod.z.object({
    none: import_zod.z.string().optional(),
    thin: import_zod.z.string().optional(),
    default: import_zod.z.string().optional(),
    thick: import_zod.z.string().optional()
  }).strict().optional()
}).strict();
var flavorOverrideSchema = import_zod.z.object({
  extends: import_zod.z.string().min(1),
  displayName: import_zod.z.string().optional(),
  colors: themeColorsSchema.optional(),
  darkColors: themeColorsSchema.optional(),
  radius: radiusSchema.optional(),
  spacing: spacingSchema.optional(),
  font: fontSchema.optional(),
  components: componentTokensSchema.optional()
}).strict();
var themeConfigSchema = import_zod.z.object({
  flavor: import_zod.z.string().optional(),
  flavors: import_zod.z.record(flavorOverrideSchema).optional(),
  overrides: import_zod.z.object({
    colors: themeColorsSchema.optional(),
    darkColors: themeColorsSchema.optional(),
    radius: radiusSchema.optional(),
    spacing: spacingSchema.optional(),
    font: fontSchema.optional(),
    components: componentTokensSchema.optional(),
    tokens: globalTokensSchema.optional()
  }).strict().optional(),
  mode: import_zod.z.enum(["light", "dark", "system"]).optional(),
  editor: import_zod.z.object({
    persist: import_zod.z.union([
      import_zod.z.literal("none"),
      import_zod.z.literal("localStorage"),
      import_zod.z.literal("sessionStorage"),
      import_zod.z.object({ resource: import_zod.z.string() }).strict()
    ]).default("localStorage")
  }).strict().optional()
}).strict();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  componentTokensSchema,
  flavorOverrideSchema,
  fontSchema,
  globalTokensSchema,
  radiusSchema,
  shadowSchema,
  spacingSchema,
  themeColorsSchema,
  themeConfigSchema
});
//# sourceMappingURL=index.cjs.map