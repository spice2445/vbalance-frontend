import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ConnectWallet } from '.';

const meta: Meta<typeof ConnectWallet> = {
  title: 'features/ConnectWallet',
  component: ConnectWallet,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  args: {
    size: 'small'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Размер кнопки'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ConnectWallet>;

export const Default: Story = {};
