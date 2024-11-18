import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { modalsStore } from 'shared/lib/modal';
import { $theme } from 'shared/lib/theme';

import s from './style.module.scss';

export const ModalComponent = () => {
  const modalState = useUnit(modalsStore.$modals);
  const onCloseModal = useUnit(modalsStore.closeModal);
  const theme = useUnit($theme);

  return modalState.map((modal) => (
    <div
      key={modal.dataProps.keyModal}
      className={clsx(s.modalLayout, theme, {
        [s.opened]: modal.isOpen,
        [s.isClosing]: !modal.isOpen
      })}
    >
      <modal.ModalElement {...modal.dataProps} />
      <div
        className={s.modalDelete}
        onClick={() => onCloseModal({ keyModal: modal.dataProps.keyModal })}
      />
    </div>
  ));
};
