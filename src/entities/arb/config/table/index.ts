import { TableHeadProps } from 'shared/ui/table';

export const tableArbHead: TableHeadProps[] = [
  {
    content: 'Дата',
    isFilterable: true,
    position: 'left'
  },
  {
    content: 'Статус',
    isFilterable: true
  },
  {
    content: 'Срок депозита',
    isFilterable: true
  },
  {
    content: 'Сумма депозита',
    isFilterable: true
  },
  {
    content: 'Начисления',
    isFilterable: true
  },
  {
    content: 'Дата вывода',
    isFilterable: true
  },
  {
    content: 'Действия'
  }

];

export const tableArbSizeX = '157px 115px 154px 166px 141px 161px 347px';
