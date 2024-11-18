import { createFactory } from '@withease/factories';
import { Event, EventCallable, StoreWritable, createEvent, createStore, sample } from 'effector';
import { keyModal, modalsStore } from 'shared/lib/modal';

interface createStepsProps {
    defaultValue?: number,
    keyModal?: string,
    reinittedSteps?: Event<void>
}

export interface createStepsReturn {
    $activeStep: StoreWritable<number>,
    settedActiveStep: EventCallable<number>
}

export const createSteps = createFactory(({
    defaultValue = 1,
    keyModal: keyModalProps,
    reinittedSteps
}: createStepsProps): createStepsReturn => {
    const settedActiveStep = createEvent<number>();

    const $activeStep = createStore<number>(defaultValue);
    $activeStep.on(settedActiveStep, (_, newActiveStep) => newActiveStep);

    sample({
        clock: modalsStore.closeModal,
        filter: ({keyModal}: keyModal) => keyModalProps === keyModal,
        target: $activeStep.reinit
    });

    if(reinittedSteps) {
        sample({
            clock: reinittedSteps,
            target: $activeStep.reinit
        });
    }

    return {
        $activeStep,
        settedActiveStep
    };
});