import type { Meta, StoryObj } from '@storybook/react';

import s from './style.module.scss';

import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Сторонний класс'
    }
  },
  args: {
    className: s.storybook
  }
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
