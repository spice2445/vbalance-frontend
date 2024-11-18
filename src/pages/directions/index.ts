import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const DirectionsPage = namedLazy(async () => await import('./ui'), 'DirectionsPage');

const DirectionsLoaderView = createRouteView({
  // @ts-ignore
  route: authenticatedRoute,
  view: DirectionsPage,
  otherwise: PageLoader
});

export const DirectionsRoute = {
  view: DirectionsLoaderView,
  route: currentRoute
};
