import { createJsonMutation, declareParams, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { baseUrl } from 'shared/lib/base-url';
import { handleToastMutationStateFactory } from 'shared/lib/factories/handle-toast-mutation-state';

export type SendCodeMutationParams = {
  email: string;  
  referal_invited: string;
  password: string;
  lang: string;
}
  
export const sendCode = createJsonMutation({
  params: declareParams<SendCodeMutationParams>(),
  request: {
    method: 'POST',
    url: baseUrl('/auth/email/registration'),
    body: (data) => data,
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});
  
invoke(handleToastMutationStateFactory, { 
  mutation: sendCode,
  pending: 'Отправляем код...',
  succeeded: 'Код успешно отправлен!'
});