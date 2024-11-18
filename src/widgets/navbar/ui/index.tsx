import { useUnit } from 'effector-react';
import { Avatar } from 'entities/user';
import { defaultMQ } from 'shared/lib/use-media';
import { BreadCrumbs } from 'shared/ui/breadcrumbs';

import s from './style.module.scss';

export const Navbar = () => {
  const isTablet = useUnit(defaultMQ.tablet.$matches);
  const isMobile = useUnit(defaultMQ.mobile.$matches);

  if(isTablet) {
    return (
      <div className={s.navbar}>
        <BreadCrumbs mobile />
        {isMobile && <Avatar className={s.avatar} />}
      </div>
    );
  }

  return null;
};
