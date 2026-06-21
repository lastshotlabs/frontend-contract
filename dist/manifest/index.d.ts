import { I18nConfig } from '../i18n/index.js';
import { PolicyMap } from '../policies/index.js';
import { ResourceMap } from '../resources/index.js';
import { S as StateConfigMap } from '../types-xWJCMOrd.js';
import { l as WorkflowMap } from '../types-KOFvE1Pc.js';
import 'zod';
import './env.js';
import '../from-B_VrpLQ5.js';
import '../actions/index.js';

interface SharedManifestSections {
    state?: StateConfigMap;
    resources?: ResourceMap;
    workflows?: WorkflowMap;
    policies?: PolicyMap;
    i18n?: I18nConfig;
}

export type { SharedManifestSections };
