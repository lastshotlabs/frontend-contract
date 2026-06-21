import { describe, expect, expectTypeOf, it } from "vitest";
import type { SharedManifestSections } from "../src/manifest";
import {
  stateConfigMapSchema,
  statePersistConfigSchema,
  stateValueConfigSchema,
} from "../src/state";
import type { StateConfigMap, StateValueConfig } from "../src/state";

describe("state and manifest contracts", () => {
  it("exposes the canonical state declaration shape", () => {
    expectTypeOf<StateValueConfig>().toMatchTypeOf<{
      scope?: "app" | "route";
      compute?: string;
      default?: unknown;
    }>();
    expectTypeOf<StateConfigMap>().toMatchTypeOf<
      Record<string, StateValueConfig>
    >();
  });

  it("composes shared manifest sections", () => {
    expectTypeOf<SharedManifestSections>().toMatchTypeOf<{
      state?: StateConfigMap;
    }>();
  });

  it("validates shared state schemas", () => {
    expect(
      statePersistConfigSchema.parse({
        storage: "localStorage",
        key: "session",
      }),
    ).toEqual({
      storage: "localStorage",
      key: "session",
    });

    expect(
      stateValueConfigSchema.parse({
        scope: "app",
        default: null,
      }),
    ).toEqual({
      scope: "app",
      default: null,
      persist: "none",
    });

    expect(
      stateConfigMapSchema.parse({
        session: {
          scope: "app",
          default: null,
        },
      }),
    ).toEqual({
      session: {
        scope: "app",
        default: null,
        persist: "none",
      },
    });
  });
});
