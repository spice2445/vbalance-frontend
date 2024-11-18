import { invoke } from '@withease/factories';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { loadingInViewFactory } from 'shared/lib/factories';
import { numberInputFactory } from 'shared/lib/factories';
import { selectFactory } from 'shared/lib/factories';
import { delayGetMock } from 'shared/lib/lazy';

import { ARBITRAGE_CARD_MOCK, abritrageCardI, payments, variantsDeposit } from '../config';

export const infoBvalanceArb = createEvent();

export const chooseDepositVarint = createEvent<number>();
export const $choosedDeposit = createStore<number>(0);
$choosedDeposit.on(chooseDepositVarint, (_, id) => id);

export const payment = invoke(selectFactory, {defaultValue: payments[0]});

export const {
  $value: $inputUsdt,
  $debouncedValue: $debouncedUsdt,
  fieldUpdated: usdtInputUpdated
} = invoke(numberInputFactory, { defaultValue: '' });

export const $perWeekAmount = createStore<string | null>(null);

sample({
  clock: [$debouncedUsdt, $choosedDeposit],
  source: [$debouncedUsdt, $choosedDeposit],
  // @ts-ignore
  fn: ([value, indexDeposit]: [string, number]) => (
    (((+(value) ?? 0) / 100) * (Number(variantsDeposit[indexDeposit].monthlyInterest) / 4)).toFixed(2)
  ),
  target: $perWeekAmount
});

const getInfoCardFx = createEffect(async () => {
  await delayGetMock();

  return ARBITRAGE_CARD_MOCK;
});

export const infoCard = invoke(loadingInViewFactory<void, abritrageCardI>, {
  effect: getInfoCardFx
});
