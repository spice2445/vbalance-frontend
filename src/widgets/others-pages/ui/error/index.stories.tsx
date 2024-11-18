import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from '.';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Default: Story = {};
