import { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    className: '',
    size: 'full_page',
    isLoading: true
  },
  argTypes: {
    className: {
      description: 'Сторонний класс',
      control: 'string'
    },
    size: {
      description: 'Какого размера спиннер лоадер',
      options: ['s', 'm', 'full_page'],
      defaultValue: 's',
      control: 'select'
    },

    isLoading: {
      description: 'Отображать компонент или нет',
      defaultValue: true,
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
