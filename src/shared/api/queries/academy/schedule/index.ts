import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';
import { CommonApiResponse } from 'shared/types/api';

export interface SheduleProps {
    id: number,
    name: string,
    date: number,
    link: string,
    created_at: string,
    updated_at: string,
    is_big_capital: number,
    is_capital: number,
    is_for_subscribers: number,
    is_partner: number
}

interface SheduleQueryI extends CommonApiResponse {
    data: SheduleProps[];
}

export const getSchedule = invoke(queryWrapper<void, SheduleQueryI>, {
    url: '/academy/schedule',
    response: {
        contract: unknownContract // contracts.academy.schedule
    }
});

applyBarrier(getSchedule.queryApi, { barrier: barriers.auth });

