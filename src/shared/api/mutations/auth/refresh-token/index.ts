import { createJsonMutation, unknownContract } from '@farfetched/core';
import { baseUrl } from 'shared/lib/base-url';

export const refreshToken = createJsonMutation({
  request: {
    method: 'GET',
    url: baseUrl('/auth/refresh-token'),
    credentials: 'include'
  },
  response: {
    contract: unknownContract
  }
});