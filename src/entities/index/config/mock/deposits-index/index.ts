import { TableContentProps } from 'shared/ui/table';

export const DEPOSITS_INDEX_MOCK: TableContentProps = [
    [
      {
        content: '4 сентября 2023',
        type: 'text',
        position: 'center'
      },
      {
        content: 'Покупка',
        type: 'text',
        position: 'center',
        color: 'positive'
      },
      {
        content: 'Накопительная',
        type: 'text',
        position: 'center',
        color: 'main'
      },
      {
        content: 12.88,
        type: 'number_indicator',
        label: ' VBTI',
        position: 'center'
      },
      {
        content: -36.96,
        type: 'number_indicator',
        label: ' USDT',
        position: 'center'
      },
      {
        content: 2.87,
        type: 'number',
        label: ' USDT',
        position: 'center'
      },
      {
        content: '-',
        type: 'text',
        position: 'center'
      },
      {
        content: 2.33,
        type: 'number',
        label: ' USDT',
        position: 'center'
      }
    ]
];
