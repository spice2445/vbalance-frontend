
import { 
    Record, 
    Array,
    Number
} from 'runtypes';

import { commonContractMessage } from '../../common';

export const exclusive = commonContractMessage(
    Array(
        Record({
            id: Number
        })
    )
);