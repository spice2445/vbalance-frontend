import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

interface openLimitData {
    limit: number
}

export const limit = invoke(queryWrapper<void, openLimitData>, {
    url: '/index-token/check-limit?code=20',
    response: {
        contract: contracts.index.limit,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(limit.queryApi, { barrier: barriers.auth });