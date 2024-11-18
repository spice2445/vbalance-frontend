import { routes } from 'shared/config/router';
import { chainAuthenticated } from 'shared/viewer';

export const currentRoute = routes.investments._;
export const authenticatedRoute = chainAuthenticated(currentRoute, {
    otherwise: routes.auth.signIn.open
});
  