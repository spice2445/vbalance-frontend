import type { StoryObj, Meta } from '@storybook/react';

import { DirectionsPage } from '.';

const meta: Meta<typeof DirectionsPage> = {
  title: 'pages/directions',
  component: DirectionsPage
};

export default meta;

type Story = StoryObj<typeof DirectionsPage>;

export const Default: Story = {};
