import { ActionConfig } from './actions/index.js';

type WorkflowConditionOperator = "truthy" | "falsy" | "equals" | "not-equals" | "exists";
interface WorkflowCondition {
    left: unknown;
    operator?: WorkflowConditionOperator;
    right?: unknown;
}
type CustomWorkflowActionInputType = "string" | "number" | "boolean";
interface CustomWorkflowActionInputSchema {
    type: CustomWorkflowActionInputType;
    required?: boolean;
    default?: string | number | boolean | null;
}
interface CustomWorkflowActionDeclaration {
    input?: Record<string, CustomWorkflowActionInputSchema>;
}
type CustomWorkflowActionDeclarationMap = Record<string, CustomWorkflowActionDeclaration>;
interface WorkflowBaseNode {
    id?: string;
    when?: WorkflowCondition;
}
interface IfWorkflowNode extends WorkflowBaseNode {
    type: "if";
    condition: WorkflowCondition;
    then: WorkflowDefinition;
    else?: WorkflowDefinition;
}
interface WaitWorkflowNode extends WorkflowBaseNode {
    type: "wait";
    duration: number;
}
interface ParallelWorkflowNode extends WorkflowBaseNode {
    type: "parallel";
    branches: WorkflowDefinition[];
}
interface RetryWorkflowNode extends WorkflowBaseNode {
    type: "retry";
    attempts: number;
    delayMs?: number;
    backoffMultiplier?: number;
    step: WorkflowDefinition;
    onFailure?: WorkflowDefinition;
}
interface AssignWorkflowNode extends WorkflowBaseNode {
    type: "assign";
    values: Record<string, unknown>;
}
interface TryWorkflowNode extends WorkflowBaseNode {
    type: "try";
    step: WorkflowDefinition;
    catch?: WorkflowDefinition;
    finally?: WorkflowDefinition;
}
interface CaptureWorkflowNode extends WorkflowBaseNode {
    type: "capture";
    action: ActionConfig;
    as: string;
}
type WorkflowNode = ActionConfig | IfWorkflowNode | WaitWorkflowNode | ParallelWorkflowNode | RetryWorkflowNode | AssignWorkflowNode | TryWorkflowNode | CaptureWorkflowNode;
type WorkflowDefinition = WorkflowNode | WorkflowNode[];
type WorkflowMap = Record<string, WorkflowDefinition>;
interface WorkflowExecutionRuntime {
    context: Record<string, unknown>;
    resolveValue: (value: unknown, context: Record<string, unknown>) => unknown;
    executeAction: (action: ActionConfig, context: Record<string, unknown>) => Promise<unknown>;
    getWorkflow: (name: string) => WorkflowDefinition | undefined;
    runDefinition: (definition: WorkflowDefinition, context?: Record<string, unknown>) => Promise<void>;
}
interface CustomWorkflowNode extends WorkflowBaseNode {
    type: string;
    [key: string]: unknown;
}
type WorkflowActionHandler = (node: CustomWorkflowNode, runtime: WorkflowExecutionRuntime) => Promise<void>;

export type { AssignWorkflowNode as A, CaptureWorkflowNode as C, IfWorkflowNode as I, ParallelWorkflowNode as P, RetryWorkflowNode as R, TryWorkflowNode as T, WaitWorkflowNode as W, CustomWorkflowActionDeclaration as a, CustomWorkflowActionDeclarationMap as b, CustomWorkflowActionInputSchema as c, CustomWorkflowActionInputType as d, CustomWorkflowNode as e, WorkflowActionHandler as f, WorkflowBaseNode as g, WorkflowCondition as h, WorkflowConditionOperator as i, WorkflowDefinition as j, WorkflowExecutionRuntime as k, WorkflowMap as l, WorkflowNode as m };
