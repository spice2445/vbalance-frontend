import { 
    Record, 
    Number
} from 'runtypes';

import { commonContractMessage } from '../../common';

const columns = () => Record({
    sum: Number,
    percent: Number,
    sum_all: Number
});

export const calculationPools = commonContractMessage(
    Record({
        personal_investment: columns(),
        investment_first_line: columns(),
        investment_other_line: columns()
    })
);