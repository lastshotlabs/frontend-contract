import { describe, expect, it } from "vitest";
import {
  workflowConditionSchema,
  workflowDefinitionSchema,
  workflowNodeSchema,
} from "../src/workflows";

describe("workflow contract", () => {
  it("parses workflow conditions", () => {
    expect(
      workflowConditionSchema.parse({
        left: { from: "state.enabled" },
        operator: "truthy",
      }),
    ).toEqual({
      left: { from: "state.enabled" },
      operator: "truthy",
    });
  });

  it("parses built-in workflow nodes", () => {
    expect(
      workflowNodeSchema.parse({
        type: "wait",
        duration: 250,
      }),
    ).toEqual({
      type: "wait",
      duration: 250,
    });
  });

  it("parses nested workflow definitions", () => {
    expect(
      workflowDefinitionSchema.parse([
        {
          type: "assign",
          values: {
            status: "idle",
          },
        },
        {
          type: "if",
          condition: {
            left: true,
            operator: "truthy",
          },
          then: {
            type: "toast",
            message: "Saved",
          },
        },
      ]),
    ).toHaveLength(2);
  });
});
