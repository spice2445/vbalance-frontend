import { clsx } from 'clsx';
import { useUnit } from 'effector-react';
import { Avatar } from 'entities/user';
import { ConnectWallet } from 'features/connect-wallet';
import { ShowNotification } from 'features/show-notification';
import { ToggleLanguage } from 'features/toggle-language';
import { ToggleTheme } from 'features/toggle-theme';
import { useState } from 'react';
import { defaultMQ } from 'shared/lib/use-media';
import { BreadCrumbs } from 'shared/ui/breadcrumbs';
import { Button } from 'shared/ui/button';

import { Balance, TicketsBalance } from './components';
import s from './style.module.scss';

export const Header = (): JSX.Element => {
  const isTablet = useUnit(defaultMQ.tablet.$matches);
  const isMobile = useUnit(defaultMQ.mobile.$matches);

  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggle = () => setIsHeaderOpen((prev) => !prev);
  
  return (
    <div className={clsx(s.header)}>
      {!isTablet && <BreadCrumbs />}
      <div className={clsx(s.navbar, { [s.open]: isHeaderOpen })}>
        {isMobile && (
          <Button
            theme='mini_icon'
            onClick={toggle}
            icon={{ variant: 'arrow-reversed', size: 'xs' }}
            className={clsx(s.button, { [s.active]: isHeaderOpen })}
          />
        )}
        {(!isMobile || !isHeaderOpen) && (
          <>
            <ToggleTheme />
            <ShowNotification />
            <ToggleLanguage />
          </>
        )}
        {(isMobile && isHeaderOpen) && (
          <>
            <Balance />
            <TicketsBalance />
          </>
        )}
        {!isMobile && (
          <>
            <Balance />
            <TicketsBalance />
          </>
        )}

        <ConnectWallet size='large' />
        {!isMobile && <Avatar />}
      </div>
    </div>
  );
};
