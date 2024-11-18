import { clsx } from 'clsx';
import { FC } from 'react';
import { Icon } from 'shared/ui/icon';
import { Skeleton } from 'shared/ui/skeleton';

import { htmlTagSize, TypographyProps } from './index.type';
import s from './style.module.scss';

export const Typography: FC<TypographyProps> = ({
  className = '',
  size = 's',
  font = 'main',
  color = 'acsent_dark',
  align = 'left',
  icon,
  as,
  children,
  isLoading,
  skeletonClass,
  isNotFlex = false,
  isTextLine = false,
  ...otherProps
}) => {
  const TypographyAs = as ?? htmlTagSize[size];
  const classes = [s[size], s[`font_${font}`], s[`color_${color}`], s[align], className];

  if (isLoading) {
    return (
      <Skeleton
        isLoading={isLoading}
        skeletonClass={clsx(s[`skeleton_${size}`], skeletonClass)}
      />
    );
  }

  return (
    <TypographyAs
      className={clsx({
        [s.base]: !isNotFlex,
        [s.text_line]: isTextLine
      }, classes)}
      {...otherProps}
    >
      {icon && (
        <Icon
          fill={icon.fill}
          variant={icon.variant}
          onClick={icon.onClick}
          size={icon.size || 'm'}
          className={clsx({
            [s.text_line_icon]: isTextLine
          })}
        />
      )}

      {children}
    </TypographyAs>
  );
};
