import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ShowNotification } from '.';

const meta: Meta<typeof ShowNotification> = {
  title: 'features/ShowNotification',
  decorators: [CenterDecorator],
  component: ShowNotification
};

export default meta;

type Story = StoryObj<typeof ShowNotification>;

export const Default: Story = {};
