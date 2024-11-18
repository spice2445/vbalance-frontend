import { auth } from './auth';

export const mutations = {
    auth
};

export { type LoginMutationParams } from './auth/by-email/login';
export { type SendCodeMutationParams } from './auth/by-email/send-code';
export { type ValidateCodeMutationParams } from './auth/by-email/validate-code';
export { type ValidateTelegramDataMutationParams } from './auth/by-telegram';


