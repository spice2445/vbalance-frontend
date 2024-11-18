import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ActualCourseCard } from '.';

const meta: Meta<typeof ActualCourseCard> = {
  title: 'entities/academy/ActualCourseCard',
  tags: ['autodocs'],
  component: ActualCourseCard,
  decorators: [CenterDecorator],
  args: {
    url: 'vimeo/640499893',
    title: 'Cryptoclass с Романом Зубок',
    duration: '3660',
    date: Number(new Date()),
    isLoading: false
  },
  argTypes: {
    url: {
      description: 'ссылка на видео',
      options: 'string'
    },
    title: {
      description: 'Заголовок',
      options: 'string'
    },
    duration: {
      description: 'Время длительности видео в секундах',
      options: 'string'
    },
    date: {
      description: 'Дата, когда был выложен урок, милисекундах',
      options: 'number'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ActualCourseCard>;

export const Default: Story = {};
