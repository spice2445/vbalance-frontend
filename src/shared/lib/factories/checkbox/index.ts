import { createFactory } from '@withease/factories';
import { createEvent, createStore } from 'effector';

interface checkBoxFactoryProps {
    isOnce?: boolean
}

export const checkBoxFactory = createFactory(({
    isOnce = false
}: checkBoxFactoryProps) => {
    const changedState = createEvent();
    const $checkBox = createStore<boolean>(false);
    
    $checkBox.on(changedState, (state) => isOnce ? true : !state);

    return {
        $checkBox,
        changedState
    };
});