import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'shared/ui/card';

// import { LineageSwitcher } from '.';

const H1 = () => <h1>Text!</h1>;

const meta: Meta<typeof H1> = {
  title: 'features/LineageSwitcher',
  component: H1
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Default: Story = {
  decorators: [(Story) => (
    <div style={{ padding: '50px' }}>
      <Card variant='base'>
        <Story />
      </Card>
    </div>
  )]
};
