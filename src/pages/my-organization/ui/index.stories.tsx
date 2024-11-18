import type { StoryObj, Meta } from '@storybook/react';

import { MyOrganizationPage } from '.';

const meta: Meta<typeof MyOrganizationPage> = {
  title: 'pages/my-organization',
  component: MyOrganizationPage
};

export default meta;

type Story = StoryObj<typeof MyOrganizationPage>;

export const Default: Story = {};
