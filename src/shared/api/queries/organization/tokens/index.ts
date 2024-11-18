import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface OrganizationBalance {
    title: string,
    tokens: number
    usdt: number
    exchange_rate: number
    available_for_withdrawal: number
}
  
export interface OrganizationPrivateBalance extends OrganizationBalance {
    count_shares: number
}
  
export type OrganizationRecord = Record<string, OrganizationPrivateBalance | OrganizationBalance>

export const tokens = invoke(queryWrapper<void, OrganizationRecord>, {
    url: '/tokens',
    response: {
        contract: unknownContract, // contracts.organization.tokens,
        mapData: ({ result }) => (result as any).data
    }
});

applyBarrier(tokens.queryApi, { barrier: barriers.auth });
