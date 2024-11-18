
import { createEffect, createEvent, sample } from 'effector';
import { api } from 'shared/api';
import { reloadPageFx } from 'shared/lib/reload-page';

const logginAsFx = createEffect(() => {
    const code = prompt('Введите код');

    if(code !== __CODE_AUTH_TEST__) {
        throw new Error('Код неверный!');
    }

    const userId = prompt('Введите пользователя', '1') ?? '1';

    return {
        user_id:userId
    };
});

export const logginAsFailFx = createEffect(() => {
    return alert('Код неверный!');
});

export const loginnedAs = createEvent();

sample({
    clock: loginnedAs,
    target: logginAsFx
});

sample({
    clock: logginAsFx.failData,
    target: logginAsFailFx
});

sample({
    clock: logginAsFx.doneData,
    target: api.queries.authTest.loginAs.queryApi.start as any
});

sample({
    clock: api.queries.authTest.loginAs.queryApi.finished.success,
    target: reloadPageFx
});

