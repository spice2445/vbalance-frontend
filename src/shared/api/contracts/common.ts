import { runtypeContract } from '@farfetched/runtypes';
import { Record, Array, Boolean, String, Number, Union, Null } from 'runtypes';

export const commonContractMessage = (data: any) => runtypeContract(
    Record({
        success: Boolean,
        message: String,
        data
    })
);

export const commonContractErrors = (data: any) => runtypeContract(
    Record({
        status: Boolean,
        errors: Record({}),
        data
    })
);

export const commonContractTable = (data: any) => runtypeContract(
    Record({
        data: Array(Record(data)),
        pagination: Record({
            next_from: Union(Number, Null),
            count: Union(Number, Null)
        })
    })
);