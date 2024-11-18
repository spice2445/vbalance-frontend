import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Checkbox } from 'shared/ui/checkbox';
import { Input } from 'shared/ui/input';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle } from 'shared/ui/vbalance-title';

import { variantsDeposit, payments } from '../config';
import {
  payment,
  $choosedDeposit,
  chooseDepositVarint,
  infoBvalanceArb,
  $inputUsdt,
  usdtInputUpdated,
  $perWeekAmount,
  infoCard
} from '../model';

import s from './style.module.scss';

export const ArbitrageDeposit = () => {
  const [infoCardData, choosedDeposit, inputUsdt, perWeekAmount] = useUnit([infoCard.$data, $choosedDeposit, $inputUsdt, $perWeekAmount]);
  const [
    infoClicked,
    onChooseDeposit,
    onUsdtInputUpdated
  ] = useUnit([infoBvalanceArb, chooseDepositVarint, usdtInputUpdated]);
  const { t } = useTranslation('');

  return (
    <Card
      infoClicked={infoClicked}
      className={s.arb_card}
    >
      <LoaddedData loaddedData={infoCard.loaddedData}  />

      <VbalanceTitle
        title='Arb'
        size='l'
      />

      <Typography
        className={s.commom_count_deposits}
        size='m'
        color='main'
        isTextLine
      >
        {t('Общая сумма депозитов:')}
        <Typography
          color='acsent'
          size='m'
          isLoading={!infoCardData}
        >
          {formatter.number.defaultN(infoCardData?.fullCountDeposits)}
        </Typography>
        <Typography
          color='acsent_dark'
          size='m'
        >
          USDT
        </Typography>
      </Typography>

      <div
        className={s.open_limit_container}
      >
        <Typography
          color='main'
          className={s.text_info}
        >
          {t('Открытый лимит: ')}
          <Typography 
            color='acsent'
            isLoading={!infoCardData}
            skeletonClass={s.openLimit_skeleton}
          >
            {`${formatter.number.defaultN(infoCardData?.openLimit)} USDT`}
          </Typography>
        </Typography>

        <Button
          theme='primary'
          className={s.increment}
          icon={{
            variant: 'plus',
            size: 'xs'
          }}
        >
          {t('Увеличить')}
        </Button>
      </div>

      <Typography
        className={s.title_create_new_deposit}
        color='acsent_dark'
        size='m'
        icon={{
          variant: 'money',
          fill: 'green',
          size: 'm'
        }}
      >
        {t('Создать новый депозит')}
      </Typography>

      <div className={s.create_new_deposit}>
        {variantsDeposit.map((deposit, index) => (
          <Card
            variant='center'
            className={clsx(s.deposit, { [s.depositChoose]: index === choosedDeposit })}
            onClick={() => onChooseDeposit(index)}
            key={deposit.monthCount}
          >
            <Typography
              color='acsent_dark'
              size='xl'
            >
              {`${formatter.number.defaultN(deposit.monthlyInterest)}%`}
            </Typography>

            <Typography
              color='main'
              font='additional'
              size='xs'
            >
              {t('Ежемесячно')}
            </Typography>

            <Typography
              className={s.monthCount}
              color='main'
              font='additional_bold'
              size='s'
            >
              {`${formatter.number.defaultN(deposit.monthCount)} ${t('месяца')}`}
            </Typography>

            <Checkbox
              classNames={{
                checkbox: s.checkBoxChoosed
              }}
              isChoose={index === choosedDeposit}
            />
          </Card>
        ))}
      </div>

      <div className={s.input_usdt_conatiner}>
        <Input
          type='number'
          theme='number'
          value={inputUsdt}
          placeholder='-'
          onValue={onUsdtInputUpdated}
          classNames={{
            body: s.input_size
          }}
          label={{
            before: {
              text: 'Сумма депозита: ',
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
          className={s.usdt_in_week}
          color='main'
        >
          {t('Начисления в неделю: ')}
          <Typography color='acsent'>
            {`${formatter.number.defaultN(perWeekAmount) ?? '-'} USDT`}
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
          $chooseOption={payment.$select}
          onChoosed={payment.choosedSelect}
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
