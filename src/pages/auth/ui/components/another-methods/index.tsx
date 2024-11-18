
// import { ConnectWallet } from 'features/connect-wallet';
// import { GoogleAuth } from 'features/google-auth';
import { TelegramAuth } from 'features/telegram-auth';

import s from './style.module.scss';

export const AnotherMethods = () => {

  return (
    <div className={s.methods}>
      <TelegramAuth />
      {/* <ConnectWallet
        size='small'
      /> */}
      {/* <GoogleAuth /> */}
    </div>
  );
};
