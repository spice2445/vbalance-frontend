import { createJsonMutation, declareParams, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { baseUrl } from 'shared/lib/base-url';
import { handleToastMutationStateFactory } from 'shared/lib/factories';

export type LoginMutationParams = {
  email: string;  
  password: string;
}

export const login = createJsonMutation({
  params: declareParams<LoginMutationParams>(),
  request: {
    method: 'POST',
    url: baseUrl('/auth/email/login'),
    body: (data) => data,
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});

invoke(handleToastMutationStateFactory, { 
  mutation: login,
  pending: 'Входим в личный кабинет...',
  succeeded: 'Вы успешно вошли!'
});