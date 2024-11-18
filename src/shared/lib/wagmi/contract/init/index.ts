import { attach } from 'effector';
import { Abi, Address } from 'viem';
import { ReadContractParameters, WriteContractParameters } from 'viem';

import { readContractFx } from '../read';
import { writeContractFx } from '../write';

export interface createContractProps {
    abi: Abi,
    address: Address,
}

export const initContract = (props: createContractProps) => ({
    read: attach({
        mapParams: (params) => ({
            ...props,
            ...params
        } as ReadContractParameters),
        effect: readContractFx
    }),
    write: attach({
        mapParams: (params) => ({
            ...props,
            ...params
        } as WriteContractParameters),
        effect: writeContractFx
    })
});

export const isMainnet = () => __WEB3_NETWORK__ === 'mainnet';
export const chooseAddress = (mainnet:Address, testnet: Address) => isMainnet() ? mainnet : testnet;