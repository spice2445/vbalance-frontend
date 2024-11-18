declare global {
  interface Window {
    Telegram: {
      Login: {
        auth: (options: TelegramOptions, callback: TelegramCallback) => void;
      };
    };
  }
}

export interface TelegramOptions {
  bot_id: string;
  request_access?: boolean;
  lang?: string;
}
export type TelegramData = {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name?: string;
  username?: string;
}

export type TelegramCallback = (dataOrFalse: TelegramData | false) => void;