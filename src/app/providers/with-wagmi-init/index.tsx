import { ReactNode } from 'react';
import { showToastFx } from 'shared/lib/toast';
import { connectedUser, disconnectedUser } from 'shared/lib/wagmi';
import { useAccountEffect } from 'wagmi';

export const WagmiInit = ({
    children
}: { children: ReactNode }) => {

  useAccountEffect({
    onConnect(data) {
      connectedUser(data);

      if(!data.isReconnected) {
        showToastFx({
          message: 'Вы успешно покдлючили свой кошелёк!', 
          options: {
            type: 'success'
          }
        });
      }
    },
    onDisconnect() {
      disconnectedUser();
      showToastFx({
        message: 'Вы отключили свой кошелёк.', 
        options: {
          type: 'error'
        }
      });
    }
  });

  return children;
};