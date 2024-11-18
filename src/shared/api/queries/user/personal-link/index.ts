import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

interface personalLinkData {
    referral_code: string,
    referrals: {
      total: number,
      week: number,
      month: number
    }
} 

export const personalLink = invoke(queryWrapper<void, personalLinkData>, {
    url: '/user/personal-link',
    response: {
        contract: unknownContract, // contracts.user.personalLink,
        mapData: ({ result }) => (result as {data:personalLinkData}).data
    }
});

applyBarrier(personalLink.queryApi, { barrier: barriers.auth });
