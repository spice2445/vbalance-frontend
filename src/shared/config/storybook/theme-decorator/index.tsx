import { StoryFn, StoryContext } from '@storybook/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Theme } from 'shared/config/theme';

import s from './style.module.scss';

interface FlexProps {
  children: ReactNode;
  theme: Theme;
}

const Flex = ({ theme, children }: FlexProps) => (
  <div className={clsx('app', {}, [theme])}>
    <div className={s.flex}>{children}</div>
  </div>
);

export const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
  const { scheme } = context.globals;

  const theme = scheme === 'light' ? Theme.LIGHT : Theme.DARK;

  return (
    <Flex theme={theme}>
      <StoryComponent {...context} />
    </Flex>
  );
};
