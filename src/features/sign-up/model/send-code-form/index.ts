import { createEffect, createStore, Store, attach, Effect, sample } from 'effector';
import { mutations, SendCodeMutationParams } from 'shared/api/mutations';
import i18n from 'shared/config/i18n';
import { router } from 'shared/config/router';
import { createForm } from 'shared/lib/form';

import { sendCodeScheme } from '../../config';
import { SendCodeParams } from '../../types';
import { changeConditionalStatus } from '../conditionals-checkbox';

const $initialValuesSendCode = createStore({
  email: '',
  password: '',
  confirmPassword: '',
  refCode: '',
  checkbox: false
});

const $refCode = router.$query.map(query => query.ref as string) as Store<string>;

const sendCodeAttached = createEffect<SendCodeMutationParams, void, Error>(({ 
  email, password, referal_invited, lang
}) => {
  mutations.auth.byEmail.sendCode.start({
    referal_invited, 
    email, 
    password, 
    lang
  });
});

const sendCodeFx = attach({
  source: $refCode,
  effect: sendCodeAttached,
  mapParams: ({ email, password, refCode }, refCodeQuery) => ({
    email, 
    password,
    referal_invited: refCodeQuery ?? refCode, 
    lang: i18n.language.slice(0, 2) 
  })
}) as Effect<SendCodeParams, void, Error>;


export const $$formSendCode = createForm({
  initialValues: $initialValuesSendCode,
  onSubmit: sendCodeFx,
  schema: sendCodeScheme
});

sample({
    clock: changeConditionalStatus,
    source: $$formSendCode.$values,
    fn: (values) => ({
      path: 'checkbox',
      value: !values.checkbox
    }),
    target: $$formSendCode.set
}); 




