import { invoke } from '@withease/factories';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { loadingInViewFactory } from 'shared/lib/factories';
import { inputFactory, selectFactory } from 'shared/lib/factories';
import { delayGetMock } from 'shared/lib/lazy';

import { AUTO_PURCHASE_MOCK, REGULARITY_VARIANTS, autopurchaseVBTI } from '../config';
import { payments } from '../config';

export const infoBvalanceArb = createEvent();

export const autopurchaseProgram = invoke(selectFactory, {defaultValue: ''});
export const autopurchaseRegularity = invoke(selectFactory, {defaultValue: REGULARITY_VARIANTS.everyWeek});
export const autopurchasePayment = invoke(selectFactory, {defaultValue: payments[0]});

export const {
  $value: $inputUsdt,
  fieldUpdated: usdtInputUpdated,
  $debouncedValue: $debouncedUsdt
} = invoke(inputFactory, { 
  defaultValue: '', 
  filter: (clk: string) => +clk < 10_000_000
});

export const $perWeekAmount = createStore<string | null>(null);

sample({
  clock: $debouncedUsdt,
  fn: (value: string) => (
    (((+(value) ?? 0) / 100) * (20 / 4)).toFixed(2)
  ),
  target: $perWeekAmount
});


const getInfoCardFx = createEffect(async () => {
  await delayGetMock();

  return AUTO_PURCHASE_MOCK;
});

export const infoCard = invoke(loadingInViewFactory<void, autopurchaseVBTI>, {
  effect: getInfoCardFx
});

sample({
  clock: infoCard.$data,
  filter: Boolean,
  fn: (infoCard) => infoCard?.programs[0].keyT, 
  target: autopurchaseProgram.$select
});
