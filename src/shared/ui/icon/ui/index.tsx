import { clsx } from 'clsx';

import {
  IconProps,
  SIZES_CLASSES,
  SIZES_ANIMATION_CLASSES,
  icons
} from './index.type';
import s from './style.module.scss';

export const Icon = ({
  fill = 'green',
  size = 'm',
  className,
  onClick,
  variant,
  isAnimated = false
}: IconProps) => {
  const mods = {
    [SIZES_ANIMATION_CLASSES[size]]: isAnimated,
    [SIZES_CLASSES[size]]: !isAnimated
  };

  const Tag = icons[variant];

  return (
    <Tag
      onClick={onClick}
      className={clsx(s.icon, mods, [className, s[fill]])}
    />
  );
};
