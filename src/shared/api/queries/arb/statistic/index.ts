import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface StatisticArb {
    sum_deposits: number,
    sum_week: number,
    sum_pools: number
}

export const statistic = invoke(queryWrapper<void, StatisticArb>, {
    url: '/arb/statistic',
    response: {
        contract: contracts.arb.statistic,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(statistic.queryApi, { barrier: barriers.auth });