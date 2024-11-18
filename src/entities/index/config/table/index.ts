import { TableHeadProps } from 'shared/ui/table';

export const tableIndexHead: TableHeadProps[] = [
  {
    content: 'Дата',
    isFilterable: true,
    position: 'left'
  },
  {
    content: 'Операция'
  },
  {
    content: 'Программа'
  },
  {
    content: 'Количество VBTI',
    isFilterable: true
  },
  {
    content: 'Количество USDT',
    isFilterable: true
  },
  {
    content: 'Курс VBTI',
    isFilterable: true
  },
  {
    content: 'Результат',
    isFilterable: true
  },
  {
    content: 'Средняя цена'
  }
];

export const tableIndexSizeX = '157px 135px 175px 178px 178px 132px 130px 147px';