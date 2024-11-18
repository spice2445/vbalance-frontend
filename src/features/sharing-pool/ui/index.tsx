import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { useLoadingMock } from 'shared/lib/lazy';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import {
  $vbt, decremented, handleChanged, incremented
} from '../model';

import s from './style.module.scss';

const countShares = 100;
const deposit = 10_000_000;
const depositUsdt = 4_600_000.23;
const availableWithdrawalUsdt = 0;
const rateToken = 0.46;

export const SharingPool = () => {
  const { t } = useTranslation();
  const [increment, decrement, onHandleChanged] = useUnit([incremented, decremented, handleChanged]);
  const [vbt] = useUnit([$vbt]);
  const isLoading = useLoadingMock();

  return (
    <Card
      variant='base'
      className={s.card}
      title={{
        text: 'VBT PROFIT SHARING POOL'
      }}
    >
      <Typography
        className={s.count_shares}
        color='main'
        size='xs'
      >
        {t('Количество ваших долей: ')}
        <Typography
          size='xs'
          skeletonClass={s.count_shares_loading}
          isLoading={isLoading}
        >
          {formatter.number.defaultN(countShares)}
        </Typography>
      </Typography>

      <Typography
        color='acsent'
        size='l'
        className={s.deposit}
      >
        {t('Внесено:')}
        <Typography
          color='main'
          size='l'
          skeletonClass={s.deposit_loading}
          isLoading={isLoading}
        >
          {`${formatter.number.defaultN(deposit)} VBT`}
        </Typography>
      </Typography>

      <div className={s.deposit_inUsdt}>
        <Typography
          isLoading={isLoading}
          skeletonClass={s.deposit_inUsdt_loading}
        >
          ≈
          {formatter.number.defaultN(depositUsdt)}
          <Typography color='acsent'>
            USDT
          </Typography>
        </Typography>

        <Typography>
          {t('Доступно к выводу: ')}
          <Typography
            isLoading={isLoading}
            skeletonClass={s.deposit_inUsdt_loading}
          >
            {formatter.number.defaultN(availableWithdrawalUsdt)}
          </Typography>
          {' '}
          USDT
        </Typography>
      </div>

      <div className={s.token_rate}>
        <Typography color='main'>
          {t('Курс: ')}
          <Typography
            skeletonClass={s.token_rate_loading}
            isLoading={isLoading}
          >
            {formatter.number.defaultN(rateToken)}
          </Typography>
          {' '}
          USDT
        </Typography>
      </div>

      <div className={s.input_vbt}>
        <Input
          theme='number'
          type='number'
          value={vbt}
          increment={increment}
          decrement={decrement}
          onValue={onHandleChanged}
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
          icon={{
            variant: 'deposit',
            size: 'xs'
          }}
        >
          {t('Внести VBT')}
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

        <Button
          theme='transparent'
          icon={{
            variant: 'close',
            size: 'xs'
          }}
        >
          {t('Закрыть счёт, вывести всё')}
        </Button>
      </div>
    </Card>
  );
};
