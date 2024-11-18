import { 
    Record, 
    Array, 
    String, 
    Number,
    Null,
    Union
} from 'runtypes';

import { commonContractMessage } from '../../common';

export const other = commonContractMessage(
    Array(
        Record({
            id: Number,
            name: String,
            tags: Array(String),
            zoom: Number,
            test: Number,
            created_at: String,
            updated_at: String,
            date: Union(String, Null),
            url: Union(String, Null),
            is_cycle: Number,
            is_deutsche: Number,
            is_capital: Number,
            direction: String,
            short_description: String,
            access: String,
            image: String,
            sort_order: Number,
            exclusive: Null
        })
    )
);