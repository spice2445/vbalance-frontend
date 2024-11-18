import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { OrganizationBalance } from '.';

const meta: Meta<typeof OrganizationBalance> = {
  title: 'entities/organization/Balance',
  component: OrganizationBalance,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    className: ''
  },
  argTypes: {
    className: {
      description: 'класс для враппера карточки',
      defaultValue: '',
      options: 'string'
    }
  }
};

export default meta;

type Story = StoryObj<typeof OrganizationBalance>;

export const Default: Story = {};
