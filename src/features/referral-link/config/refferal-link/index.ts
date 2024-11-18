import { RoutePath } from 'shared/config/router';

const {href} = window.location;
const hrefUrl = href.replace(/\/$/, '');
export const referralLink = `${hrefUrl}${RoutePath['auth/sign-up']}?ref=`;
