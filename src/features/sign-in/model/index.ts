import { Effect, createStore, sample } from 'effector';
import { api } from 'shared/api';
import { LoginMutationParams, mutations } from 'shared/api/mutations';
import { routes } from 'shared/config/router';
import { createForm } from 'shared/lib/form';

import { scheme } from '../config';


export enum FormStatus {
  Initial = 1,
  Submitted,
}

const $initialValues = createStore({
  email: '',
  password: ''
});

sample({
  clock: mutations.auth.byEmail.login.$succeeded,
  target: routes.profile._.open
});


export const $$form = createForm({
  initialValues: $initialValues,
  onSubmit: mutations.auth.byEmail.login.start as unknown as Effect<LoginMutationParams, void, Error>,
  schema: scheme
});

sample({
  clock: mutations.auth.byEmail.login.$succeeded,
  target: api.queries.user.me.start
});