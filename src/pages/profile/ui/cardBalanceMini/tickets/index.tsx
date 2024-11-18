import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import {
  decremented, incremented, $isTicketsEnough, $tickets, handleChanged,
  ticketsModalProps, TICKETS_MODAL_KEY
} from 'features/buy-tickets';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import { CardBalanceMini } from '../template';

import s from './style.module.scss';

export const Tickets = () => {
  const { t } = useTranslation('');
  const [
    increment,
    decrement,
    onHandleChanged
  ] = useUnit([incremented, decremented, handleChanged]);
  const [tickets, isTicketsEnough, balance] = useUnit([$tickets, $isTicketsEnough, $balancesProfile]);
  const [onSetModal] = useUnit([modalsStore.setModal]);
  const modalProps = {
    ...ticketsModalProps,
    dataProps: {
      keyModal: TICKETS_MODAL_KEY,
      modalStep: 2
    }
  };
  return (
    <CardBalanceMini
      variant='Tickets'
      text={t('Баланс тикетов')}
      variantIcon='ticket'
      balance={balance.ticklets ?? 0}
      classNameAction={s.group_tickets}
    >
      <div className={s.tickets_input}>
        <Input
          theme='number'
          value={tickets}
          increment={increment}
          decrement={decrement}
          onValue={onHandleChanged}
          classNames={{
            input: s.input
          }}
          label={{
            before: {
              text: 'Количество тикетов:',
              font: 'additional',
              color: 'main'
            }
          }}
        />
      </div>

      <Button
        icon={{
          size: 'xs',
          variant: 'deposit'
        }}
        disabled={!isTicketsEnough}
        onClick={() => onSetModal(modalProps)}
        className={s.tickets_button}
      >
        {t('Перейти к оплате тикетов')}
      </Button>
    </CardBalanceMini>
  );
};
