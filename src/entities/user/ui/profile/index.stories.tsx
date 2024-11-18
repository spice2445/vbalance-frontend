import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ProfileCard } from '.';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/user/ProfileCard',
  component: ProfileCard,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
