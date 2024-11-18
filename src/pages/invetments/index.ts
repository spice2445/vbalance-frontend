import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { currentRoute, authenticatedRoute } from './model';

const InvestmentsPage = namedLazy(async () => await import('./ui'), 'Investments');

const InvestmentsLoaderView = createRouteView({
  route: authenticatedRoute,
  view: InvestmentsPage,
  otherwise: PageLoader
});
export const InvestmentsRoute = {
  view: InvestmentsLoaderView,
  route: currentRoute
};
