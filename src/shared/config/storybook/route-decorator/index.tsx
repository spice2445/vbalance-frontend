import { StoryFn, StoryContext } from '@storybook/react';
import { RouterProvider } from 'atomic-router-react';
import { router } from 'shared/config/router';

export const RouteDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <RouterProvider router={router}>
    <StoryComponent {...context} />
  </RouterProvider>
);
