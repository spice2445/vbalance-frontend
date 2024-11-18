import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle } from 'shared/ui/vbalance-title';

import { REGULARITY_VARIANTS, payments } from '../config';
import {
  autopurchaseProgram,
  autopurchaseRegularity,
  autopurchasePayment,
  infoBvalanceArb,
  $inputUsdt,
  usdtInputUpdated,
  $perWeekAmount,
  infoCard
} from '../model';

import s from './style.module.scss';

export const AutopurchaseVBTI = () => {
  const [inputUsdt, perWeekAmount, infoCardData] = useUnit([$inputUsdt, $perWeekAmount, infoCard.$data]);
  const [
    infoClicked,
    onUsdtInputUpdated
  ] = useUnit([infoBvalanceArb, usdtInputUpdated]);

  const { t } = useTranslation('');

  return (
    <Card
      infoClicked={infoClicked}
      className={s.card}
    >
      <LoaddedData loaddedData={infoCard.loaddedData} />
      <VbalanceTitle
        className={s.current_price_vbt}
        title='Index'
        size='l'
      />
      <Typography
        className={s.default_margin}
        size='m'
        color='main'
        isTextLine
      >
        {t('Текущая стоимость токена:')}
        <Typography
          color='acsent'
          size='m'
          isLoading={!infoCardData}
        >
          {formatter.number.defaultN(infoCardData?.currentPriceToken)}
        </Typography>
        <Typography
          color='acsent_dark'
          size='m'
        >
          USDT
        </Typography>
      </Typography>

      <Typography
        className={s.default_margin}
        size='m'
        icon={{
          variant: 'play',
          size: 'm'
        }}
      >
        {t('Настроить автопокупку VBTI')}
      </Typography>

      <Typography
        className={s.default_margin}
        color='main'
      >
        {t('Выберите программу для автопокупки:')}
        <Select
          options={infoCardData ? infoCardData?.programs.map(({keyT}) => keyT) : []}
          $chooseOption={autopurchaseProgram.$select}
          onChoosed={autopurchaseProgram.choosedSelect}
          isLoading={!infoCardData}
        />
      </Typography>

      <div
        className={s.tokens_balances}
      >
        <Typography
          isTextLine
          size='xl'
          color='main'
          isLoading={!infoCardData}
        >
          {formatter.number.defaultN(infoCardData?.tokens.vbti)}
          <Typography
            size='xl'
            color='acsent'
          >
            VBTI
          </Typography>
        </Typography>

        <Typography
          size='m'
          color='main'
        >
          /
        </Typography>

        <Typography
          isTextLine
          size='m'
          color='main'
          isLoading={!infoCardData}
        >
          {formatter.number.defaultN(infoCardData?.tokens.usdt)}
          <Typography
            size='m'
            color='acsent'
          >
            USDT
          </Typography>
        </Typography>
      </div>

      <Typography
        className={s.open_limit}
      >
        <Typography
          className={s.open_limit_text}
          color='main'
          isTextLine
        >
          {t('Открытый лимит:')}
          <Typography
            color='acsent'
            skeletonClass={s.open_limit_skeleton}
            isLoading={!infoCardData}
          >
            {formatter.number.defaultN(infoCardData?.openLimit)}
          </Typography>
        </Typography>

        <Button
          className={s.increment_limit}
          icon={{
            variant: 'plus',
            size: 'xs'
          }}
        >
          {t('Увеличить')}
        </Button>
      </Typography>

      <Typography
        className={clsx(s.default_margin, s.regularity)}
        color='main'
      >
        {t('Регулярность автопокупки:')}
        <Select
          options={Object.values(REGULARITY_VARIANTS)}
          $chooseOption={autopurchaseRegularity.$select}
          onChoosed={autopurchaseRegularity.choosedSelect}
        />
      </Typography>

      <div
        className={clsx(s.input_conatiner, s.default_margin)}
      >
        <Input
          theme='number'
          type='number'
          value={inputUsdt}
          placeholder='-'
          onValue={onUsdtInputUpdated}
          classNames={{
            body: s.input_size
          }}
          label={{
            before: {
              text: 'Сумма автопокупки:',
              font: 'additional',
              color: 'acsent_dark'
            },
            after: {
              text: 'USDT',
              font: 'additional_bold',
              color: 'acsent_dark'
            }
          }}
          text={{
            font: 'additional_bold',
            color: 'acsent_dark',
            size: 's',
            align: 'left'
          }}
          isIncreasing
          isHideButtons
        />

        <Typography
          className={s.vbti_in_week}
          color='main'
        >
          {t('Токенов в неделю: ')}
          <Typography color='acsent'>
            {`${formatter.number.defaultN(perWeekAmount) ?? '-'} VBTI`}
          </Typography>
        </Typography>
      </div>

      <Typography
        className={s.choose_payment_title}
        color='acsent_dark'
      >
        {t('Выберите способ оплаты:')}
      </Typography>

      <div className={s.choose_payment}>
        <Select
          options={payments}
          $chooseOption={autopurchasePayment.$select}
          onChoosed={autopurchasePayment.choosedSelect}
        />

        <Button
          className={s.create_deposit}
          icon={{
            variant: 'deposit',
            size: 'xs'
          }}
        >
          {t('Создать депозит')}
        </Button>
      </div>
    </Card>
  );
};
