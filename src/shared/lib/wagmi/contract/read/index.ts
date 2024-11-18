import { attach } from 'effector';
import { ReadContractParameters } from 'viem';
import { readContract } from 'viem/actions';
import { BaseError } from 'wagmi';

import { catchErrorWagmi, connectWallet } from '../../catch-error';
import { statesWeb3 } from '../../primary-states';

export const readContractFx = attach({
  source: [statesWeb3.$clientsWeb3, statesWeb3.$isProcessingTx],
  async effect([client, isProcessingTx], config: ReadContractParameters) {
    if(!client) return connectWallet();
    if(isProcessingTx) return '';

    // startedProccedTx();
    try {
      const result = await readContract(client.client, config);

      return result;
    } catch(error) {
      catchErrorWagmi(error as BaseError);
    } 
    // finally {
    //   finishedProccedTx()
    // }
  }
});