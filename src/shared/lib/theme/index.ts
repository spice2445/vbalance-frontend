import {
  createEffect, createEvent, createStore, sample
} from 'effector';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme
} from 'shared/config/theme';

export const $theme = createStore<Theme>(
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT) as Theme
);

export const toggleTheme = createEvent();

export const saveThemeLocalStorage = createEffect((newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
});

sample({
  clock: toggleTheme,
  source: [$theme],
  fn: ([theme]) => (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK),
  target: [$theme, saveThemeLocalStorage]
});

export const getThemeColor = (variable: string, theme: Theme): string => {
  const targetElement = theme === Theme.DARK ? document.querySelector('.dark') : document.documentElement;

  if (!targetElement) return '';

  const style = getComputedStyle(targetElement);

  return style.getPropertyValue(variable).trim();
};