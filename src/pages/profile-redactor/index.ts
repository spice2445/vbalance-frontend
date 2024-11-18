import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { authenticatedRoute, currentRoute } from './model';

const ProfileRedactorPage = namedLazy(async () => await import('./ui'), 'ProfileRedactorPage');

const ProfileRedactorLoaderView = createRouteView({
  route: authenticatedRoute,
  view: ProfileRedactorPage,
  otherwise: PageLoader
});

export const ProfileRedactorRoute = {
  view: ProfileRedactorLoaderView,
  route: currentRoute
};
