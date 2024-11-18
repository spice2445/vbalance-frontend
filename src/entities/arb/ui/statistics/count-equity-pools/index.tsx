import clsx from 'clsx';
import { useUnit } from 'effector-react';
import {api} from 'shared/api';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';

import common from '../common.module.scss';

import { Column } from './column';
import s from './style.module.scss';

const columns = ['Личные', 'В первой линии', 'Со 2 по 5 линию'];
const countEquityPoolsArb = api.queries.arb.calculationPools;

export const CountEquityPoolsArb = () => {
  const columnsData = useUnit(countEquityPoolsArb.queryApi.$data);

  return (
    <Card
      variant='center'
      title={{
        text: 'Подсчет для долевых пулов ARB',
        variantIcon: 'status',
        align: 'center'
      }}
      className={s.card}
    >
      <LoaddedData loaddedData={countEquityPoolsArb.loaddedData} />
      <div
        className={clsx(common.container_content, s.container_content)}
      >
        {
          columns.map((title: string, indexColumn: number) => (
            <Column
              key={title}
              title={title}
              isLoading={!columnsData}
              column={columnsData ? Object.values(columnsData)[indexColumn] : undefined}
              indexColumn={indexColumn}
            />
          ))
          // : skeletonGeneration(3).map((indexColumn) => (
          //   <Column
          //     isLoading
          //     indexColumn={indexColumn}
          //   />
          // ))
        }
      </div>
    </Card>
  );
};
