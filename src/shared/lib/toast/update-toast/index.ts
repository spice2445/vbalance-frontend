import { createEffect } from 'effector';
import { Id, UpdateOptions, toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import i18n from 'shared/config/i18n';

export interface UpdateToastParams {
  id: Id;
  options?: UpdateOptions<unknown> | undefined;
}

export const updateToastFx = createEffect<UpdateToastParams, void>({
  handler: ({ id, options }) => toast.update(id, {
    transition: Flip,
    ...options,
    render: i18n.t((options?.render ?? '') as string)
  })
});