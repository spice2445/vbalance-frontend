import { Union, Number, String, Null, Record } from 'runtypes';
import { commonContractTable } from 'shared/api/contracts/common';

export const balanceHistory = commonContractTable({
  id: Number,
  user_id: Number,
  user_login: Union(String, Null),
  user_name: Union(String, Null),
  user_avatar: Union(String, Null),
  user_line: Number,
  sum: Number,
  date: Number,
  type: String,
  data: Union(Record({
    append_sum: Union(Number, Null),
    balance: Union(Number, Null)
  }), Null)
});
  