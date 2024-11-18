import { createFactory, invoke } from '@withease/factories';
import { attach, createEvent, createStore, sample, split } from 'effector';
import { debounce } from 'patronum';
import { showToastFx } from 'shared/lib/toast';

const DEBOUNCE_TIMEOUT_IN_MS = 300;

interface createInputProps {
  defaultValue?: string;
  filter?: (clk: string) => boolean;
}

export const inputFactory = createFactory(({
  defaultValue,
  filter
}:createInputProps) => {
  const fieldUpdated = createEvent<string>();
  const debouncedValue = debounce(fieldUpdated, DEBOUNCE_TIMEOUT_IN_MS);

  const $value = createStore<string>(defaultValue ?? '');
  const $debouncedValue = createStore<string>(defaultValue ?? '');

  sample({
    clock: fieldUpdated,
    filter: filter ?? Boolean,
    target: $value
  });

  sample({
    clock: debouncedValue,
    target: $debouncedValue
  });

  return {
    $value,
    $debouncedValue,
    fieldUpdated,
    debouncedValue
  };
});

const numberInputFilter = (value: string) => +value.replace(/ /g, '') < 10_000_000;

export const numberInputFactory = createFactory(({
  defaultValue,
  filter
}: createInputProps) => {
  const filterCurrent = filter ?? numberInputFilter;

  const {
    $value,
    $debouncedValue,
    fieldUpdated,
    debouncedValue
  } = invoke(inputFactory, { defaultValue, filter:filterCurrent });

  const incremented = createEvent();
  const decremented = createEvent();

  const showError = attach({
    effect: showToastFx,
    mapParams: () => ({
      message: 'Слишком большое значение!',
      options: {
        type: 'error' as const
      }
    })
  });

  split({
    source: fieldUpdated,
    match: {
      succes: filterCurrent,
      error: (value) => !filterCurrent(value)
    },
    cases: {
      succes: $value,
      error: showError
    }
  });

  sample({
    clock: incremented,
    source: $value,
    fn: (value) => String(+value + 1),
    target: $value
  });

  sample({
    clock: decremented,
    source: $value,
    fn: (value) => String(+(value) === 1 ? 1 : +(value) - 1),
    target: $value
  });

  return {
    $value,
    $debouncedValue,
    fieldUpdated,
    debouncedValue,
    incremented,
    decremented
  };
});
