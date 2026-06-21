import { EndpointTarget } from './resources/index.js';

type StateScope = "app" | "route";
type StatePersistConfig = "none" | "localStorage" | "sessionStorage" | {
    storage: "localStorage" | "sessionStorage";
    key?: string;
};
interface StateValueConfig {
    scope?: StateScope;
    data?: EndpointTarget;
    default?: unknown;
    compute?: string;
    persist?: StatePersistConfig;
}
type StateConfigMap = Record<string, StateValueConfig>;

export type { StateConfigMap as S, StatePersistConfig as a, StateScope as b, StateValueConfig as c };
