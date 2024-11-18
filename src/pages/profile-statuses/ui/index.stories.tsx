import type { StoryObj, Meta } from '@storybook/react';

import { ProfileStatusesPage } from '.';

const meta: Meta<typeof ProfileStatusesPage> = {
  title: 'pages/profile/statuses',
  component: ProfileStatusesPage
};

export default meta;

type Story = StoryObj<typeof ProfileStatusesPage>;

export const Default: Story = {};
