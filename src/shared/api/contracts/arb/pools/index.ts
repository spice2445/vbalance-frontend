import { 
    Record, 
    Number,
    String,
    Boolean,
    Union
} from 'runtypes';

import { commonContractMessage } from '../../common';

const poolColumn = Record({
    count_users: Number,
    sum: Number,
    sum_week: Number,
    conditions: Union(Number, String),
    percent: Number,
    is_active: Boolean
});

export const pools = commonContractMessage(
    Record({
        pool1: poolColumn,
        pool2: poolColumn,
        pool3: poolColumn,
        pool4: poolColumn,
        pool5: poolColumn,
        pool6: poolColumn
    })
);