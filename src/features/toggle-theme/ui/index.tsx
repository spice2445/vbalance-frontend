import { useUnit } from 'effector-react';
import { Theme } from 'shared/config/theme';
import { $theme, toggleTheme } from 'shared/lib/theme';
import { Icon } from 'shared/ui/icon';

import s from './style.module.scss';

export const ToggleTheme = (): JSX.Element => {
  const [theme, onToggleTheme] = useUnit([$theme, toggleTheme]);

  return (
    <button
      type='button'
      data-testid='toggle-theme'
      onClick={onToggleTheme}
      className={s.btn}
      aria-label='Toggle theme'
    >
      <Icon size='xl' variant={theme === Theme.DARK ? 'light-theme' : 'dark-theme'} fill='green' />
    </button>
  );
};
