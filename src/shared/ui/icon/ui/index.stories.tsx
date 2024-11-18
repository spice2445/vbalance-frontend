import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';

import { VariantsIcon } from './index.type';

import { Icon } from '.';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    variant: 'balance',
    onClick: fn(),
    size: 'm',
    fill: 'green'
  },
  argTypes: {
    variant: {
      description: 'Вариант иконки',
      defaultValue: 'confrim',
      options: VariantsIcon,
      control: {
        type: 'select'
      }
    },
    fill: {
      description: 'Цвет иконки',
      defaultValue: 'green',
      options: ['light', 'green', 'green-dark'],
      control: {
        type: 'radio'
      }
    },
    size: {
      description: 'Размер иконки',
      defaultValue: 's',
      control: {
        type: 'select'
      }
    },
    onClick: {
      description: 'Функция, которая вызветс при клике на иконку'
    },
    className: {
      description: 'Сторонний класс'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
