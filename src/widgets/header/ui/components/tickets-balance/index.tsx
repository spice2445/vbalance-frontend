import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import { ticketsModalProps, TICKETS_MODAL_KEY } from 'features/buy-tickets';
import { formatter} from 'shared/lib/formatter';
import { ModalI, modalsStore } from 'shared/lib/modal';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const TicketsBalance = () => {
  const onSetModal = useUnit(modalsStore.setModal);
  const balance = useUnit($balancesProfile);
  const modalProps: ModalI = {
    ...ticketsModalProps,
    dataProps: {
      keyModal: TICKETS_MODAL_KEY,
      modalStep: 1
    }
  };

  return (
    <Typography
      color='main'
      font='additional_bold'
      onClick={() => onSetModal(modalProps)}
      isLoading={!balance}
      className={s.balance_tickets}
      skeletonClass={s.skeleton_balance_tickets}
      icon={{
        variant: 'ticket',
        size: 'm'
      }}
    >
      {formatter.number.defaultN(balance.ticklets)}
      <Icon
        size='xs3'
        variant='plus'
      />
    </Typography>
  );
};
