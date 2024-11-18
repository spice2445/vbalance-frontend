import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'entities/user/Avatar',
  component: Avatar,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
