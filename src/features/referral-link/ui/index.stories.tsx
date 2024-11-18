import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ReferralUser } from '.';

const meta: Meta<typeof ReferralUser> = {
  title: 'features/ReferralLink',
  decorators: [CenterDecorator],
  component: ReferralUser
};

export default meta;

type Story = StoryObj<typeof ReferralUser>;

export const Default: Story = {};
