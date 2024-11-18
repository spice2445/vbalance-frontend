import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';
import { CommonApiResponse } from 'shared/types/api';

export interface directionCourseProps {
    id: number,
    name: string,
    tags: string[],
    zoom: number,
    test: number,
    created_at: string,
    updated_at: string,
    date: string | null,
    url: string | null,
    is_cycle: number,
    is_deutsche: number,
    is_capital: number,
    direction: string,
    short_description: string,
    access: string,
    image: string,
    sort_order: number,
    exclusive: null
}

interface directionCourse extends CommonApiResponse {
    data: directionCourseProps[];
}

export const getOther = invoke(queryWrapper<void, directionCourse>, {
    url: '/academy/other',
    response: {
        contract: unknownContract // contracts.academy.other,
    }
});

applyBarrier(getOther.queryApi, { barrier: barriers.auth });

