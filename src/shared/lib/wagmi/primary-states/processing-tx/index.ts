import { createEvent, createStore, sample } from 'effector';
import { showToastFx } from 'shared/lib/toast';

export const startedProccedTx = createEvent();
export const finishedProccedTx = createEvent();

export const $isProcessingTx = createStore(false);

$isProcessingTx
    .on(startedProccedTx, () => true)
    .on(finishedProccedTx, () => false);

sample({
    clock: startedProccedTx,
    fn: () => ({
        message: 'Транзакция выполняется',
        options: {
            isLoading: true
        } 
    }),
    target: showToastFx
});