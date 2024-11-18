
import { useUnit } from 'effector-react';
import { api } from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';

import { CardPoolInfo } from './card';
import s from './style.module.scss';

const equityPoolsArb = api.queries.arb.pools;

export const EquityPools = () => {
  const equityPoolsCards = useUnit(equityPoolsArb.queryApi.$data);

  return (
    <Card
      title={{
        text: 'Долевые пулы ARB',
        variantIcon: 'proportion-5'
      }}
      classNameContent={s.card_content}
    >
      <LoaddedData loaddedData={equityPoolsArb.loaddedData} />
      {equityPoolsCards ? 
        Object.values(equityPoolsCards).map((poolInfo, index) => (
          <CardPoolInfo
            key={index}
            poolInfo={poolInfo}
            index={index}
          />
        ))
        :
        skeletonGeneration(6).map((index) => (
          <CardPoolInfo
            key={index}
            isLoading
            index={index}
          />
        ))
      }
    </Card>
  );
};
