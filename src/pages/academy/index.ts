
import { createRouteView } from 'atomic-router-react';
import { namedLazy } from 'shared/lib/lazy';
import { PageLoader } from 'widgets/others-pages';

import { authenticatedRoute, currentRoute } from './model';

const AcademyPage = namedLazy(async () => await import('./ui'), 'AcademyPage');

const AcademyLoaderView = createRouteView({
  route: authenticatedRoute,
  view: AcademyPage,
  otherwise: PageLoader
});

export const AcademyRoute = {
  view: AcademyLoaderView,
  route: currentRoute
};
