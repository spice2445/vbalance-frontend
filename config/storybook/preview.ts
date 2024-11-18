import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import {
  I18NextDecorator,
  RouteDecorator,
  SuspenseDecorator,
  ThemeDecorator,
  WagmiDecorator
} from '../../src/shared/config/storybook';

const preview: Preview = {
  globalTypes: {
    scheme: {
      title: 'Scheme',
      description: 'Select light or dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirrow',
        items: ['light', 'dark'],
        dynamicTitle: true
      }

    }
  },
  decorators: [
    WagmiDecorator,
    ThemeDecorator,
    RouteDecorator,
    I18NextDecorator,
    SuspenseDecorator
  ],
  parameters: {
    layout: 'fullscreen'
  }
};

export default preview;
