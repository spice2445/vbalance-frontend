import { 
    Record,
    Number
} from 'runtypes';

import { commonContractErrors } from '../../common';

export const token = commonContractErrors(
    Record({
        balance: Record({
            usdt: Number,
            vbti: Number
        }),
        statistic: Record({
            buy: Record({
                vbti: Number,
                usdt: Number,
                average: Number
            }),
            sell: Record({
                vbti: Number,
                usdt: Number,
                average: Number
            })
        })
    })
);