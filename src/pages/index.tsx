import { createRoutesView } from 'atomic-router-react';
import { NotFoundPage } from 'widgets/others-pages';

import { AcademyRoute } from './academy';
import { SignInRoute, SignUpRoute } from './auth';
import { DirectionBlockRoute } from './direction-block';
import { DirectionsRoute } from './directions';
import { DirectionsMenuRoute } from './directions-menu';
import { InvestmentsRoute } from './invetments';
import { InvestmentsArbRoute } from './invetments-arb';
import { InvestmentsIndexRoute } from './invetments-index';
import { MyOrganizationRoute } from './my-organization';
import { ProfileRoute } from './profile';
import { ProfileRedactorRoute } from './profile-redactor';
import { ProfileStatusesRoute } from './profile-statuses';
import { TokenomicsRoute } from './tokenomics';

export const Pages = createRoutesView({
  routes: [
    ProfileRoute,
    ProfileRedactorRoute,
    ProfileStatusesRoute,
    MyOrganizationRoute,
    TokenomicsRoute,
    DirectionsMenuRoute,
    DirectionsRoute,
    DirectionBlockRoute,
    InvestmentsRoute,
    InvestmentsArbRoute,
    InvestmentsIndexRoute,
    AcademyRoute,
    SignInRoute,
    SignUpRoute
  ],
  otherwise: NotFoundPage
});

export const Routing = (): JSX.Element => <Pages />;