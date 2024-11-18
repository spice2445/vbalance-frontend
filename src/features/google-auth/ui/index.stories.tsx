import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { GoogleAuth } from '.';

const meta: Meta<typeof GoogleAuth> = {
  title: 'features/GoogleAuth',
  component: GoogleAuth,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  argTypes: {
    openConditionsModal: {
      description: 'Отображать ли модалку условий до вызова авторизации гугла'
    }
  }
};

export default meta;

type Story = StoryObj<typeof GoogleAuth>;

export const Default: Story = {};
