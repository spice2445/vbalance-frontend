import { usersListI } from 'shared/api/queries/user/statistic/users-list';

import { string } from '../../../string/';

export const usersList = (item: usersListI) => ([
  {
    content: {
      avatar: item.avatar,
      name: item.name
    },
    type: 'user',
    position: 'left'
  },
  {
    content: string.statusProfile(item.status),
    type: 'text',
    font: 'additional',
    position: 'center'
  },
  {
    content: item.line,
    type: 'number',
    font: 'additional',
    position: 'center'
  },
  {
    content: item.firstLineCount,
    type: 'number',
    font: 'additional',
    position: 'center'
  },
  {
    content: item.organizationCount,
    type: 'number',
    font: 'additional',
    position: 'center'
  },
  {
    content: item.organizationTotalSailSum,
    type: 'number',
    label: ' USDT',
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
]);