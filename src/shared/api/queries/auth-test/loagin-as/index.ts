import { applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { baseUrl } from 'shared/lib/base-url';
import { queryWrapper } from 'shared/lib/factories';

export const loginAs = invoke(queryWrapper<void, string>, {
    url: (props: any) => baseUrl(`/auth/login-as?user_id=${props.user_id}&code=${__CODE_AUTH_TEST__}`),
    response: {
        contract: unknownContract
    }
});

applyBarrier(loginAs.queryApi, { barrier: barriers.auth });
