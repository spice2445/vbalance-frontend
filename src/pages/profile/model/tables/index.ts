import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { debug } from 'patronum';
import { api } from 'shared/api';
import { loadingInViewFactory, scrlollingPaginationFactory } from 'shared/lib/factories';
import { getTableMockFn, getTableMockProps } from 'shared/lib/table';

import { historyTickets, historyTokens } from '../../config';

// scrlollingPaginationFactory
const {
  $dataRanOut: $dataRanOutCabinet,
  dataRanedOut: dataRanedOutCabinet,
  reachedEndOf: reachedEndOfTableCabinet
} = invoke(scrlollingPaginationFactory);

const {
  $dataRanOut: $dataRanOutTickets,
  $page: $tablePageTickets,
  dataRanedOut: dataRanedOutTickets,
  reachedEndOf: reachedEndOfTableTickets
} = invoke(scrlollingPaginationFactory);

const {
  $dataRanOut: $dataRanOutTokens,
  $page: $tablePageTokens,
  dataRanedOut: dataRanedOutTokens,
  reachedEndOf: reachedEndOfTableTokens
} = invoke(scrlollingPaginationFactory);

  // getTableFx
type getTableFx = Pick<getTableMockProps, 'page'>;

// const getTableCabinetFx = createEffect(({ page }: getTableFx) => getTableMockFn({
//   page,
//   dataRanedOut: dataRanedOutCabinet,
//   mock: historyCabinet
// }));

const getTableTicketsFx = createEffect(({ page }: getTableFx) => getTableMockFn({
  page,
  dataRanedOut: dataRanedOutTickets,
  mock: historyTickets
}));

const getTableTokensFx = createEffect(({ page }: getTableFx) => getTableMockFn({
  page,
  dataRanedOut: dataRanedOutTokens,
  mock: historyTokens
}));
//

// loadingInViewFactory
// const {
//   loaddedData: loaddedTableCabinet,
//   $data: $tableCabinet
// } = invoke(loadingInViewFactory<getTableFx, any[][]>, {
//   effect: getTableCabinetFx,
//   source: {
//     page: $tablePageCabinet
//   }
// });

const {
  loaddedData: loaddedTableTokens,
  $data: $tableTickets
} = invoke(loadingInViewFactory<getTableFx, any[][]>, {
  effect: getTableTokensFx,
  source: {
    page: $tablePageTokens
  }
});

const {
  loaddedData: loaddedTableTickets,
  $data: $tableTokens
} = invoke(loadingInViewFactory<getTableFx, any[][]>, {
  effect: getTableTicketsFx,
  source: {
    page: $tablePageTickets
  }
});
  //

// const {
//   loaddedData: loaddedTableCabinet,
//   $data: $tableCabinet
// } = invoke(loadingInViewFactory<getTableFx, any[][]>, {
//   effect: getTableCabinetFx,
//   source: {
//     page: $tablePageCabinet
//   }
// });

debug(reachedEndOfTableCabinet);
const {
  loaddedData: loaddedTableCabinet,
  $table: $tableTokensCabinet
} = invoke(api.queries.user.statistic.balanceHistory, {
  reachedEndOfTable: reachedEndOfTableCabinet,
  dataRanedOut: dataRanedOutCabinet,
  $dataRanOut: $dataRanOutCabinet
});

// obj tables
export const tableCabinet = {
  $dataRanOut: $dataRanOutCabinet,
  $table: $tableTokensCabinet,
  loaddedTable: loaddedTableCabinet,
  reachedEndOfTable: reachedEndOfTableCabinet
};

export const tableTickets = {
  $dataRanOut: $dataRanOutTickets,
  $table: $tableTickets,
  loaddedTable: loaddedTableTickets,
  reachedEndOfTable: reachedEndOfTableTickets
};

export const tableTokens = {
  $dataRanOut: $dataRanOutTokens,
  $table: $tableTokens,
  loaddedTable: loaddedTableTokens,
  reachedEndOfTable: reachedEndOfTableTokens
};
  //
