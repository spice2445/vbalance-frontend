import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { SignInPage } from '.';

const meta: Meta<typeof SignInPage> = {
  title: 'pages/auth/sign-in',
  decorators: [CenterDecorator],
  component: SignInPage
};

export default meta;

type Story = StoryObj<typeof SignInPage>;

export const Default: Story = {};
