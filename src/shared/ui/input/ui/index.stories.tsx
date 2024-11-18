import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  args: {
    theme: 'large',
    placeholder: 'Some text placeholder',
    className: '',
    label: {
      before: {
        text: 'Количество:'
      },
      after: {
        text: 'USDT'
      }
    },
    error: 'Ошибка!!!',
    text: {
      size: 'm',
      font: 'additional',
      color: 'acsent',
      align: 'center'
    },
    icon: {
      size: 'm',
      variant: 'balance'
    }
  },
  argTypes: {
    theme: {
      description: 'Вариант цветовой темы для инпута',
      defaultValue: 'primary',
      options: ['primary', 'number', 'large', 'large_password'],
      control: 'select'
    },
    placeholder: {
      name: 'label',
      control: 'text',
      description: 'Текст внутри инпута',
      defaultValue: 'Введите VBT'
    },
    className: {
      description: 'Дополнительный класс для инпута',
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
