import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';
import { Button } from 'shared/ui/button';

import { Card } from '.';

const ButtonComponent = (
  <div style={{
    width: '100%',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '150px'
  }}
  >
    <Button>button 1</Button>
    <Button>button 2</Button>
  </div>
);

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    variant: 'center',
    children: ButtonComponent,
    className: '',
    classNameContent: '',
    onClick: fn(),
    title: {
      variantIcon: 'balance',
      text: 'Example Title',
      align: 'center'
    }
  },
  argTypes: {
    variant: {
      description: 'Вариант карточки',
      defaultValue: 'base',
      control: 'select',
      options: ['base', 'center', 'acsent']
    },
    className: {
      description: 'Сторонний класс'
    },
    classNameContent: {
      description: 'Сторонний класс для контента'
    },
    children: {
      name: 'content',
      description: 'Контент карточки'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
