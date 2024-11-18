import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { authenticatedRoute, currentRoute } from './model';

const MyOrganizationPage = namedLazy(async () => await import('./ui'), 'MyOrganizationPage');

const MyOrganizationLoaderView = createRouteView({
  route: authenticatedRoute,
  view: MyOrganizationPage,
  otherwise: PageLoader
});
export const MyOrganizationRoute = {
  view: MyOrganizationLoaderView,
  route: currentRoute
};
