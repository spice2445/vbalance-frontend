import type { StoryObj, Meta } from '@storybook/react';

import { DirectionsMenuPage } from '.';

const meta: Meta<typeof DirectionsMenuPage> = {
  title: 'pages/directions-menu',
  component: DirectionsMenuPage
};

export default meta;

type Story = StoryObj<typeof DirectionsMenuPage>;

export const Default: Story = {};
