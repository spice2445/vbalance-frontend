import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const ProfileStatusesPage = namedLazy(async () => await import('./ui'), 'ProfileStatusesPage');

const ProfileStatusesRouteView = createRouteView({
  route: authenticatedRoute,
  view: ProfileStatusesPage,
  otherwise: PageLoader
});

export const ProfileStatusesRoute = {
  view: ProfileStatusesRouteView,
  route: currentRoute
};
