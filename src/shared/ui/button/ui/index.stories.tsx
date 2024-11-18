import type { Meta, StoryObj } from '@storybook/react';
import {
  within, userEvent, expect, fn
} from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';
import { VariantsIcon, sizesIcon } from 'shared/ui/icon';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    as: 'button',
    icon: {
      size: 'xs',
      variant: 'user'
    },
    className: '',
    children: 'Открыть страницу профиля',
    theme: 'primary',
    isLoading: false,
    isActive: false
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
  argTypes: {
    theme: {
      description: 'Вариант цветовой темы для кнопки',
      defaultValue: 'primary',
      options: [
        'primary', 'transparent', 'white', 'second',
        'mini_icon', 'big_icon', 'tab', 'menu', 'select'
      ],
      control: 'select'
    },
    children: {
      name: 'label',
      control: 'text',
      description: 'Текст внутри кнопки',
      defaultValue: 'Открыть страницу профиля'
    },
    className: {
      description: 'Дополнительный класс для кнопки'
    },
    'icon.variant': {
      defaultValue: 'coin-1',
      description: 'Вариант иконки',
      options: VariantsIcon,
      control: 'select'
    },
    'icon.size': {
      defaultValue: 's',
      description: 'Размер иконки',
      options: sizesIcon,
      control: 'select'
    },
    as: {
      defaultValue: 'button',
      description: 'Размер иконки',
      control: 'text'
    },
    isLoading: {
      description: 'Загружается ли кнокпа или нет(на случай, если в кнопке используются данные из бека)'
    },
    isActive: {
      description: 'Дополнительный класс для кнопки'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
