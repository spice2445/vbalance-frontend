import { createRouteView } from 'atomic-router-react';
import { PageLoader } from 'widgets/others-pages';

import {
  routeAnonymousSignIn, routeSignIn, routeSignUp, routeAnonymousSignUp
} from './model';
import { SignInPage, SignUpPage } from './ui';

const SignInLoaderView = createRouteView({
  route: routeAnonymousSignIn,
  view: SignInPage,
  otherwise: PageLoader
});
const SignUpLoaderView = createRouteView({
  route: routeAnonymousSignUp,
  view: SignUpPage,
  otherwise: PageLoader
});

export const SignInRoute = {
  view: SignInLoaderView,
  route: routeSignIn
};

export const SignUpRoute = {
  view: SignUpLoaderView,
  route: routeSignUp
};
