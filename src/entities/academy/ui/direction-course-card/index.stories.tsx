import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import previewPng from './assets/preview.png';

import { DirectionCourseCard } from '.';

const meta: Meta<typeof DirectionCourseCard> = {
  title: 'entities/academy/DirectionCourseCard',
  component: DirectionCourseCard,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    direction: 'Capital',
    name: 'Линия жизни',
    short_description: 'Описание направление, тут какой-то текст рыба',
    url: '#',
    image: previewPng,
    isLoading: true
  },
  argTypes: {
    direction: {
      description: 'текст после точки'
    },
    isLoading: {
      description: 'загружается ли компонент',
      control: 'boolean'
    },
    image: {
      description: 'картинка для превью'
    },
    name: {
      description: 'название направления'
    },
    short_description: {
      description: 'описание направления'
    },
    url: {
      description: 'ссылка на страницу направления'
    }
  }
};

export default meta;

type Story = StoryObj<typeof DirectionCourseCard>;

export const Default: Story = {};
