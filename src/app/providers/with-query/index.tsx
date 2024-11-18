import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { queryClient } from 'shared/config/query';

export const withQuery = (component: () => ReactNode) => () => (
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
);
