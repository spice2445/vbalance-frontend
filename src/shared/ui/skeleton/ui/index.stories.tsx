import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

import { Skeleton } from '.';

const ChildComponents = <div><Typography>Text</Typography></div>;

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    isLoading: true,
    children: ChildComponents,
    skeletonClass: s.storybook
  },
  argTypes: {
    children: {
      description: 'Что отображать после лоадера'
    },
    isLoading: {
      description: 'Отображать скелетон или контент',
      type: 'boolean',
      defaultValue: false
    },
    skeletonClass: {
      description:
        'Класс для обвёртки скелетона. Если не указан, то скелетон будет по ширине и высоте 100%'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};
