import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { SignUpPage } from '.';

const meta: Meta<typeof SignUpPage> = {
  title: 'pages/auth/sign-up',
  decorators: [CenterDecorator],
  component: SignUpPage
};

export default meta;

type Story = StoryObj<typeof SignUpPage>;

export const Default: Story = {};
