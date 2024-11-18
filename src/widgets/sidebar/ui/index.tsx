import { Link } from 'atomic-router-react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { LoginAs } from 'features/auth-test';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mutations } from 'shared/api/mutations';
import { routes } from 'shared/config/router';
import { createMQ } from 'shared/lib/use-media';
import { Button } from 'shared/ui/button';
import { Logo } from 'shared/ui/logo';
import { Overlay } from 'shared/ui/overlay';
import { Typography } from 'shared/ui/typography';

import { navmenu } from '../config';

import s from './style.module.scss';

type SidebarProps = { className?: string }

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const logout = useUnit(mutations.auth.logout.start);
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useUnit(routes.profile._.open);
  const isMobile = useUnit(createMQ(680).$matches);

  const isHoverClass = (customClass: string) => ({
    [customClass]: isHovered
  });

  return (
    <>
      <Overlay
        onClick={() => isMobile && setIsHovered(false)}
        className={clsx(s.sidebarOverlay, isHoverClass(s.isVisible))}
      />
      <div
        data-testid='sidebar'
        role='button'
        tabIndex={0}
        onKeyDown={(event) => event.preventDefault()}
        className={clsx(s.wrapper, isHoverClass(s.isHovered), [className])}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => isMobile && setIsHovered(true)}
      >
        <Logo
          onClick={() => isHovered && navigate()}
          className={clsx(s.smallLogo, isHoverClass(s.hoveredWidth))}
          size='full'
        />
        <div className={s.navbar}>
          {navmenu.map(({ text, variant, route }) => (
            <Button
              key={text}
              theme='menu'
              as={Link}
              to={route}
              activeClassName={s.activeButton}
              className={clsx(s.btn, isHoverClass(s.buttonHovered))}
              icon={{ variant, size: 'l' }}
            >
              {t(text)}
            </Button>
          ))}
        </div>
        <Typography
          className={clsx(s.zero, isHoverClass(s.hoveredWidth), s.logout)}
          size='xs'
          onClick={logout}
          font='additional_bold'
          icon={{ size: 'm', variant: 'exit' }}
        >
          {t('Выйти из кабинета')}
        </Typography>
        
        <LoginAs className={clsx({[s.isNotHoveredAuthTest]: !isHovered})} />

        <Typography
          className={clsx(s.copyright, isHoverClass(s.hoveredWidth))}
          font='additional'
          size='xs'
        >
          {'©Copyright VBALANCE 2024'}
        </Typography>

        <Typography
          className={clsx(s.politics, isHoverClass(s.hoveredWidth))}
          color='acsent'
          font='additional'
        >
          {t('Пользовательское соглашение')}
        </Typography>

        <Typography
          className={clsx(s.politics, isHoverClass(s.hoveredWidth))}
          color='acsent'
          font='additional'
        >
          {t('Политика конфиденциальности')}
        </Typography>
      </div>
    </>

  );
};
