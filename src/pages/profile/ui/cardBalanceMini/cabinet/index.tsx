import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import { withdrawalUsdtProps } from 'features/withdrawal-usdt';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';

import { CardBalanceMini } from '../template';

import s from './style.module.scss';

export const Cabinet = () => {
  const { t } = useTranslation('');
  const balance = useUnit($balancesProfile);
  const setModal = useUnit(modalsStore.setModal);

  const openModalWithdrawUsdt = () => {
    setModal(withdrawalUsdtProps);
  };

  return (
    <CardBalanceMini
      variant='USDT'
      text='Баланс кабинета'
      variantIcon='balance'
      balance={balance.usdt}
      classNameAction={s.group_cabinet}
    >
      <Button icon={{
        size: 'xs',
        variant: 'deposit'
      }}
      >
        {t('Пополнить баланс')}
      </Button>
      <Button
        onClick={openModalWithdrawUsdt}
        icon={{
          size: 'xs',
          variant: 'withdraw'
        }}
      >
        {t('Вывести на кошелек')}
      </Button>
    </CardBalanceMini>
  );
};
