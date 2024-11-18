
import { Union, Number, String, Null, Undefined } from 'runtypes';
import { commonContractTable } from 'shared/api/contracts/common';

export const usersList = commonContractTable({
  id: Number,
  login: Union(String, Null),
  status: Union(String, Null, Undefined),
  avatar: Union(String, Null, Undefined),
  line: Number,
  firstLineCount: Number,
  organizationCount: Number,
  organizationTotalSailSum: Number
});
  