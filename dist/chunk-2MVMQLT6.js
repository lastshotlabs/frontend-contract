import {
  actionSchema
} from "./chunk-OEXWAGF6.js";

// src/workflows/schema.ts
import { z } from "zod";
var workflowConditionSchema = z.object({
  left: z.unknown(),
  operator: z.enum(["truthy", "falsy", "equals", "not-equals", "exists"]).optional(),
  right: z.unknown().optional()
}).strict();
var workflowNodeSchema = z.lazy(
  () => z.union([
    actionSchema,
    z.object({
      type: z.literal("if"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      condition: workflowConditionSchema,
      then: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]),
      else: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]).optional()
    }).strict(),
    z.object({
      type: z.literal("wait"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      duration: z.number().int().min(0)
    }).strict(),
    z.object({
      type: z.literal("parallel"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      branches: z.array(z.union([workflowNodeSchema, z.array(workflowNodeSchema)])).min(1)
    }).strict(),
    z.object({
      type: z.literal("retry"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      attempts: z.number().int().min(1),
      delayMs: z.number().int().min(0).optional(),
      backoffMultiplier: z.number().positive().optional(),
      step: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]),
      onFailure: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]).optional()
    }).strict(),
    z.object({
      type: z.literal("assign"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      values: z.record(z.string(), z.unknown())
    }).strict(),
    z.object({
      type: z.literal("try"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      step: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]),
      catch: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]).optional(),
      finally: z.union([workflowNodeSchema, z.array(workflowNodeSchema)]).optional()
    }).strict(),
    z.object({
      type: z.literal("capture"),
      id: z.string().optional(),
      when: workflowConditionSchema.optional(),
      action: actionSchema,
      as: z.string().min(1)
    }).strict()
  ])
);
var workflowDefinitionSchema = z.union([
  workflowNodeSchema,
  z.array(workflowNodeSchema)
]);

export {
  workflowConditionSchema,
  workflowNodeSchema,
  workflowDefinitionSchema
};
//# sourceMappingURL=chunk-2MVMQLT6.js.map