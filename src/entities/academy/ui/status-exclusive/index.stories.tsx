import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';
import { StatusUser } from 'shared/types/user-statuses';

import { StatusExclusiveCard } from '.';

const meta: Meta<typeof StatusExclusiveCard> = {
  title: 'entities/academy/StatusExclusiveCard',
  tags: ['autodocs'],
  component: StatusExclusiveCard,
  decorators: [CenterDecorator],
  args: {
    needStatus: StatusUser.FOUNDER,
    titleCourse: 'Мастер влияния',
    description: 'Как влиять и говорить так, чтобы следовали за вами? Взаимодействовать и менять состояние окружающих.',
    idCourse: 1,
    maskImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-67dyWe5stlgMQoBsa0kAgWTZYmhvokMLUsCbBZ-bRopoA272',
    isLoading: false
  },
  argTypes: {
    needStatus: {
      description: 'Какой статус нужен, чтобы пройти на урок',
      options: 'string'
    },
    titleCourse: {
      description: 'Заголовок урока',
      options: 'string'
    },
    description: {
      description: 'Описание урока',
      options: 'string'
    },
    idCourse: {
      description: 'ID курсаЯ, нужен для ссылки',
      options: 'string'
    },
    maskImg: {
      description: 'Изображение маска слева от всего контента',
      options: 'string'
    },
    isLoading: {
      description: 'Идёт загрузка данных или нет',
      options: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof StatusExclusiveCard>;

export const Default: Story = {};
