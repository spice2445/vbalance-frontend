import { createFactory } from '@withease/factories';
import { createEvent, createStore, sample } from 'effector';

export const scrlollingPaginationFactory = createFactory(() => {
  const $page = createStore<number>(0);
  const $dataRanOut = createStore<boolean>(false);

  const reachedEndOf = createEvent();
  const dataRanedOut = createEvent();

  sample({
    clock: reachedEndOf,
    source: { page: $page, dataRanOut: $dataRanOut },
    filter: ({ dataRanOut }) => !dataRanOut,
    fn: ({ page }) => ++page,
    target: $page
  });

  sample({
    clock: dataRanedOut,
    fn: () => true,
    target: $dataRanOut
  });

  return {
    $page,
    $dataRanOut,
    reachedEndOf,
    dataRanedOut
  };
});
