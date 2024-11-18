import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { http } from 'viem';
import { bsc, bscTestnet } from 'wagmi/chains';

const metadata = {
  name: 'VbalanceClub',
  description: 'Vbalance Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = __WEB3_NETWORK__ === 'mainnet' ? [bsc] as const : [bscTestnet] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: __WALLET_CONNECT_ID__,
  metadata,
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http()
  }
});

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId: __WALLET_CONNECT_ID__,
  themeVariables: {
    '--w3m-font-family': 'Tektur, sans-serif',
    '--w3m-accent': 'var(--acsent-color)',
    '--w3m-color-mix': 'var(--acsent-color)',
    '--w3m-color-mix-strength': 20
  }
});