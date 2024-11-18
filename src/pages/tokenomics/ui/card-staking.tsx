import { Store } from 'effector';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { useLoadingMock } from 'shared/lib/lazy';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface VBTStakingProps {
  title: string;
  $depositVBT: Store<string>;
  $depositVBTInUSDT: Store<string>;
  $rateToken: Store<string>;
}

export const VBTStaking = ({
  title,
  $depositVBT,
  $depositVBTInUSDT,
  $rateToken
}: VBTStakingProps) => {
  const { t } = useTranslation();
  const [depositVBT, depositVBTInUSDT, rateToken] = useUnit([$depositVBT, $depositVBTInUSDT, $rateToken]);

  const isLoading = useLoadingMock();

  return (
    <Card
      title={{
        text: title,
        align: 'center'
      }}
      variant='center'
      className={s.vbt_card}
    >
      <Typography
        className={s.vbt_title}
        size='xs'
        color='acsent'
      >
        {t('Токенов в смарт-контракте')}
      </Typography>

      <Typography
        className={s.vbt_count}
        skeletonClass={s.vbt_count_loading}
        color='main'
        size='m'
        isLoading={isLoading}
      >
        {`${depositVBT} VBT`}
      </Typography>

      <Typography
        className={s.vbt_count}
        color='acsent'
        isTextLine
      >
        ≈
        <Typography
          color='acsent_dark'
          skeletonClass={s.vbtInUsdt_loading}
          isLoading={isLoading}
        >
          {depositVBTInUSDT}
        </Typography>
        USDT
      </Typography>

      <Typography
        className={s.token_rate}
        color='main'
        isTextLine
      >
        {t('Курс: ')}
        <Typography
          skeletonClass={s.token_rate_loading}
          color='main'
          isLoading={isLoading}
        >
          {rateToken}
        </Typography>

        {' '}
        USDT
      </Typography>

      <div
        className={s.input_token}
      >
        <Input
          theme='number'
          placeholder='Введите количество VBT'
          text={{
            align: 'center'
          }}
        />
      </div>

      <div className={s.actions}>
        <Button
          icon={{
            variant: 'withdraw',
            size: 'xs'
          }}
        >
          {t('Вывести USDT')}
        </Button>

        <Button
          theme='transparent'
          icon={{
            variant: 'withdraw',
            size: 'xs'
          }}
        >
          {t('Вывести на кошелек')}
        </Button>
      </div>
    </Card>
  );
};
