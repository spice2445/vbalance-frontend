import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { TelegramAuth } from '.';

const meta: Meta<typeof TelegramAuth> = {
  title: 'features/TelegramAuth',
  component: TelegramAuth,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  argTypes: {
    openConditionsModal: {
      description: 'Отображать ли модалку условий до вызова авторизации гугла'
    }
  }
};

export default meta;

type Story = StoryObj<typeof TelegramAuth>;

export const Default: Story = {};
