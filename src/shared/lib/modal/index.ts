import { createFactory, invoke } from '@withease/factories';
import { createEvent, createStore, sample } from 'effector';

import type { ModalI, keyModal } from './index.type';

const modalsState = createFactory(() => {
  const setModal = createEvent<ModalI>();
  const closeModal = createEvent<keyModal>();

  const $modals = createStore<ModalI[]>([]);

  $modals.on(closeModal, (modals, { keyModal }) => (
    modals.map((modal) => ({ ...modal, isOpen: modal.dataProps.keyModal === keyModal ? !modal.isOpen : modal.isOpen }))
  ));

  sample({
    clock: setModal,
    source: { modals: $modals },
    fn: ({ modals }:{modals: ModalI[]}, newModal: ModalI) => {
      const oldModals = [...modals];
      const modalIndex = oldModals.findIndex((modal) => modal.dataProps.keyModal === newModal.dataProps.keyModal);

      if (modalIndex === -1) {
        return [...oldModals, newModal];
      }

      return oldModals.map((modal, index) => (index === modalIndex ? { ...newModal, isOpen: !modal.isOpen } : modal));
    },
    target: $modals
  });

  return { setModal, closeModal, $modals };
});

export const modalsStore = invoke(modalsState);

export { keyModal, ModalI };
