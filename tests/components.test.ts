import { describe, expect, it } from "vitest";
import {
  sharedBaseComponentSchema,
  slotsSchema,
  surfaceStateNameSchema,
} from "../src/components";

describe("component contract", () => {
  it("parses canonical surface states", () => {
    expect(surfaceStateNameSchema.parse("hover")).toBe("hover");
    expect(surfaceStateNameSchema.parse("disabled")).toBe("disabled");
  });

  it("parses shared base component styling and slots", () => {
    expect(
      sharedBaseComponentSchema.parse({
        id: "hero",
        padding: "lg",
        bg: "background",
        display: {
          default: "flex",
          md: "grid",
        },
        slots: {
          root: {
            padding: "xl",
            states: {
              hover: {
                bg: "primary",
              },
              disabled: {
                opacity: 0.5,
              },
            },
          },
        },
      }),
    ).toMatchObject({
      id: "hero",
      padding: "lg",
    });
  });

  it("creates strict slot schemas for component metadata", () => {
    const schema = slotsSchema(["root", "header", "content"]);
    expect(
      schema.parse({
        root: { padding: "md" },
        header: { paddingY: "sm" },
        content: {
          states: {
            active: {
              shadow: "lg",
            },
          },
        },
      }),
    ).toBeDefined();
  });
});
