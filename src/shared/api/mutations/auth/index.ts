import { byEmail } from './by-email';
import { validateTelegramData } from './by-telegram';
import { logout } from './logout';
import { refreshToken } from './refresh-token';

export const auth = {
    byEmail,
    logout,
    refreshToken,
    byTelegram: {
        validateTelegramData
    }
};