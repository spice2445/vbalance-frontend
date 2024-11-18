import type { StoryObj, Meta } from '@storybook/react';

import { ProfilePage } from '.';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/profile',
  component: ProfilePage
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Profile: Story = {};
