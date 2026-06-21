import { I18nConfig } from '../i18n/index.cjs';
import { PolicyMap } from '../policies/index.cjs';
import { ResourceMap } from '../resources/index.cjs';
import { S as StateConfigMap } from '../types-DY0RT8h5.cjs';
import { l as WorkflowMap } from '../types-DY09TBEr.cjs';
import 'zod';
import './env.cjs';
import '../from-B_VrpLQ5.cjs';
import '../actions/index.cjs';

interface SharedManifestSections {
    state?: StateConfigMap;
    resources?: ResourceMap;
    workflows?: WorkflowMap;
    policies?: PolicyMap;
    i18n?: I18nConfig;
}

export type { SharedManifestSections };
