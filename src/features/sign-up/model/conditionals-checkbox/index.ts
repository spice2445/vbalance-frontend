import { invoke } from '@withease/factories';
import { checkBoxFactory } from 'shared/lib/factories';

export const {
    $checkBox: $conditionalCheckbox,
    changedState: changeConditionalStatus
} = invoke(checkBoxFactory, {
    isOnce: false
});