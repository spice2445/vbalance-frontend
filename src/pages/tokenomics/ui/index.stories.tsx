import type { StoryObj, Meta } from '@storybook/react';

import { TokenomicsPage } from '.';

const meta: Meta<typeof TokenomicsPage> = {
  title: 'pages/tokenomics',
  component: TokenomicsPage
};

export default meta;

type Story = StoryObj<typeof TokenomicsPage>;

export const tokenomics: Story = {};
