import clsx from 'clsx';
import { Typography } from 'shared/ui/typography';

import { VbalanceTitleProps } from './index.type';
import s from './style.module.scss';

export const VbalanceTitle = ({
  title,
  size,
  isLoading,
  className,
  skeletonClass
}:VbalanceTitleProps) => (
  <Typography
    isLoading={isLoading}
    skeletonClass={skeletonClass}
    size={size}
    color='acsent'
    className={clsx(s.title, className)}
  >
    V
    <Typography
      className={className}
      size={size}
      color='main'
      as='span'
    >
      BALANCE
    </Typography>
    .
    {title.toLocaleUpperCase()}
  </Typography>
);
