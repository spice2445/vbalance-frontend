import { createBarrier, isHttpErrorCode } from '@farfetched/core';

import { mutations } from '../../mutations';

export const auth = createBarrier({
  activateOn: {
    failure: isHttpErrorCode(401)
  },
  perform: [mutations.auth.refreshToken]
});