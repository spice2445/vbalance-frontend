import { Meta, StoryObj } from '@storybook/react';
import { invoke } from '@withease/factories';
import { createEffect } from 'effector';
import { CenterDecorator } from 'shared/config/storybook';
import { loadingInViewFactory, scrlollingPaginationFactory } from 'shared/lib/factories';
import { getTableMockFn, getTableMockProps } from 'shared/lib/table';

import { TableContentProps } from './components';
import { TableProps } from './index.type';

import { Table } from '.';

const mockTableContent: TableContentProps = [
  [
    {
      content: {
        avatar: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Dr.-Dre-getty-H-2023.jpg?w=1296',
        name: 'Екатерина Волкова'
      },
      type: 'user',
      position: 'left'
    },
    {
      content: 'Основатель III',
      type: 'text',
      color: 'acsent',
      position: 'center'
    },
    {
      content: '1',
      type: 'text',
      color: 'acsent',
      position: 'center'
    },
    {
      content: '189',
      type: 'text',
      color: 'acsent',
      position: 'center'
    },
    {
      content: '438',
      type: 'text',
      color: 'acsent',
      position: 'center'
    },
    {
      content: '508 120 USDT',
      type: 'text',
      position: 'center'
    },
    {
      content: {
        link: '',
        linkTelegram: ''
      },
      type: 'action_hierarchy',
      position: 'center'
    }
  ]
];

const {
  $dataRanOut: $dataRanOutMock,
  $page: $tablePageMock,
  dataRanedOut: dataRanedOutMock,
  reachedEndOf: reachedEndOfTableMock
} = invoke(scrlollingPaginationFactory);

type getTableUsersPropsFx = Pick<getTableMockProps, 'page'>;
const getTableUsersFx = createEffect(({ page }: getTableUsersPropsFx) => getTableMockFn({
  page,
  dataRanedOut: dataRanedOutMock,
  mock: mockTableContent
}));

const {
  loaddedData,
  $data: $tableMock
} = invoke(loadingInViewFactory<getTableUsersPropsFx, any[][]>, {
  effect: getTableUsersFx,
  source: {
    page: $tablePageMock
  }
});

const mockTable: TableProps = {
  head: [
    {
      content: 'Пользователь',
      isFilterable: true,
      position: 'left'
    },
    {
      content: 'Статус',
      isFilterable: true
    },
    {
      content: 'Линия',
      isFilterable: true
    },
    {
      content: 'Первая линия',
      isFilterable: true
    },
    {
      content: 'Организация',
      isFilterable: true
    },
    {
      content: 'Товарооборот',
      isFilterable: true
    },
    {
      content: 'Действия'
    }
  ],
  gridX: '243px 129px 97px 154px 151px 160px 282px',
  gridY: '68px',
  $content: $tableMock,
  $isDataRanedOut: $dataRanOutMock,
  reachedEndOfTable: reachedEndOfTableMock,
  loaddedTable: loaddedData
};

const meta: Meta<typeof Table> = {
  title: 'shared/Table',
  component: Table,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    // ...mockTable
  },
  argTypes: {
  }
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  decorators: [(Story) => (
    <Story {...mockTable} />
  )]
};
