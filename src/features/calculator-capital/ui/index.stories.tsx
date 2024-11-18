import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { CalculatorCapital } from '.';

const meta: Meta<typeof CalculatorCapital> = {
  title: 'features/CalculatorCapital',
  component: CalculatorCapital,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof CalculatorCapital>;

export const Default: Story = {};
