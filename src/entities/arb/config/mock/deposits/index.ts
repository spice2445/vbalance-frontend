import { TableContentProps } from 'shared/ui/table';

export const DEPOSITS_ARB_MOCK: TableContentProps = [
  [
    {
      content: '4 февраля 2024',
      type: 'text',
      position: 'left'
    },
    {
      content: 'Ожидание',
      type: 'text',
      position: 'center',
      color: 'acsent'
    },
    {
      content: '18 месяцев',
      type: 'text',
      position: 'center',
      color: 'acsent_dark',
      font: 'additional'
    },
    {
      content: 1_000, 
      label: ' USDT',
      type: 'number',
      position: 'center'
    },
    {
      content: 8,
      label: '%',
      type: 'number',
      position: 'center',
      color: 'acsent_dark'
    },
    {
      content: '7 марта 2026',
      type: 'text',
      position: 'center'
    },
    {
      content: {
          propsEdit: {
          isDisabled: true
          },
          propsWithdraw: {
          isDisabled: false
          }
      },
      type: 'action_deposit',
      position: 'center'
    }
  ]
];