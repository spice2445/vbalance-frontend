import { applyBarrier, unknownContract } from '@farfetched/core';
import { createFactory, invoke } from '@withease/factories';
import { StoreWritable, EventCallable, sample, createStore } from 'effector';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { baseUrl } from 'shared/lib/base-url';
import { queryWrapper } from 'shared/lib/factories';
import { formatter } from 'shared/lib/formatter';
import { statusIdsI } from 'shared/types/user-statuses';
import { TableContentProps } from 'shared/ui/table';

import { me as $me } from '../../me';

export interface usersListI {
    id: number,
    login: string,
    name: string,
    avatar: null | string,
    status: statusIdsI,
    line: number,
    firstLineCount: number,
    organizationCount: number,
    organizationTotalSailSum: number
}

interface usersListApiProps {
    $page: StoreWritable<number>
    $dataRanOut: StoreWritable<boolean>
    reachedEndOf: EventCallable<void>
    dataRanedOut: EventCallable<void>
}

interface usersListApiData {
    data: usersListI[]
}

export const usersList = createFactory(({
    $page,
    $dataRanOut,
    reachedEndOf,
    dataRanedOut
}: usersListApiProps) => {
    const $table = createStore<TableContentProps>([[]]);

    const usersListQuery = invoke(queryWrapper<void, TableContentProps>, {
        source: {
            me: $me.$data,
            page: $page
        },
        url: ({me, page}: any) => baseUrl(`/user/${me?.id}/statistic/users-list?limit=10&offset=${page * 10}`),
        response: {
            contract: unknownContract, // contracts.user.statistic.usersList,
            mapData: ({ result }) => (result as usersListApiData).data.map(formatter.table.statistic.usersList)
        }
    });
    
    sample({
        clock: reachedEndOf,
        source: $dataRanOut,
        filter: (dataRanOut) => !dataRanOut,
        target: usersListQuery.loaddedData
    });

    sample({
        clock: usersListQuery.queryApi.$data,
        source: $table,
        fn: (table, newData) => 
            ([...table, ...((newData) as TableContentProps)]),
        target: $table
    });

    sample({
        clock: usersListQuery.queryApi.$data,
        filter: (data) => data?.length === 0,
        target: dataRanedOut
    });

    applyBarrier(usersListQuery.queryApi, { barrier: barriers.auth });

    return {
        $table,
        loaddedData: usersListQuery.loaddedData
    }; 
});

