import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const InvestmentsIndexPage = namedLazy(async () => await import('./ui'), 'InvestmentsIndex');

const InvestmentsIndexLoaderView = createRouteView({
  route: authenticatedRoute,
  view: InvestmentsIndexPage,
  otherwise: PageLoader
});

export const InvestmentsIndexRoute = {
  view: InvestmentsIndexLoaderView,
  route: currentRoute
};
