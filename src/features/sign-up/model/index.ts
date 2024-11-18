import { createStore } from 'effector';
import { mutations } from 'shared/api/mutations';

enum FormStatus {
  Initial = 1,
  ValidateCode,
  Success
}

const $formStatus = createStore<FormStatus>(FormStatus.Initial);

$formStatus.on(mutations.auth.byEmail.sendCode.finished.success, () => FormStatus.ValidateCode);
$formStatus.on(mutations.auth.byEmail.validateCode.finished.success, () => FormStatus.Success);


export { FormStatus, $formStatus };
export { $$formValidateCode } from './validate-code-form';
export { $$formSendCode } from './send-code-form';

export { $conditionalCheckbox, changeConditionalStatus } from './conditionals-checkbox';
