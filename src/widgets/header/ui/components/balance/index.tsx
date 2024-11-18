import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import { formatter} from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const Balance = () => {
  const balance = useUnit($balancesProfile);

  return (
    <Typography
      color='main'
      font='additional_bold'
      as='button'
      isLoading={!balance}
      className={s.balance}
      skeletonClass={s.skeleton_balance_usdt}
      icon={{
        variant: 'balance',
        size: 'm'
      }}
    >
      {formatter.number.defaultN(balance.usdt)}
    </Typography>
  );
};
