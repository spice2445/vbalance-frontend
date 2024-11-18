import { keyModal, modalsStore } from 'shared/lib/modal';

export const WITHDRAWAL_USDT_MODAL_KEY = 'WITHDRAWAL_USDT_MODAL';
export const WAIT_WITHDRAW_TIME = 259200;

export const restoreSample = {
    clock: modalsStore.closeModal,
    filter: ({keyModal}: keyModal) => keyModal === WITHDRAWAL_USDT_MODAL_KEY
};