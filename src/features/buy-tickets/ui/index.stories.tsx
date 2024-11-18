import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { TICKETS_MODAL_KEY } from '../config';

import { TicketsModal } from '.';

const meta: Meta<typeof TicketsModal> = {
  title: 'features/BuyTickets',
  component: TicketsModal,
  decorators: [CenterDecorator],
  args: {
    keyModal: TICKETS_MODAL_KEY,
    modalStep: 1
  },
  argTypes: {
    keyModal: {
      control: 'text',
      description: 'Ключ для модального окна, константа',
      defaultValue: TICKETS_MODAL_KEY
    },
    modalStep: {
      control: 'number',
      description: 'На каком уровне',
      defaultValue: 1
    }
  }
};

export default meta;

type Story = StoryObj<typeof TicketsModal>;

export const Default: Story = {};
