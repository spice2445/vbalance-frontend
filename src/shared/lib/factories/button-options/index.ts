import { createFactory } from '@withease/factories';
import { createEvent, createStore, sample } from 'effector';
import { nanoid } from 'nanoid';

interface optionI {
    key: string,
    text: string
}

export const createButtonOptions = createFactory(() => {
    const $options = createStore<optionI[]>([]);
    const changedOption = createEvent<{
        text: string,
        index: number
    }>();
    const deletedOption = createEvent<number>();

    sample({
        clock: changedOption,
        source: $options,
        fn: (options, currentOption) => {
            if(currentOption.index === options.length + 1) {
                return [...options, {
                    text: '',
                    key: nanoid()
                }];
            }

            return options.map((option, index) => 
                index === currentOption.index ? { ...option, text: currentOption.text } : option
            );
        },
        target: $options
    });

    sample({
        clock: deletedOption,
        source: $options,
        fn: (options, optionDelete) => {
            const copyOptions = [...options];
            copyOptions.splice(optionDelete, 1);
            return copyOptions;
        },
        target: $options
    });
    return {
        $options,
        changedOption,
        deletedOption
    };
});