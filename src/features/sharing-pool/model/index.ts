import { invoke } from '@withease/factories';
import { numberInputFactory } from 'shared/lib/factories';

export const {
  $value: $vbt,
  fieldUpdated: handleChanged,
  incremented,
  decremented
} = invoke(numberInputFactory, { defaultValue: '' });
