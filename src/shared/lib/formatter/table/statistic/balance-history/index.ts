import { balanceHistory as balanceHistoryI } from 'shared/api/queries/user/statistic/balance-history';

import { date } from '../../../date';

export const balanceHistory = (item: balanceHistoryI) => ([
  {
    content: date.defaultDate(item.date),
    type: 'text',
    position: 'center'
  },
  {
    content: date.hoursAndMinutes(item.date),
    type: 'text',
    position: 'center'
  },
  {
    content: {
      content: item.sum,
      token: 'USDT'
    },
    type: 'modification',
    position: 'center'
  },
  {
    content: {
      avatar: item.user_avatar,
      name: item.user_name,
      line: item.user_line
    },
    type: 'user',
    position: 'center'
  },
  {
    content: {
      type: 'crediting_deposit',
      content: {
        id: item.id,
        percent: item.data?.append_sum,
        date: '12 месяцев'
      }
    },
    type: 'description',
    position: 'left'
  },
  {
    content: item.sum,
    type: 'number',
    label: ' USDT',
    position: 'right'
  }
]);