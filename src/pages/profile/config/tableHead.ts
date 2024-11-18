import { TableHeadProps } from 'shared/ui/table';

export const tableHead: TableHeadProps[] = [
  {
    content: 'Дата',
    isFilterable: true,
    position: 'left'
  },
  {
    content: 'Время'
  },
  {
    content: 'Сумма',
    isFilterable: true
  },
  {
    content: 'Пользователь',
    isFilterable: true,
    position: 'left'
  },
  {
    content: 'Описание',
    position: 'left'
  },
  {
    content: 'Остаток',
    position: 'left'
  }
];

export const tableGrid = {
  x: '12.74% 7.1% 10.539% 24.83% 30.47% 14.321%',
  y: '105px'
};
// 1224