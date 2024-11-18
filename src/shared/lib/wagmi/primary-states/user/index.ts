import { createEffect, restore } from 'effector';
import { wagmiConfig } from 'shared/config/wagmi';
import { getBalance } from 'wagmi/actions';

import { setUserWeb3DataFxProps } from '../type';

export const setUserWeb3DataFx = createEffect(async (props: setUserWeb3DataFxProps) => {
    const balance = await getBalance(wagmiConfig, {
        address: props.address
    });

    return {
        address: props.address,
        chain: props.chain,
        balance
    };
});

export const $userWeb3 = restore(setUserWeb3DataFx, null);