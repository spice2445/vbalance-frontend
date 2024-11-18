import { invoke } from '@withease/factories';
import { createEvent, createStore, sample } from 'effector';
import { delay } from 'patronum';
import { api } from 'shared/api';
import { copyFactory } from 'shared/lib/factories';

import { restoreSample } from '../../config';

export const getQrCodeQuery = invoke(api.queries.buy.usdt, {
    product: 'account'
});

export const {
    copyClicked,
    $isCopied
} = invoke(copyFactory, {
    $sourceText: getQrCodeQuery.queryApi.$data
});

export const $paymentHasCleared = createStore(false);

export const paymented = createEvent();

sample({
    clock: delay(paymented, 5000),
    fn: () => true,
    target: $paymentHasCleared
});


sample({
    ...restoreSample,
    target: [$paymentHasCleared.reinit, getQrCodeQuery.queryApi.reset]
});
