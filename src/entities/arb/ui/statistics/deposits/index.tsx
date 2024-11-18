import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { api } from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';

import { type depositsArb } from '../../../config';
import common from '../common.module.scss';

import { Column } from './column';
import s from './style.module.scss';

const columns: depositsArb[] = [
  {
    title: 'Депозиты'
  },
  {
    title: 'Начисления',
    subtitle: 'в неделю'
  },
  {
    title: 'Пулы',
    subtitle: 'в неделю'
  }
];

const countDepositsArb = api.queries.arb.statistic;

export const StatisticDepostisArb = () => {
  const columnsStatistic = useUnit(countDepositsArb.queryApi.$data);

  return (
    <Card
      variant='center'
      title={{
        text: 'Статистика по депозитам',
        variantIcon: 'part',
        align: 'center'
      }}
      className={s.card}
    >
      <LoaddedData loaddedData={countDepositsArb.loaddedData} />
      <div className={clsx(common.container_content, s.container_content)}>
        {
          columnsStatistic ? columns.map((column, index) => (
            <Column 
              statistic={Object.values(columnsStatistic)[index]} 
              column={column} 
            />
          ))
          : skeletonGeneration(3).map((index) => (
            <Column column={columns[index]} isLoading />
          ))
        }
      </div>
    </Card>
  );
};
