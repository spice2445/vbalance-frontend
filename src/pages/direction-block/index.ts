import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const DirectionBlockPage = namedLazy(async () => await import('./ui'), 'DirectionBlockPage');

const DirectionBlockLoaderView = createRouteView({
  // @ts-ignore
  route: authenticatedRoute,
  view: DirectionBlockPage,
  otherwise: PageLoader
});

export const DirectionBlockRoute = {
  view: DirectionBlockLoaderView,
  route: currentRoute
};
