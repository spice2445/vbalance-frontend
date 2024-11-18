import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface countEquityPoolsArbColumn {
    sum: number;
    percent: number;
    sum_all: number;
}

export interface countEquityPoolsArb {
    personal_investment: countEquityPoolsArbColumn,
    investment_first_line: countEquityPoolsArbColumn,
    investment_other_line: countEquityPoolsArbColumn,
}

export const calculationPools = invoke(queryWrapper<void, countEquityPoolsArb>, {
    url: '/arb/calculation-pools',
    response: {
        contract: contracts.arb.calculationPools,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(calculationPools.queryApi, { barrier: barriers.auth });