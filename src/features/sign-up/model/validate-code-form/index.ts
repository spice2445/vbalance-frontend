import { Effect, createStore, sample } from 'effector';
import { api } from 'shared/api';
import { ValidateCodeMutationParams } from 'shared/api/mutations';
import { createForm } from 'shared/lib/form';

import { validateCodeScheme } from '../../config';

const $initialValuesValidateCode = createStore({
  code: ''
});
  
sample({
  clock: api.mutations.auth.byEmail.validateCode.$succeeded,
  target: api.queries.user.me.start
});

export const $$formValidateCode = createForm({
  initialValues: $initialValuesValidateCode,
  onSubmit: api.mutations.auth.byEmail.validateCode.start as unknown as Effect<ValidateCodeMutationParams, any, Error>,
  schema: validateCodeScheme
});