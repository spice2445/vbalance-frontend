import { useWeb3Modal } from '@web3modal/wagmi/react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { useAccount, useDisconnect } from 'wagmi';

import s from './style.module.scss';

interface ConnectWalletProps {
  size: 'small' | 'large',
}

export const ConnectWallet = ({
  size
}: ConnectWalletProps): JSX.Element => {
  const { t } = useTranslation();
  const { open } = useWeb3Modal();

  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();

  const onWallet = () => {
    if (isConnected) disconnect();
    if (!isConnected) open();
  };

  return (
    <Button
      onClick={onWallet}
      icon={{ variant: 'metamask', size: 'm' }}
      className={clsx(s.btn, { [s.mini]: size === 'small' })}
    >
      {size === 'large' ?
        !isConnected ? t('Подключить') : formatter.string.truncateAddress(address)
        : undefined
      }
    </Button>

  );
};
