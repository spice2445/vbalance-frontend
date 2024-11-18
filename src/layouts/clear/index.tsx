import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { $theme } from 'shared/lib/theme';

interface ClearLayoutProps {
  children: ReactNode
}

export const ClearLayout = ({ children }: ClearLayoutProps) => {
  const theme = useUnit($theme);

  return (
    <div className={clsx('app', [theme])}>{children}</div>
  );
};
