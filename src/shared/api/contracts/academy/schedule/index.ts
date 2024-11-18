import { 
    Record, 
    Array, 
    String, 
    Number
} from 'runtypes';

import { commonContractMessage } from '../../common';

export const schedule = commonContractMessage(
    Array(
        Record({
            id: Number,
            name: String,
            date: String,
            link: String,
            created_at: String,
            updated_at: String,
            is_big_capital: Number,
            is_capital: Number,
            is_for_subscribers: Number,
            is_partner: Number
        })
    )
);