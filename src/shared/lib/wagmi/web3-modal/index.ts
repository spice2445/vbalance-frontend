import { createEffect } from 'effector';
import { web3Modal } from 'shared/config/wagmi';

export const openWeb3ModalFx = createEffect(async () =>
    await web3Modal.open()
);