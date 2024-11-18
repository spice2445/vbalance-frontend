import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { ArbitrageDeposit } from '.';

const meta: Meta<typeof ArbitrageDeposit> = {
  title: 'features/ArbitrageDeposit',
  component: ArbitrageDeposit,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof ArbitrageDeposit>;

export const Default: Story = {};
