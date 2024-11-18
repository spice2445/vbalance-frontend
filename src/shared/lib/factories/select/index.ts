import { createFactory } from '@withease/factories';
import { createEvent, createStore } from 'effector';

interface selectFactoryProps {
    defaultValue: string;
} 

export const selectFactory = createFactory(({defaultValue}:selectFactoryProps) => {
    const choosedSelect = createEvent<{option: string}>();
    const $select = createStore<string>(defaultValue);
    
    $select.on(choosedSelect, (_, {option}) => option);

    return {
        $select,
        choosedSelect
    };
});