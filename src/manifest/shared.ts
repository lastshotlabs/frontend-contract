import type { I18nConfig } from "../i18n";
import type { PolicyMap } from "../policies";
import type { ResourceMap } from "../resources";
import type { StateConfigMap } from "../state";
import type { WorkflowMap } from "../workflows";

export interface SharedManifestSections {
  state?: StateConfigMap;
  resources?: ResourceMap;
  workflows?: WorkflowMap;
  policies?: PolicyMap;
  i18n?: I18nConfig;
}
