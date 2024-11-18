import {
  RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute
} from 'atomic-router';
import {
  createEvent, Effect, Event, EventCallable, sample
} from 'effector';
import { api } from 'shared/api';

import { $viewerStatus, ViewerStatus } from '../model';

interface ChainParams {
  otherwise?: Event<void> | Effect<void, any, unknown>;
}

export function chainAuthenticated<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {}
): RouteInstance<Params> {
  const authenticationCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const userAuthenticated = createEvent();
  const userAnonymous = createEvent();

  sample({
    clock: authenticationCheckStarted,
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Initial,
    target: api.queries.user.me.start
  });
  sample({
    clock: [authenticationCheckStarted, api.queries.user.me.$succeeded],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Authenticated,
    target: userAuthenticated
  });
  sample({
    clock: [authenticationCheckStarted, api.queries.user.me.$failed],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Anonymous,
    target: userAnonymous
  });

  if (otherwise) {
    sample({
      clock: userAnonymous,
      filter: route.$isOpened,
      target: otherwise as EventCallable<void>
    });
  }
  return chainRoute({
    route,
    beforeOpen: authenticationCheckStarted,
    openOn: [userAuthenticated],
    cancelOn: [userAnonymous]
  });
}

export function chainAnonymous<Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {}
): RouteInstance<Params> {
  const authenticationCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const userAuthenticated = createEvent();
  const userAnonymous = createEvent();

  sample({
    clock: authenticationCheckStarted,
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Initial,
    target: api.queries.user.me.start
  });
  sample({
    clock: [authenticationCheckStarted, api.queries.user.me.$succeeded],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Authenticated,
    target: userAuthenticated
  });
  sample({
    clock: [authenticationCheckStarted, api.queries.user.me.$failed],
    source: $viewerStatus,
    filter: (status) => status === ViewerStatus.Anonymous,
    target: userAnonymous
  });

  if (otherwise) {
    sample({
      clock: userAuthenticated,
      filter: route.$isOpened,
      target: otherwise as EventCallable<void>
    });
  }

  return chainRoute({
    route,
    beforeOpen: authenticationCheckStarted,
    openOn: [userAnonymous],
    cancelOn: [userAuthenticated]
  });
}

