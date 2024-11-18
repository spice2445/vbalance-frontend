import { Chain } from 'viem';
import { Connector } from 'wagmi';

export interface setUserWeb3DataFxProps {
    chain: Chain | undefined;
    chainId: number;
    address: `0x${string}`;
    addresses: readonly [`0x${string}`, ...`0x${string}`[]];
    connector: Connector;
    isReconnected: boolean;
}