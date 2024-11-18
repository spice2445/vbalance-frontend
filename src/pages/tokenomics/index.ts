import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { authenticatedRoute, currentRoute } from './model';

const TokenomicsPage = namedLazy(async () => await import('./ui'), 'TokenomicsPage');

const TokenomicsLoaderView = createRouteView({
  route: authenticatedRoute,
  view: TokenomicsPage,
  otherwise: PageLoader
});
export const TokenomicsRoute = {
  view: TokenomicsLoaderView,
  route: currentRoute
};
