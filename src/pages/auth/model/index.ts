import { routes } from 'shared/config/router';
import { chainAnonymous } from 'shared/viewer';

export const routeSignIn = routes.auth.signIn;
export const routeSignUp = routes.auth.signUp;
export const routeAnonymousSignIn = chainAnonymous(routes.auth.signIn, {
  otherwise: routes.profile._.open
});
export const routeAnonymousSignUp = chainAnonymous(routes.auth.signUp, {
  otherwise: routes.profile._.open
});
