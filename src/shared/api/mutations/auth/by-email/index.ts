import { login } from './login';
import { resendCode } from './resend-code';
import { sendCode } from './send-code';
import { validateCode } from './validate-code';

export const byEmail = {
    login,
    sendCode,
    validateCode,
    resendCode
};