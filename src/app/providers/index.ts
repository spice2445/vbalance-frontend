import compose from 'compose-function';

import { withErrorBoundary } from './with-errorboundary';
import { withModal } from './with-modal';
import { withQuery } from './with-query';
import { withRouter } from './with-router';
import { withSuspense } from './with-suspense';
import { withToast } from './with-toast';
import { withWagmi } from './with-wagmi';

export const withProviders = compose(
  withErrorBoundary,
  withRouter,
  withSuspense,
  withWagmi,
  withQuery,
  withModal,
  withToast
);

export {WagmiInit} from './with-wagmi-init';