import type { EndpointTarget } from "../resources";
export type StateScope = "app" | "route";
export type StatePersistConfig = "none" | "localStorage" | "sessionStorage" | {
    storage: "localStorage" | "sessionStorage";
    key?: string;
};
export interface StateValueConfig {
    scope?: StateScope;
    data?: EndpointTarget;
    default?: unknown;
    compute?: string;
    persist?: StatePersistConfig;
}
export type StateConfigMap = Record<string, StateValueConfig>;
