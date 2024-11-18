import { 
    Record,
    Array,
    String,
    Number,
    Union,
    Undefined
} from 'runtypes';

import { commonContractErrors } from '../../common';

export const structure = commonContractErrors(
    Array(Array(Record({
        title: String,
        key: String,
        icon: String,
        percent: Union(Number, Undefined)
    })))
);