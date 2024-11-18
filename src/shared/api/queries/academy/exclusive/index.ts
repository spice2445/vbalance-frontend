import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';
import { CommonApiResponse } from 'shared/types/api';
import { StatusUser } from 'shared/types/user-statuses';

export interface exclusiveCourseProps {
    needStatus: StatusUser,
    titleCourse: string,
    description: string,
    idCourse: number,
    maskImg: string,
}

interface ExclusiveQueryI extends CommonApiResponse {
    data: exclusiveCourseProps[];
}

// contracts.academy.exclusive
export const getExclusive = invoke(queryWrapper<void, ExclusiveQueryI>, {
    url: '/academy/exclusive',
    response: {
        contract: unknownContract
    }
});

applyBarrier(getExclusive.queryApi, { barrier: barriers.auth });

