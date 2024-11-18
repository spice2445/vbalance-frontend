
import { Record, Number, String } from 'runtypes';

import { commonContractErrors } from '../../common';

export const price = commonContractErrors(
  Record({
    date_time: String,
    index_token_price: Number
  })
);