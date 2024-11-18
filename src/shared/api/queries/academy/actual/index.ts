import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';
import { CommonApiResponse } from 'shared/types/api';

export interface ActualCoursesProps {
    id: number;
    title: string;
    url: string;
    expire_academy: string;
    date: number;
    duration: string;
    is_actual: number;
}

interface ActualCoursesQueryI extends CommonApiResponse {
    data: ActualCoursesProps[];
}

export const getRelevant = invoke(queryWrapper<void, ActualCoursesQueryI>, {
    url: '/academy/relevant',
    response: {
        contract: contracts.academy.actual
    }
});

applyBarrier(getRelevant.queryApi, { barrier: barriers.auth });

