import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { VbalanceTitle } from '.';

const meta: Meta<typeof VbalanceTitle> = {
  title: 'shared/VbalanceTitle',
  component: VbalanceTitle,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  args: {
    title: 'Brinkmann',
    size: 'm',
    isLoading: false,
    skeletonClass: ''
  },
  argTypes: {
    title: {
      description: 'Заголовок после точки',
      defaultValue: 'Brinkmann',
      control: 'select'
    },
    size: {
      description: 'Размер шрифта',
      defaultValue: 's',
      control: 'select'
    },
    isLoading: {
      description: 'Отображать скелетон или контент',
      type: 'boolean'
    },
    skeletonClass: {
      description: 'Класс для скелетона'
    }
  }
};

export default meta;

type Story = StoryObj<typeof VbalanceTitle>;

export const Default: Story = {};
