import { createEffect, restore } from 'effector';
import { wagmiConfig } from 'shared/config/wagmi';
import { getWalletClient } from 'wagmi/actions';

export const setClientsWeb3Fx = createEffect(async () => (
    {
        client: wagmiConfig.getClient(),
        wallet: await getWalletClient(wagmiConfig)
    }
));

export const $clientsWeb3 = restore(setClientsWeb3Fx, null);