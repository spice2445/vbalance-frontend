import { createStore, sample } from 'effector';
import { api } from 'shared/api';
import { Viewer } from 'shared/types/viewer';

export enum ViewerStatus {
  Initial,
  Pending,
  Authenticated,
  Anonymous
}

export const $viewerStatus = createStore(ViewerStatus.Initial);
export const $viewer = createStore<null | Viewer>(null);

sample({
  clock: api.queries.user.me.finished.success,
  fn: ({ result }) => ({
    id: result.id,
    email: result.email ?? ''
  }),
  target: $viewer
});


$viewerStatus.on(api.queries.user.me.$pending, (status) => {
  if (status === ViewerStatus.Initial) return ViewerStatus.Pending;
  return status;
});
$viewerStatus.on(api.queries.user.me.$succeeded, (_, user) => {
  if (user) return ViewerStatus.Authenticated;
  return ViewerStatus.Anonymous;
});
$viewerStatus.on(api.queries.user.me.$failed, (status, error) => {
  console.error(error);
  if (error) return ViewerStatus.Anonymous;
  if (status === ViewerStatus.Pending) return ViewerStatus.Anonymous;
  return status;
});
