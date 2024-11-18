import { applyBarrier } from '@farfetched/core';
import { createFactory, invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

interface usdtProps {
    product: 'account' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'token_private' | 'balance_plus' | 'life_*'
}

export const usdt = createFactory(({
    product
}: usdtProps) => {
    const usdtQuery = invoke(queryWrapper<void, string>, {
        url: '/buy/usdt',
        query: { product },
        response: {
            contract: contracts.buy.usdt,
            mapData: ({ result }) => (result as any).data.wallet
        }
    });

    applyBarrier(usdtQuery.queryApi, { barrier: barriers.auth });

    return usdtQuery;
});
