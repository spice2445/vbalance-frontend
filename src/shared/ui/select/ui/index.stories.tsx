import type { Meta, StoryObj } from '@storybook/react';
import { invoke } from '@withease/factories';
import { CenterDecorator } from 'shared/config/storybook';
import { selectFactory } from 'shared/lib/factories';

import { Select } from '.';

const optionsMock = [
  'Кошелек: 0xbf12c...xd9lgp6',
  'Кошелек: dsadsad...3434433',
  'Кошелек: 09z90c0...2342354',
  'Кошелек: 3dssadd...dsfsdfd',
  'Кошелек: fdsf...fdfdsfddfs'
];

export const {
  choosedSelect: choosedOption,
  $select: $chooseOption
} = invoke(selectFactory, {defaultValue: optionsMock[1]});

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  decorators: [CenterDecorator],
  args: {
    options: optionsMock,
    $chooseOption,
    onChoosed: choosedOption
  },
  argTypes: {
    onChoosed: {
      description: 'При клике на опцию'
    },
    $chooseOption: {
      description: 'Выбранная опция'
    },
    options: {
      defaultValue: optionsMock,
      description: 'Опции'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
