import { invoke } from '@withease/factories';
import { createStore, sample } from 'effector';
import { createSteps, numberInputFactory } from 'shared/lib/factories';
import { selectFactory } from 'shared/lib/factories';

import { restoreSample, TICKETS_MODAL_KEY } from '../../config';

export const {
  $activeStep: $activeStepBuyTickets,
  settedActiveStep: settedActiveStepBuyTickets
} = invoke(createSteps, {
  defaultValue: 1,
  keyModal: TICKETS_MODAL_KEY
});

export const {
  $value: $tickets,
  fieldUpdated: handleChanged,
  incremented,
  decremented
} = invoke(numberInputFactory, { defaultValue: '1' });

export const $amountUSDT = createStore(10);
export const $isTicketsEnough = createStore(true);

sample({
  clock: $tickets,
  fn: (tickets) => Number(tickets) > 0,
  target: $isTicketsEnough
});

sample({
  clock: $tickets,
  source: $tickets,
  fn: (value) => Number(value) * 10,
  target: $amountUSDT
});

// select
export const options = [
  'Перевод USDT TRC-20'
];

export const {
  choosedSelect: choosedOption,
  $select: $chooseOption
} = invoke(selectFactory, {defaultValue: options[0]});

sample({
  ...restoreSample,
  target: $tickets.reinit
});