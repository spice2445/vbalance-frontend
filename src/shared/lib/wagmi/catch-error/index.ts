import { showToastFx } from 'shared/lib/toast';
import { BaseError } from 'wagmi';

import { openWeb3ModalFx } from '../web3-modal';

export const catchErrorWagmi = ({
    // name,
    shortMessage
    // metaMessages,
    // message
}: BaseError) => {
    showToastFx({
        message: shortMessage,
        options: {
            type: 'error' as const
        }  
    });
};

export const connectWallet = () => {
    showToastFx({
        message: 'Подключите кошелёк!',
        options: {
          type: 'error' as const
        }  
    });

    openWeb3ModalFx();
    return null;
};