import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { loadingInViewFactory, scrlollingPaginationFactory } from 'shared/lib/factories';
import { getTableMockFn, getTableMockProps } from 'shared/lib/table';

import { DEPOSITS_ARB_MOCK } from '../../config';

const {
  $dataRanOut: $dataRanOutArb,
  $page: $tablePageArb,
  dataRanedOut: dataRanedOutArb,
  reachedEndOf: lreachedEndOfTableArb
} = invoke(scrlollingPaginationFactory);

type getTableFx = Pick<getTableMockProps, 'page'>;
const getTableArbFx = createEffect(({ page }: getTableFx) => getTableMockFn({
  page,
  dataRanedOut: dataRanedOutArb,
  mock: DEPOSITS_ARB_MOCK
}));

const {
  loaddedData: loaddedTableArb,
  $data: $tableArb
} = invoke(loadingInViewFactory<getTableFx, any[][]>, {
  effect: getTableArbFx,
  source: {
    page: $tablePageArb
  }
});

export const tableHistoryDepositsArb = {
  $dataRanOut: $dataRanOutArb,
  $table: $tableArb,
  loaddedTable: loaddedTableArb,
  reachedEndOfTable: lreachedEndOfTableArb
};

