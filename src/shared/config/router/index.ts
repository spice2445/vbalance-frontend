import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';

import { appStarted } from '../init';

export enum AppRoutes {
  PROFILE = 'profile',
  PROFILE_REDACTOR = 'profile/redactor',
  PROFILE_STATUSES = 'profile/statuses',
  MY_ORGANIZATION = 'my-organization',
  TOKENOMICS = 'tokenomics',
  DIRECTIONS_MENU = 'directions-menu',
  DIRECTION = 'direction',
  DIRECTION_BLOCK = 'direction-block',
  INVESTMENTS = 'investments',
  INVESTMENTS_ARB = 'investments/arb',
  INVESTMENTS_INDEX = 'investments/index',
  ACADEMY = 'academy',
  AUTH_SIGN_IN = 'auth/sign-in',
  AUTH_SIGN_UP = 'auth/sign-up',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/',
  [AppRoutes.PROFILE_REDACTOR]: '/profile/redactor',
  [AppRoutes.PROFILE_STATUSES]: '/profile/statuses',
  [AppRoutes.MY_ORGANIZATION]: '/my-organization',
  [AppRoutes.TOKENOMICS]: '/tokenomics',
  [AppRoutes.DIRECTIONS_MENU]: '/directions_menu',
  [AppRoutes.DIRECTION]: '/direction/:directionName',
  [AppRoutes.DIRECTION_BLOCK]: '/direction/:directionName/:blockId',
  [AppRoutes.INVESTMENTS]: '/investments',
  [AppRoutes.INVESTMENTS_ARB]: '/investments/arb',
  [AppRoutes.INVESTMENTS_INDEX]: '/investments/index',
  [AppRoutes.ACADEMY]: '/academy',
  [AppRoutes.AUTH_SIGN_IN]: '/auth/sign-in',
  [AppRoutes.AUTH_SIGN_UP]: '/auth/sign-up'
};

export const routes = {
  landing: createRoute(),
  profile: {
    _:createRoute(),
    redactor:createRoute(),
    statuses: createRoute()
  },
  my_organization: createRoute(),
  tokenomics: createRoute(),
  directions: {
    _: createRoute<{ directionName: string }>(),
    block: createRoute<{ directionName: string, blockId: string }>(),
    menu: createRoute()
  },
  investments: {
    _: createRoute(),
    arb: createRoute(),
    index: createRoute()
  },
  academy: createRoute(),
  auth: {
    signIn: createRoute(),
    signUp: createRoute()
  }
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: RoutePath.profile,
      route: routes.profile._
    },
    {
      path: RoutePath['profile/redactor'],
      route: routes.profile.redactor
    },
    {
      path: RoutePath['profile/statuses'],
      route: routes.profile.statuses
    },
    {
      path: RoutePath['my-organization'],
      route: routes.my_organization
    },
    {
      path: RoutePath.tokenomics,
      route: routes.tokenomics
    },
    {
      path: RoutePath.direction,
      route: routes.directions._
    },
    {
      path: RoutePath['directions-menu'],
      route: routes.directions.menu
    },
    {
      path: RoutePath['direction-block'],
      route: routes.directions.block
    },
    {
      path: RoutePath.investments,
      route: routes.investments._
    },
    {
      path: RoutePath['investments/arb'],
      route: routes.investments.arb
    },
    {
      path: RoutePath['investments/index'],
      route: routes.investments.index
    },
    {
      path: RoutePath['academy'],
      route: routes.academy
    },
    {
      path: RoutePath['auth/sign-in'],
      route: routes.auth.signIn
    },
    {
      path: RoutePath['auth/sign-up'],
      route: routes.auth.signUp
    }
  ],
  controls
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory
});
