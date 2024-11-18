import { StoryFn, StoryContext } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'shared/config/query';
import { wagmiConfig } from 'shared/config/wagmi';
import { WagmiProvider } from 'wagmi';

export const WagmiDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <StoryComponent {...context} />
    </QueryClientProvider>
  </WagmiProvider>
);
