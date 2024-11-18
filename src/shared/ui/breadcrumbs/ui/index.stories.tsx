import type { StoryObj, Meta } from '@storybook/react';

import { BreadCrumbs } from '.';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'shared/BreadCrumbs',
  component: BreadCrumbs
};

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const Default: Story = {};
