import { 
    Record,
    String
} from 'runtypes';

import { commonContractErrors } from '../../common';

export const usdt = commonContractErrors(
    Record({
        wallet: String,
        wallet_qr: String
    }) 
);