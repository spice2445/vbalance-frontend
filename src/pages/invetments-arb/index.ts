import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';
const InvestmentsArbPage = namedLazy(async () => await import('./ui'), 'InvestmentsArb');

const InvestmentsArbLoaderView = createRouteView({
  route: authenticatedRoute,
  view: InvestmentsArbPage,
  otherwise: PageLoader
});

export const InvestmentsArbRoute = {
  view: InvestmentsArbLoaderView,
  route: currentRoute
};
