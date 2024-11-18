import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const DirectionsMenuPage = namedLazy(async () => await import('./ui'), 'DirectionsMenuPage');

const DirectionsMenuLoaderView = createRouteView({
  route: authenticatedRoute,
  view: DirectionsMenuPage,
  otherwise: PageLoader
});

export const DirectionsMenuRoute = {
  view: DirectionsMenuLoaderView,
  route: currentRoute
};
