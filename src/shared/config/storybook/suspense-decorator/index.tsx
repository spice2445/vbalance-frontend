import { StoryFn, StoryContext } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <Suspense>
    <StoryComponent {...context} />
  </Suspense>
);
