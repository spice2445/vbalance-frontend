import { invoke } from '@withease/factories';
import { combine, createEvent, createStore, sample } from 'effector';
import { $balancesProfile } from 'entities/user';
import { numberInputFactory, inputFactory, createSteps } from 'shared/lib/factories';
import { selectFactory } from 'shared/lib/factories';
import { modalsStore } from 'shared/lib/modal';

import { WITHDRAWAL_USDT_MODAL_KEY, restoreSample } from '../../config';

export const {
  $value: $usdt,
  fieldUpdated: handleChangedUsdt
} = invoke(numberInputFactory, {});
export const selectedFullBalance = createEvent();

sample({
  clock: selectedFullBalance,
  source: $balancesProfile,
  fn: (balances) => balances.usdt?.toString() ?? '0',
  target: handleChangedUsdt
});

export const $conditionSecondStep = combine(
  {input: $usdt, balancesProfile: $balancesProfile}, 
  ({input, balancesProfile}) => +input >= 50 && +input <= +(balancesProfile?.usdt ?? '0')
);

export const {
  $value: $addressTrc20,
  fieldUpdated: handleChangedAddress
} = invoke(inputFactory, {});
export const $prevAddress = createStore<string | null>('THCXwmUjeWosGcXRR2nasCQNG8VwWoSzR7');
export const selectedPrevAddress = createEvent();

sample({
  clock: selectedPrevAddress,
  source: $prevAddress,
  fn: (prevAddress) => prevAddress ?? '',
  target: handleChangedAddress
});

export const $conditionThirdStep = combine({input: $addressTrc20}, ({input}) => input.length === 34 );

// select
export const options = [
  'Кошелёк USDT TRC-20',
  'Кошелёк USDT BEP-20'
];

export const {
  choosedSelect: choosedOption,
  $select: $chooseOption
} = invoke(selectFactory, {defaultValue: options[0]});

export const cannceledRequest = createEvent();

sample({
  clock: cannceledRequest,
  fn: () => ({keyModal: WITHDRAWAL_USDT_MODAL_KEY}),
  target: modalsStore.closeModal
});

sample({
  ...restoreSample,
  target: [$usdt.reinit, $addressTrc20.reinit, $chooseOption.reinit]
});

export const {
  $activeStep: $activeStepWithdrawUSDT,
  settedActiveStep: settedActiveStepWithdrawUSDT
} = invoke(createSteps, {
  keyModal: WITHDRAWAL_USDT_MODAL_KEY,
  reinittedSteps: cannceledRequest
});
