import { applyBarrier, declareParams } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { baseUrl } from 'shared/lib/base-url';
import { queryWrapper } from 'shared/lib/factories';

// export const lineage = createJsonQuery({
//     params: declareParams<{ userId: number }>(),
//     request: {
//         method: 'GET',
//         url: ({ userId }) => baseUrl(`/user/${userId}/statistic/users-first-level`),
//         credentials: 'include'
//     },
//     response: {
//         contract: contracts.user.lineage,
//         mapData: ({ result }) => result.data
//     }
// });

export interface LineageUser {
    id?: number,
    login?: string,
    status?: string,
    firstLineCount: number,
    organizationCount: number
}

export interface LineageData {
    data: LineageUser[],
    withHierarchyCount: number,
    count: number
}

interface lineageProps {
    userId: number,
    lineageY?: number,
}

export const lineage = invoke(queryWrapper<lineageProps, LineageData>, {
    params: declareParams<lineageProps>(),
    url: ({ userId }: any) => baseUrl(`/user/${userId}/statistic/users-first-level`),
    response: {
        contract: contracts.user.lineage
    }
});

applyBarrier(lineage.queryApi, { barrier: barriers.auth });

