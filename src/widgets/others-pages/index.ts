import { namedLazy } from 'shared/lib/lazy';

export {
    PageError,
    PageLoader
} from './ui';

export const NotFoundPage = namedLazy(async () => await import('./ui'), 'NotFoundPage');