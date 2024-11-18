import {
  ComponentProps,
  ElementType
} from 'react';
import { IconSettingsOther } from 'shared/ui/icon';
import { SharedSkeleton } from 'shared/ui/skeleton';

import s from './style.module.scss';

export type ThemeButton = 'primary' | 'transparent' | 'white' | 'second' |
'mini_icon' | 'big_icon' | 'tab' | 'menu' | 'select';

export interface ButtonOwnProps<AS extends ElementType = ElementType> extends SharedSkeleton {
  className?: string;
  theme?: ThemeButton;
  icon?: IconSettingsOther;
  as?:AS;
  isActive?: boolean;
  disabled?: boolean
}

export type ButtonProps<AS extends ElementType> = ButtonOwnProps<AS> & Omit<ComponentProps<AS>, keyof ButtonOwnProps>

export const sizesButton = (() => {
  const sizes:Record<string, string> = {
    menu: s.menu_size,
    mini_icon: s.mini_icon_size,
    big_icon: s.big_icon_size
  };

  return new Proxy(sizes, {
    get: (target, property:string) => (property in target ? target[property] : s.default_size)
  });
})();
