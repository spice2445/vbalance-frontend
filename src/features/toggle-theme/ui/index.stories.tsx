import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ToggleTheme } from '.';

const meta: Meta<typeof ToggleTheme> = {
  title: 'features/ToggleTheme',
  decorators: [CenterDecorator],
  component: ToggleTheme
};

export default meta;

type Story = StoryObj<typeof ToggleTheme>;

export const Default: Story = {};
