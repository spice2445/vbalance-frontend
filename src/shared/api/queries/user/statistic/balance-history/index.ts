
import { applyBarrier, unknownContract } from '@farfetched/core';
import { createFactory, invoke } from '@withease/factories';
import { StoreWritable, EventCallable, createStore, sample } from 'effector';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { baseUrl } from 'shared/lib/base-url';
import { queryWrapper } from 'shared/lib/factories';
import { formatter } from 'shared/lib/formatter';
import { TableContentProps } from 'shared/ui/table';

import { me as $me } from '../../me';

export interface balanceHistory {
    id: number,
    user_id: number,
    user_login: string | null,
    user_name: string | null,
    user_avatar: string | null,
    user_line: number,
    sum: number,
    date: number,
    type: string,
    data: {
        balance: number,
        append_sum: number
    } | null
}

interface balanceHistoryApiProps {
    reachedEndOfTable: EventCallable<void>,
    dataRanedOut: EventCallable<void>,
    $dataRanOut: StoreWritable<boolean>
}

interface balanceHistoryApiData {
    data: balanceHistory[],
    pagination: {
        next_from: number | null,
        count: number
    }
}

export const balanceHistory = createFactory(({
    reachedEndOfTable,
    dataRanedOut,
    $dataRanOut
}: balanceHistoryApiProps) => {
    const $table = createStore<TableContentProps>([[]]);
    const $nextFrom = createStore<number>(0);

    const balanceHistoryQuery = invoke(queryWrapper<void, balanceHistoryApiData>, {
        source: {
            me: $me.$data,
            from: $nextFrom
        },
        url: ({me, from}: any) => baseUrl(`/user/${me?.id}/statistic/balance-history?limit=10&from=${from}`),
        response: {
            contract: unknownContract // contracts.user.statistic.balanceHistory,
        }
    });

    sample({
        clock: reachedEndOfTable,
        source: $dataRanOut,
        filter: (dataRanOut) => !dataRanOut,
        target: balanceHistoryQuery.loaddedData
    });

    sample({
        clock: balanceHistoryQuery.queryApi.$data,
        source: $table,
        fn: (table, newData) => 
            ([...table, ...((newData?.data?.map(formatter.table.statistic.balanceHistory)) as TableContentProps)]),
        target: $table
    });

    sample({
        clock: balanceHistoryQuery.queryApi.$data,
        fn: (pagination) => pagination?.pagination.next_from ?? 0,
        target: $nextFrom
    });

    sample({
        clock: balanceHistoryQuery.queryApi.$data,
        filter: (data) => data?.data?.length === 0,
        target: dataRanedOut
    });

    applyBarrier(balanceHistoryQuery.queryApi, { barrier: barriers.auth });

    return {
        $table,
        loaddedData: balanceHistoryQuery.loaddedData
    };
});

