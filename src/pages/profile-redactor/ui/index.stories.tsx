import type { StoryObj, Meta } from '@storybook/react';

import { ProfileRedactorPage } from '.';

const meta: Meta<typeof ProfileRedactorPage> = {
  title: 'pages/profile-redactor',
  component: ProfileRedactorPage
};

export default meta;

type Story = StoryObj<typeof ProfileRedactorPage>;

export const ProfileRedactor: Story = {};
