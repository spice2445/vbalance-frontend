
import { applyBarrier } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface PriceIndex {
    index_token_price: number,
    date_time: string
}

export const price = invoke(queryWrapper<void, number>, {
    url: '/index-token/price',
    response: {
        contract: contracts.index.price,
        mapData: ({ result }) => +((result as any).data.index_token_price.toFixed(2))
    }
});

applyBarrier(price.queryApi, { barrier: barriers.auth });

