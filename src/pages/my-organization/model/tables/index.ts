import { invoke } from '@withease/factories';
import { api } from 'shared/api';
import { scrlollingPaginationFactory } from 'shared/lib/factories';


const {
  $dataRanOut: $dataRanOutUsers,
  $page: $tablePageUsers,
  dataRanedOut: dataRanedOutUsers,
  reachedEndOf: reachedEndOfTableUsers
} = invoke(scrlollingPaginationFactory);

// type getTableUsersPropsFx = Pick<getTableMockProps, 'page'>;
// const getTableUsersFx = createEffect(({ page }: getTableUsersPropsFx) => getTableMockFn({
//   page,
//   dataRanedOut: dataRanedOutUsers,
//   mock: UsersTableMock
// }));

// const {
//   loaddedData: loaddedTableUsers,
//   $data: $tableUsers
// } = invoke(loadingInViewFactory<getTableUsersPropsFx, any[][]>, {
//   effect: getTableUsersFx,
//   source: {
//     page: $tablePageUsers
//   }
// });

const {
  loaddedData: loaddedTableUsers,
  $table: $tableUsers
} = invoke(api.queries.user.statistic.usersList, {
  $page: $tablePageUsers,
  $dataRanOut: $dataRanOutUsers,
  reachedEndOf: reachedEndOfTableUsers,
  dataRanedOut: dataRanedOutUsers
});

export const userTable = {
  $dataRanOut: $dataRanOutUsers,
  $table: $tableUsers,
  loaddedTable: loaddedTableUsers,
  reachedEndOfTable: reachedEndOfTableUsers
};
