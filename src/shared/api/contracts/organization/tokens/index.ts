import { Record, Number, Union, Undefined, Literal } from 'runtypes';

import { commonContractMessage } from '../../common';

export const tokens = commonContractMessage(
    Record({
        title: Union(Literal('Private'), Literal('Staking'), Literal('Vesting')),
        tokens: Number,
        usdt: Number,
        exchange_rate:Number,
        available_for_withdrawal: Number,
        count_shares: Union(Number, Undefined)
    })
);