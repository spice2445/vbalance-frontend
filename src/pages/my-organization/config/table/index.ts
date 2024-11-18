import { TableHeadProps } from 'shared/ui/table';

export const tableUsersHead: TableHeadProps[] = [
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
];
export const tableUserSizeX = '243px 129px 97px 154px 151px 160px 282px';
export const tableUserSizeY = '68px';
