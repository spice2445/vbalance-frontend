import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ScheduleCard } from '.';

const meta: Meta<typeof ScheduleCard> = {
  title: 'entities/academy/ScheduleCard',
  tags: ['autodocs'],
  component: ScheduleCard,
  decorators: [CenterDecorator],
  args: {
    name: 'Путь к большим деньгам',
    date: 1712405700,
    link: '',
    isLoading: false
  },
  argTypes: {
    link: {
      description: 'ссылка на zoom-комнату',
      options: 'string'
    },
    name: {
      description: 'Заголовок',
      options: 'string'
    },
    date: {
      description: 'Дата, когда состоится встреча',
      options: 'string'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ScheduleCard>;

export const Default: Story = {};
