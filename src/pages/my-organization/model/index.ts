import { routes } from 'shared/config/router';
import { chainAuthenticated } from 'shared/viewer';

export const currentRoute = routes.my_organization;
export const authenticatedRoute = chainAuthenticated(currentRoute, {
    otherwise: routes.auth.signIn.open
});

export { userTable } from './tables';
