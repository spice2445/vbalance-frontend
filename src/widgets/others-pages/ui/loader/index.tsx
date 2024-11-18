import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { $theme } from 'shared/lib/theme';
import { Loader } from 'shared/ui/loader';

import s from './style.module.scss';

export const PageLoader = () => {
  const theme = useUnit($theme);

  return (
    <div className={clsx('app', theme, s.container_loading)}>
      <Loader
        size='full_page'
      />
    </div>
  );
};
