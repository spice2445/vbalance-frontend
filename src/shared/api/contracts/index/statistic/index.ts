
import { Record, Number, Array } from 'runtypes';

import { commonContractErrors } from '../../common';

export const statistic = commonContractErrors(
  Array(Record({
    time: Number,
    value: Number
  }))   
);