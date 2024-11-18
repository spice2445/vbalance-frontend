import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Controllers } from './index.type';

import { Tabs } from '.';

const controllers: Controllers[] = [
  {
    children: 'Таб1',
    icon: {
      size: 'm',
      variant: 'email'
    },
    key: 'Таб1'
  },
  {
    icon: {
      size: 'm',
      variant: 'graphic'
    },
    children: 'Таб2',
    key: 'Таб2'
  },
  {
    icon: {
      size: 'm',
      variant: 'deposit'
    },
    children: 'Таб3',
    key: 'Таб3'
  }
];
const contents = [
  <div key='id-1'>Таб1</div>,
  <div key='id-2'>Таб2</div>,
  <div key='id-3'>Таб3</div>
];

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    controllers,
    className: '',
    actionRight: '',
    contents
  },
  argTypes: {
    controllers: {
      description: 'Кнопки для управления табами'
    },
    contents: {
      description: 'Компоненты контент'
    },
    className: {
      description: 'Дополнительный класс для контейнера табов',
      type: 'string'
    },
    actionRight: {
      description: 'Контент c правой стороны'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};
