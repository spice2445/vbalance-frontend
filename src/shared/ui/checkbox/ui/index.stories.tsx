import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';
import { Typography } from 'shared/ui/typography';

import { Checkbox } from '.';

const Text1 = <Typography>Hello</Typography>;

const meta: Meta<typeof Checkbox> = {
  title: 'shared/Checkbox',
  component: Checkbox,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    // classNames: '',
    isChoose: false,
    onChange: fn(),
    children: Text1
  },
  argTypes: {
    classNames: {
      description: 'Сторонние классы'
    },
    isChoose: {
      description: 'Выбран чекбокс или нет',
      defaultValue: false,
      control: 'boolean'
    },

    onChange: {
      description: 'функция для изменения выбора CheckBox`а '
    },

    children: {
      name: 'text',
      description: 'Текст справа от чекбокса'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
