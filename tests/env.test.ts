import { describe, expect, it } from "vitest";
import {
  getDefaultEnvSource,
  isEnvRef,
  resolveEnvRef,
} from "../src/manifest/env";

describe("manifest env contract", () => {
  it("recognizes env refs", () => {
    expect(isEnvRef({ env: "API_URL" })).toBe(true);
    expect(isEnvRef({ nope: true })).toBe(false);
  });

  it("resolves refs with default fallback", () => {
    expect(
      resolveEnvRef(
        { env: "API_URL", default: "http://localhost:3000" },
        {},
      ),
    ).toBe("http://localhost:3000");
  });

  it("builds a default env source object", () => {
    expect(typeof getDefaultEnvSource()).toBe("object");
  });
});
