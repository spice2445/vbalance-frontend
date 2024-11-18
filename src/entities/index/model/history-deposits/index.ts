
import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { loadingInViewFactory, scrlollingPaginationFactory } from 'shared/lib/factories';
import { getTableMockFn, getTableMockProps } from 'shared/lib/table';

import { DEPOSITS_INDEX_MOCK } from '../../config';

const {
  $dataRanOut: $dataRanOutIndex,
  $page: $tablePageIndex,
  dataRanedOut: dataRanedOutIndex,
  reachedEndOf: reachedEndOfTableIndex
} = invoke(scrlollingPaginationFactory);


type getTableFx = Pick<getTableMockProps, 'page'>;
const getTableIndexFx = createEffect(({ page }: getTableFx) => getTableMockFn({
  page,
  dataRanedOut: dataRanedOutIndex,
  mock: DEPOSITS_INDEX_MOCK
}));

const {
  loaddedData: loaddedTableIndex,
  $data: $tableIndex
} = invoke(loadingInViewFactory<getTableFx, any[][]>, {
  effect: getTableIndexFx,
  source: {
    page: $tablePageIndex
  }
});

export const tableHistoryDepositsIndex = {
  $dataRanOut: $dataRanOutIndex,
  $table: $tableIndex,
  loaddedTable: loaddedTableIndex,
  reachedEndOfTable: reachedEndOfTableIndex
};
