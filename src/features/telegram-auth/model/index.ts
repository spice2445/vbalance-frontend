import { Store,  createEffect, createEvent, sample } from 'effector';
import { api } from 'shared/api';
import { router } from 'shared/config/router';
import { TelegramData } from 'shared/types/telegram';

import { TELEGRAM_WIDGET_LINK } from '../config';

const $refCode = router.$query.map(query => query.ref as string | undefined) as Store<string | undefined>;

export const authorized = createEvent();

const initScriptFx = createEffect(() => {
  const scriptElement = document.createElement('script');
  scriptElement.src = TELEGRAM_WIDGET_LINK;
  scriptElement.async = true;

  document.body.appendChild(scriptElement);
});

const openTelegramFx = createEffect((bot_id: string) => {
  return new Promise<TelegramData>((resolve, reject) => {
    window.Telegram.Login.auth({ bot_id, request_access: true }, (data) => {
      if(!data) reject(new Error('Произошла ошибка'));
      if(data) resolve(data);
    });
  });
});


sample({
  clock: authorized,
  target: initScriptFx
});

sample({
  clock: initScriptFx.done,
  source: $refCode,
  fn: (referal_invited) => ({ referal_invited: referal_invited }),
  target: api.queries.auth.byTelegram.getBotId.start
});

sample({
  clock: api.queries.auth.byTelegram.getBotId.$data,
  filter: Boolean,
  fn: ({ data }) => String(data.botId),
  target: openTelegramFx
});

sample({
  source: openTelegramFx.doneData,
  fn: (tgResponse) => ({ data: tgResponse }),
  target: api.mutations.auth.byTelegram.validateTelegramData.start
});

sample({
  clock: api.mutations.auth.byTelegram.validateTelegramData.finished.success,
  target: api.queries.user.me.start
});
