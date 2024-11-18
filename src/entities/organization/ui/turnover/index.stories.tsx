import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Turnover } from '.';

const meta: Meta<typeof Turnover> = {
  title: 'entities/organization/Turnover',
  component: Turnover,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof Turnover>;

export const Default: Story = {};
