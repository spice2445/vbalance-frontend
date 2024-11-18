import { declareParams, createJsonMutation, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { baseUrl } from 'shared/lib/base-url';
import { handleToastMutationStateFactory } from 'shared/lib/factories/handle-toast-mutation-state';

export type ValidateCodeMutationParams = {
  code: string;
}

export const validateCode = createJsonMutation({
  params: declareParams<ValidateCodeMutationParams>(),
  request: {
    method: 'POST',
    url: baseUrl('/auth/email/validate-code'),
    body: (data) => data,
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});
  
invoke(handleToastMutationStateFactory, { 
  mutation: validateCode,
  pending: 'Проверяем код...',
  succeeded: 'Вы успешно зарегистрировались!'
});