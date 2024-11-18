import { StoryFn, StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n-tests';

export const I18NextDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <I18nextProvider i18n={i18n}>
    <StoryComponent {...context} />
  </I18nextProvider>
);
