import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';

import { Image } from '.';

const link = 'https://www.rollingstone.com/wp-content/uploads/2020/10/10025-01E-JC-white_group_4559_sRGB.jpg?w=1581&h=1054&crop=1';

const meta: Meta<typeof Image> = {
  title: 'shared/Image',
  component: Image,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  args: {
    src: link,
    className: '',
    isLoading: true,
    skeletonClass: '',
    lazyLoad: true
  },
  argTypes: {
    className: {
      description: 'Класс для image'
    },
    isLoading: {
      description: 'Отображать скелетон или контент',
      type: 'boolean',
      defaultValue: true
    },
    skeletonClass: {
      description: 'Класс для скелетона'
    },
    lazyLoad: {
      description: 'загружать, когда в области видимости или нет'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  decorators: [(Story) => (
    <div style={{ width: '300px', height: '300px' }}>
      <Story />
    </div>
  )]
};
