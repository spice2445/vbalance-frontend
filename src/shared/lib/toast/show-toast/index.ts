import { createEffect } from 'effector';
import { Id, toast, ToastOptions } from 'react-toastify';
import i18n from 'shared/config/i18n';

export interface ShowToastParams {
  message: string;
  options?: ToastOptions;
}

export const showToastFx = createEffect<ShowToastParams, Id>({
  handler: ({ message, options }) => toast(i18n.t(message), {
    isLoading: true,
    ...options
  })
});