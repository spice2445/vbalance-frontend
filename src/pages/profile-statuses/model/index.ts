import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { routes } from 'shared/config/router';
import { loadingInViewFactory } from 'shared/lib/factories';
import { delayGetMock } from 'shared/lib/lazy';
import { chainAuthenticated } from 'shared/viewer';

import { MOCK_ACQUIRED_STATUSES, MOCK_ACHIEVEMENT_STATUSES, CardStatuses } from '../config';

export const currentRoute = routes.profile.statuses;
export const authenticatedRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.auth.signIn.open
});

const getAcquiredStatusesFx = createEffect(async () => {
  await delayGetMock();

  return MOCK_ACQUIRED_STATUSES;
});

const {
  loaddedData: loaddedAcquiredStatuses,
  $data: $acquiredStatuses
} = invoke(loadingInViewFactory<void, CardStatuses[]>, {
  effect: getAcquiredStatusesFx
});

export const acquiredStatuses = {
  $statuses: $acquiredStatuses,
  loadded: loaddedAcquiredStatuses
};

const getAchievementStatusesFx = createEffect(async () => {
  await delayGetMock();

  return MOCK_ACHIEVEMENT_STATUSES;
});

const {
  loaddedData: loaddedAchievementStatuses,
  $data: $achievementStatuses
} = invoke(loadingInViewFactory<void, CardStatuses[]>, {
  effect: getAchievementStatusesFx
});

export const achievementStatuses = {
  $statuses: $achievementStatuses,
  loadded: loaddedAchievementStatuses
};
