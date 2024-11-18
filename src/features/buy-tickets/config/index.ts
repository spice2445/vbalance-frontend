import { keyModal, modalsStore } from 'shared/lib/modal';

export const TICKETS_MODAL_KEY = 'TICKETS_MODAL';

export const restoreSample = {
    clock: modalsStore.closeModal,
    filter: ({keyModal}: keyModal) => keyModal === TICKETS_MODAL_KEY
};