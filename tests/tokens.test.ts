import { describe, expect, it } from "vitest";
import { themeConfigSchema } from "../src/tokens/index";

describe("token contract", () => {
  it("parses shared theme config", () => {
    expect(
      themeConfigSchema.parse({
        flavor: "neutral",
        mode: "system",
        overrides: {
          colors: {
            primary: "0.52 0.24 285",
          },
        },
      }),
    ).toMatchObject({
      flavor: "neutral",
      mode: "system",
    });
  });
});
