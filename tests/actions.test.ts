import { describe, expect, it } from "vitest";
import {
  ACTION_TYPES,
  actionSchema,
  runWorkflowActionSchema,
} from "../src/actions/index";

describe("action contract", () => {
  it("defines the canonical action vocabulary", () => {
    expect(ACTION_TYPES).toContain("run-workflow");
    expect(ACTION_TYPES).toContain("toast");
  });

  it("parses workflow actions", () => {
    expect(
      runWorkflowActionSchema.parse({
        type: "run-workflow",
        workflow: "refreshUsers",
      }),
    ).toEqual({
      type: "run-workflow",
      workflow: "refreshUsers",
    });
  });

  it("parses nested actions through the union schema", () => {
    const parsed = actionSchema.parse({
      type: "branch",
      condition: "global.user",
      then: {
        type: "toast",
        message: "Ready",
      },
      else: {
        type: "navigate",
        to: "/login",
      },
    });

    expect(parsed.type).toBe("branch");
  });
});
