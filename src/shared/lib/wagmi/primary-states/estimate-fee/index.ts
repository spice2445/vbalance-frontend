import { createEffect, restore } from 'effector';
import { wagmiConfig } from 'shared/config/wagmi';
import { estimateFeesPerGas } from 'wagmi/actions';

export const setEstimateFeeFx = createEffect(async () => (
    await estimateFeesPerGas(wagmiConfig)
));

export const $estimateFeeWeb3 = restore(setEstimateFeeFx, null);