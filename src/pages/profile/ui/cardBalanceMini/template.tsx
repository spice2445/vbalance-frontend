import { ReactNode } from 'react';
import { formatter} from 'shared/lib/formatter';
import { Card, CardTitle } from 'shared/ui/card';
import { Typography } from 'shared/ui/typography';

import s from './template.module.scss';

interface CardBalanceMiniProps extends Omit<CardTitle, 'align'> {
  variant: 'USDT' | 'Tickets',
  balance: number | undefined;
  children: ReactNode;
  classNameAction: string;
}

export const CardBalanceMini = ({
  variant,
  text,
  variantIcon,
  balance,
  children,
  classNameAction
}: CardBalanceMiniProps) => {

  return (
    <Card
      title={{
        text,
        variantIcon,
        align: 'center'
      }}
      variant='center'
      className={s.card_mini}
    >
      <Typography
        className={s.textBalance}
        skeletonClass={s.textBalanceSkeleton}
        color='main'
        size='l'
        isLoading={typeof balance === 'undefined'}
      >
        {formatter.number.defaultN(balance)}
      </Typography>
      <Typography>{variant}</Typography>

      <div className={classNameAction}>
        {children}
      </div>
    </Card>
  );
};
