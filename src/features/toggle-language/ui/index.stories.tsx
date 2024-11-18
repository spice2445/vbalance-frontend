import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ToggleLanguage } from '.';

const meta: Meta<typeof ToggleLanguage> = {
  title: 'features/ToggleLanguage',
  decorators: [CenterDecorator],
  component: ToggleLanguage
};

export default meta;

type Story = StoryObj<typeof ToggleLanguage>;

export const Default: Story = {};
