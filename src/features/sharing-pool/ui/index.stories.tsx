import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { SharingPool } from '.';

const meta: Meta<typeof SharingPool> = {
  title: 'features/SharingPool',
  decorators: [CenterDecorator],
  component: SharingPool
};

export default meta;

type Story = StoryObj<typeof SharingPool>;

export const Default: Story = {};
