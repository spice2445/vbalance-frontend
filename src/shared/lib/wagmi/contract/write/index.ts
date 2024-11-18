import { attach } from 'effector';
import { WriteContractParameters } from 'viem';
import { writeContract } from 'viem/actions';
import { BaseError } from 'wagmi';

import { catchErrorWagmi, connectWallet } from '../../catch-error';
import { finishedProccedTx, startedProccedTx, statesWeb3 } from '../../primary-states';


export const writeContractFx = attach({
    source: [statesWeb3.$clientsWeb3, statesWeb3.$isProcessingTx, statesWeb3.$userWeb3],
    async effect([client, isProcessingTx, user], config: WriteContractParameters) {
        if(!client || !user) return connectWallet();
        if(isProcessingTx) return '';

        startedProccedTx();
        try {
            const writeRes = await writeContract(client.wallet, {
                ...config,
                account: user.address
            });
        
            return writeRes;
        } catch(error) {
            catchErrorWagmi(error as BaseError);
        } finally {
            finishedProccedTx();
        }
    }
});
