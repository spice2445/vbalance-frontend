import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { AutopurchaseVBTI } from '.';

const meta: Meta<typeof AutopurchaseVBTI> = {
  title: 'features/AutopurchaseVBTI',
  component: AutopurchaseVBTI,
  decorators: [CenterDecorator]
};

export default meta;

type Story = StoryObj<typeof AutopurchaseVBTI>;

export const Default: Story = {};
