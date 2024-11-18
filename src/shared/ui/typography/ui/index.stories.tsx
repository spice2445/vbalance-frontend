import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';
import { VariantsIcon } from 'shared/ui/icon';

import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'shared/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  argTypes: {
    children: {
      description: 'Текст',
      name: 'Text',
      defaultValue: 'Hello!'
    },
    className: {
      description: 'Дополнительный класс',
      type: 'string'
    },
    size: {
      description: 'Размер текста',
      defaultValue: 'xl',
      control: 'select'
    },
    font: {
      description:
        'выбираем шрифт, от него зависит weight текста, доступные шрифты:Tektur Bold,Lato Regular,Lato Bold',
      defaultValue: 'main',
      control: 'select'
    },
    color: {
      description:
        'Цвет текста, соотвествует цветам из фигмы, по умолчанию - acsent_dark:',
      defaultValue: 'acsent_dark',
      control: 'select'
    },
    as: {
      description:
        'Какой тег использовать в тексте для семантики,если as не указан,\n'
        + 'то as подставляется взависимости от пропса size',
      control: 'select'
    },
    'icon.variant': {
      defaultValue: 'coin-1',
      description: 'Вариант иконки (Опциональное свойство)',
      options: VariantsIcon,
      control: 'select'
    },
    'icon.fill': {
      defaultValue: 'light',
      description: 'Цвет иконки (Опциональное свойство)',
      options: ['light', 'green', 'green-dark'],
      control: 'select'
    },
    'icon.onClick': {
      description: 'Функция, которая вызветс при клике на иконку'
    },
    isLoading: {
      description: 'Отображать скелетон или контент',
      type: 'boolean',
      defaultValue: false
    },
    skeletonClass: {
      description: 'Класс для скелетона'
    }
  },
  args: {
    children: 'Some custom text',
    className: '',
    size: 'm',
    font: 'main',
    color: 'acsent',
    as: 'div',
    icon: {
      variant: 'date',
      fill: 'green',
      onClick: fn()
    },
    isLoading: false,
    skeletonClass: ''
  }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
