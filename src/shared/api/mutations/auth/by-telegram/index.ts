import { createJsonMutation, declareParams, unknownContract } from '@farfetched/core';
import { baseUrl } from 'shared/lib/base-url';
import { TelegramData } from 'shared/types/telegram';

export type ValidateTelegramDataMutationParams = {
  data: TelegramData;
};

export const validateTelegramData = createJsonMutation({
  params: declareParams<ValidateTelegramDataMutationParams>(),
  request: {
    method: 'POST',
    url: baseUrl('/auth/telegram/oauth-callback'),
    body: (data) => data,
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});
