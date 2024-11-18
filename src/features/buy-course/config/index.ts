import { keyModal, modalsStore } from 'shared/lib/modal';

export const BUY_COURSE_MODAL_KEY = 'BUY_COURSE_MODAL_KEY';

export const restoreSample = {
    clock: modalsStore.closeModal,
    filter: ({keyModal}: keyModal) => keyModal === BUY_COURSE_MODAL_KEY
};

export interface PriceCourseProps {
    priceUsdt?: number,
}