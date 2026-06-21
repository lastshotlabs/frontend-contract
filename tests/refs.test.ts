import { describe, expect, it } from "vitest";
import {
  FROM_REF_TRANSFORMS,
  applyResolved,
  exprRefSchema,
  extractFromRefs,
  fromRefSchema,
  isExprRef,
  isFromRef,
} from "../src/refs";

describe("refs contract", () => {
  it("exports the canonical transform vocabulary", () => {
    expect(FROM_REF_TRANSFORMS).toContain("uppercase");
    expect(FROM_REF_TRANSFORMS).toContain("default");
  });

  it("recognizes from refs and expr refs", () => {
    expect(isFromRef({ from: "user.name" })).toBe(true);
    expect(isFromRef({ expr: "user.name" })).toBe(false);
    expect(isExprRef({ expr: "user.name" })).toBe(true);
    expect(isExprRef({ from: "user.name" })).toBe(false);
    expect(fromRefSchema.parse({ from: "user.name" })).toEqual({
      from: "user.name",
    });
    expect(exprRefSchema.parse({ expr: "user.name" })).toEqual({
      expr: "user.name",
    });
  });

  it("extracts and reapplies nested ref values", () => {
    const config = {
      title: { from: "screen.title" },
      items: [{ label: { from: "screen.label" } }],
    };

    expect(extractFromRefs(config).size).toBe(2);
    expect(
      applyResolved(
        config,
        new Map<string, unknown>([
          ["title", "Inbox"],
          ["items.0.label", "Unread"],
        ]),
      ),
    ).toEqual({
      title: "Inbox",
      items: [{ label: "Unread" }],
    });
  });
});
