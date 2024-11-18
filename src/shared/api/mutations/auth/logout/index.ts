import { createJsonMutation, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { sample } from 'effector';
import { baseUrl } from 'shared/lib/base-url';
import { handleToastMutationStateFactory } from 'shared/lib/factories';
import { reloadPageFx } from 'shared/lib/reload-page';


export const logout = createJsonMutation({
  request: {
    method: 'GET',
    url: baseUrl('/auth/logout'),
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});

sample({
  // @ts-ignore
  clock: logout.finished.finally,
  target: reloadPageFx
});

invoke(handleToastMutationStateFactory, { 
  mutation: logout,
  pending: 'Выходим из личного кабинета...',
  succeeded: 'Вы успешно вышли!'
});

