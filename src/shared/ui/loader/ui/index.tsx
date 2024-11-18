import { clsx } from 'clsx';
import { Logo } from 'shared/ui/logo';

import s from './style.module.scss';

export type loaderSize = 's' | 'm' | 'full_page';

interface LoaderProps {
  className?: string;
  size: loaderSize;
  isLoading?: boolean;
}

export const Loader = ({ className, size, isLoading = true }: LoaderProps) => {
  if (isLoading) {
    return (
      <Logo
        size='small'
        className={clsx(s[size], className)}
      />
    );
  }
  return null;
};
