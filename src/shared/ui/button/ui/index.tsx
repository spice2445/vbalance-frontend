import { Link } from 'atomic-router-react';
import { clsx } from 'clsx';
import { ElementType } from 'react';
import { Icon } from 'shared/ui/icon';
import { Skeleton } from 'shared/ui/skeleton';

import { ButtonProps, sizesButton } from './index.type';
import s from './style.module.scss';

const defaultElement = 'button';

export const Button = <AS extends ElementType = typeof defaultElement>({
  className = '',
  children,
  theme = 'primary',
  icon,
  as,
  isLoading,
  skeletonClass,
  isActive = false,
  disabled,
  ...otherProps
}:ButtonProps<AS>) => {
  const TagName = as || defaultElement;
  const isAnimatedIcon = !theme.includes('icon');

  if (isLoading) {
    return (
      <Skeleton
        isLoading
        skeletonClass={clsx(sizesButton[theme], skeletonClass)}
      />
    );
  }

  return (
    <TagName
      target={as === Link && typeof otherProps.to === 'string' && '_blank'}
      className={clsx(
        s.buttonBase,
        [className, s[theme]],
        { 
          [s.btnWithoutBtn]: !icon,
          [s.disabled]: disabled
        }
      )}
      aria-expanded={isActive}
      {...otherProps}
    >
      {icon?.variant
      && (
        <Icon
          fill='light'
          variant={icon.variant}
          size={icon.size}
          isAnimated={isAnimatedIcon}
        />
      )}

      {children}
    </TagName>
  );
};
