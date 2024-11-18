import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ByEmail } from '.';

const meta: Meta<typeof ByEmail> = {
  title: 'features/sign-in',
  decorators: [CenterDecorator],
  component: ByEmail
};

export default meta;

type Story = StoryObj<typeof ByEmail>;

export const Default: Story = {};
