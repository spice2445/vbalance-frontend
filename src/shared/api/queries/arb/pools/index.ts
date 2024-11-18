import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface equityPoolsArbCard {
    count_users: number,
    sum: number,
    sum_week: number,
    sum_month: number,
    conditions: number,
    percent: number,
    is_active: boolean
}
  
export interface equityPoolsArb {
    pool1: equityPoolsArbCard,
    pool2: equityPoolsArbCard,
    pool3: equityPoolsArbCard,
    pool4: equityPoolsArbCard,
    pool5: equityPoolsArbCard,
    pool6: equityPoolsArbCard,
}
  
  

export const pools = invoke(queryWrapper<void, equityPoolsArb>, {
    url: '/arb/pools',
    response: {
        contract: unknownContract, // contracts.arb.pools,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(pools.queryApi, { barrier: barriers.auth });