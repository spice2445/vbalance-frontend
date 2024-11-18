import { ReactNode } from 'react';
import { wagmiConfig } from 'shared/config/wagmi';
import { WagmiProvider } from 'wagmi';

export const withWagmi = (component: () => ReactNode) => () => (
  <WagmiProvider config={wagmiConfig}>{component()}</WagmiProvider>
);
