import { runtypeContract } from '@farfetched/runtypes';
import { Record, Array, Number, String } from 'runtypes';

export const lineage = runtypeContract(
  Record({ 
    data: Array(Record({
        id: Number,
        login: String,
        status: String,
        firstLineCount: Number,
        organizationCount: Number 
    })),
    withHierarchyCount: Number,
    count: Number
  }) 
);
  