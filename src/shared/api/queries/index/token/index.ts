import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface YourProgammsVbtiStatistic {
    buy: {
        vbti: number | string,
        usdt: number | string,
        average: number | string,
    },
    sell: {
        vbti: number | string,
        usdt: number | string,
        average: number | string,
    }
}

export interface YourProgammsVbti {
    balance: {
        usdt: number,
        vbti: number
    },
    statistic: YourProgammsVbtiStatistic
}

export const token = invoke(queryWrapper<void, YourProgammsVbti>, {
    url: '/index-token/?code=20',
    response: {
        contract: contracts.index.token,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(token.queryApi, { barrier: barriers.auth });