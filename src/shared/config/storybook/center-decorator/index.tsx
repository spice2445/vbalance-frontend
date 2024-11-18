import { StoryFn, StoryContext } from '@storybook/react';

import s from './style.module.scss';

export const CenterDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <div className={s.center}>
    <div className={s.content}>
      <StoryComponent {...context} />
    </div>
  </div>
);
