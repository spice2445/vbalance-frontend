import type { StoryObj, Meta } from '@storybook/react';

import { InvestmentsArb } from '.';

const meta: Meta<typeof InvestmentsArb> = {
  title: 'pages/investments/arb',
  component: InvestmentsArb
};

export default meta;

type Story = StoryObj<typeof InvestmentsArb>;

export const Default: Story = {};
