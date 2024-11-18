import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Overlay } from '.';

const meta: Meta<typeof Overlay> = {
  title: 'shared/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    className: ''
  },
  argTypes: {
    onClick: {
      description: 'Функция, которая вызовется при клике на компонент'
    },
    className: {
      description: 'Сторонний класс'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {};
