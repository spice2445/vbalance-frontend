import { createEvent, sample } from 'effector';

import { setClientsWeb3Fx, $clientsWeb3 } from './client';
import { setEstimateFeeFx, $estimateFeeWeb3 } from './estimate-fee';
import {$isProcessingTx} from './processing-tx';
import { setUserWeb3DataFxProps } from './type';
import { setUserWeb3DataFx, $userWeb3 } from './user';

export const connectedUser = createEvent<setUserWeb3DataFxProps>();
export const disconnectedUser = createEvent();

sample({
    clock: connectedUser,
    target: [setUserWeb3DataFx, setClientsWeb3Fx, setEstimateFeeFx]
});

sample({
    clock: disconnectedUser,
    target: [$clientsWeb3.reinit, $userWeb3.reinit, $estimateFeeWeb3.reinit]
});

export const statesWeb3 = {
    $userWeb3,
    $clientsWeb3,
    $isProcessingTx,
    $estimateFeeWeb3
};

export {
    startedProccedTx,
    finishedProccedTx
} from './processing-tx';