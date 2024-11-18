import { chooseAddress, initContract, createContractProps } from 'shared/lib/wagmi';
import { erc20Abi } from 'viem';

const USDC_CONFIG: createContractProps = {
    abi: erc20Abi,
    address: chooseAddress('0x8965349fb649a33a30cbfda057d8ec2c48abe2a2', '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd')
};

export const USDC_CONTRACTS = initContract(USDC_CONFIG);