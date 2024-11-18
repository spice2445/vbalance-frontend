import { 
    Record, 
    Array, 
    String, 
    Number
} from 'runtypes';

import { commonContractMessage } from '../../common';

export const actual = commonContractMessage(
    Array(
        Record({
            id: Number,
            title: String,
            url: String,
            expire_academy: String,
            date: Number,
            duration: String,
            is_actual: Number
        })
    )
);