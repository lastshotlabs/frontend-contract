import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "refs/index": "src/refs/index.ts",
    "manifest/index": "src/manifest/index.ts",
    "manifest/env": "src/manifest/env.ts",
    "resources/index": "src/resources/index.ts",
    "tokens/index": "src/tokens/index.ts",
    "actions/index": "src/actions/index.ts",
    "i18n/index": "src/i18n/index.ts",
    "policies/index": "src/policies/index.ts",
    "state/index": "src/state/index.ts",
    "workflows/index": "src/workflows/index.ts",
    "components/index": "src/components/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2022",
  external: ["zod"],
});
