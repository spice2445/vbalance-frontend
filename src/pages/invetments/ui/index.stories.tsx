import type { StoryObj, Meta } from '@storybook/react';

import { Investments } from '.';

const meta: Meta<typeof Investments> = {
  title: 'pages/investments',
  component: Investments
};

export default meta;

type Story = StoryObj<typeof Investments>;

export const Default: Story = {};
