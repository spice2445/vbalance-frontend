import { namedLazy } from 'shared/lib/lazy';

export const SignInPage = namedLazy(async () => await import('./sign-in'), 'SignInPage');
export const SignUpPage = namedLazy(async () => await import('./sign-up'), 'SignUpPage');
