import { 
    Record, 
    Number
} from 'runtypes';

import { commonContractMessage } from '../../common';

export const statistic = commonContractMessage(
    Record({
        sum_deposits: Number,
        sum_week: Number,
        sum_pools: Number
    })
);