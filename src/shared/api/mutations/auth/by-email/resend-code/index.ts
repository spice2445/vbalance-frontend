import { createJsonMutation, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { baseUrl } from 'shared/lib/base-url';
import { handleToastMutationStateFactory } from 'shared/lib/factories/handle-toast-mutation-state';

export const resendCode = createJsonMutation({
    request: {
        method: 'POST',
        url: baseUrl('/auth/email/resend-code'),
        credentials: 'include'
    },
    response: {
      contract: unknownContract
    }
});


invoke(handleToastMutationStateFactory, { 
  mutation: resendCode,
  pending: 'Отправляем код...',
  succeeded: 'Код успешно отправлен!'
});