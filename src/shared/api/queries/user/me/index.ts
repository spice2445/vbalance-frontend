import { applyBarrier, createJsonQuery, unknownContract } from '@farfetched/core';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { baseUrl } from 'shared/lib/base-url';

export const me = createJsonQuery({
    request: {
        method: 'GET',
        url: baseUrl('/user/me'),
        credentials: 'include'
    },
    response: {
        contract: unknownContract, // contracts.user.me,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(me, { barrier: barriers.auth });

