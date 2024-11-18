import { 
    Record,
    Number
} from 'runtypes';

import { commonContractErrors } from '../../common';

export const limit = commonContractErrors(
    Record({
        limit: Number
    }) 
);