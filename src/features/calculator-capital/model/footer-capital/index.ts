import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { loadingInViewFactory } from 'shared/lib/factories';
import { delayGetMock } from 'shared/lib/lazy';

import { type footerInfo, FOOOTER_INFO_MOCK } from '../../config';

const getInfoCapitalFx = createEffect(async () => {
  await delayGetMock();

  return FOOOTER_INFO_MOCK;
});

export const infoCapital = invoke(loadingInViewFactory<void, footerInfo>, {
  effect: getInfoCapitalFx
});
