import { createFactory } from '@withease/factories';
import { Store, createEffect, createEvent, createStore, sample } from 'effector';
import { debug, delay } from 'patronum';

interface copyFactoryProps {
    $sourceText: Store<string | undefined | null>
}

export const copyFactory = createFactory(({
    $sourceText
}: copyFactoryProps) => {
    const copyClicked = createEvent();
    const copyTextFx = createEffect(async (text: string) => await navigator?.clipboard?.writeText(text));
    const $isCopied = createStore<boolean>(false);

    sample({
        clock: copyClicked,
        source: $sourceText,
        filter: Boolean,
        fn: (sourceText: string) => sourceText,
        target: copyTextFx
    });
    
    sample({
        clock: copyTextFx.done,
        fn: () => true,
        target: $isCopied
    });

    debug(copyTextFx);

    sample({
        clock: delay({ source: copyTextFx.done, timeout: 3000 }),
        fn: () => false,
        target: $isCopied
    });

    return {
        copyClicked,
        $isCopied
    };
});