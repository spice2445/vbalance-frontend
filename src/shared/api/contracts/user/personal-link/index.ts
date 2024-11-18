
import { Record, Number, String } from 'runtypes';

import { commonContractMessage } from '../../common';

export const personalLink = commonContractMessage(
  Record({ 
    referral_code: String,
    referrals: Record({
      total: Number,
      week: Number,
      month: Number
    })
  }) 
);
  