import { isHttpError, JsonApiRequestError, Mutation } from '@farfetched/core';
import { createFactory } from '@withease/factories';
import { createStore, sample } from 'effector';
import { Id } from 'react-toastify';

import { showToastFx, ShowToastParams, updateToastFx, UpdateToastParams} from '../../toast';

type HandleToastMutationStateFactoryProps = {
  mutation: Mutation<any, any, JsonApiRequestError>;
  succeeded?: string | null;
  pending?: string | null;
}

export const handleToastMutationStateFactory = createFactory(({
  mutation,
  succeeded = null,
  pending = null
}: HandleToastMutationStateFactoryProps) => {
  const $toast = createStore<Id | null>(null);
  const $pending = createStore<string | null>(pending);
  const $succeeded = createStore<string | null>(succeeded);

  sample({
    clock: mutation.started,
    source: $pending,
    filter: Boolean,
    fn: () => ({ message: pending as string }),
    target: showToastFx
  });

  sample({
    clock: showToastFx.doneData,
    target: $toast
  });
      
  sample({
    clock: mutation.$succeeded,
    source: [$succeeded, $toast],
    filter: ([success, toast]) =>  Boolean(success) && !toast,
    fn: ([success]) => ({
      message: success,
      options: {
        type: 'success',
        isLoading: false,
        autoClose: 3000
      }
    } as ShowToastParams),
    target: showToastFx
  });
      
  sample({
    clock: mutation.$succeeded,
    source: [$toast, $succeeded],
    filter: Boolean,
    fn: ([id, success]) => ({id, options: {
      type: 'success' as const,
      render: success,
      isLoading: false,
      autoClose: 3000
    }} as UpdateToastParams),
    target: updateToastFx
  });
      
  sample({
    clock: mutation.finished.failure,
    source: $toast,
    filter: Boolean,
    fn: (id, mutationFailure) => ({id, options: {
      type: 'error' as const,
      // @ts-ignore
      render: `${isHttpError(mutationFailure) && mutationFailure.error.response.message || mutationFailure.error.explanation}`,
      isLoading: false,
      autoClose: 3000
    }}),
    target: updateToastFx
  });

  sample({
    clock: mutation.finished.failure,
    source: $toast,
    filter: (toast) => toast === null,
    fn: (_, mutationFailure) => ({
      // @ts-ignore
      message: `${isHttpError(mutationFailure) && mutationFailure.error.response.message || mutationFailure.error.explanation}`,
      options: {
        type: 'error',
        autoClose: 3000
      }
    } as ShowToastParams),
    target: showToastFx
  });
});