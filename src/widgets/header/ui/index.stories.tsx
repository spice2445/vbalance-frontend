import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
