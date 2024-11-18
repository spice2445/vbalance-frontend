import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { authenticatedRoute, currentRoute } from './model';

const ProfilePage = namedLazy(async () => await import('./ui'), 'ProfilePage');

const ProfileLoaderView = createRouteView({
  route: authenticatedRoute,
  view: ProfilePage,
  otherwise: PageLoader
});

export const ProfileRoute = {
  view: ProfileLoaderView,
  route: currentRoute
};
