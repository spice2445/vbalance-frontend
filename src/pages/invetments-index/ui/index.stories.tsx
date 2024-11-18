import type { StoryObj, Meta } from '@storybook/react';

import { InvestmentsIndex } from '.';

const meta: Meta<typeof InvestmentsIndex> = {
  title: 'pages/investments/index',
  component: InvestmentsIndex
};

export default meta;

type Story = StoryObj<typeof InvestmentsIndex>;

export const Default: Story = {};
