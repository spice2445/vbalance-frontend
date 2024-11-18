import { createJsonQuery, declareParams } from '@farfetched/core';
import { contracts } from 'shared/api/contracts';
import { baseUrl } from 'shared/lib/base-url';

export type GetBotIdParams = {
  referal_invited?: string;
}

export const getBotId = createJsonQuery({
  params: declareParams<GetBotIdParams>(),
  initialData: {
    data: {
      botId: 0
    }
  },
  request: {
    method: 'POST',
    url: baseUrl('/auth/telegram/oauth-init'),
    body: (data) => data,
    credentials: 'include'
  },
  response: {
    contract: contracts.auth.byTelegram.botId
  }
});