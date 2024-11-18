import {applyBarrier } from '@farfetched/core';
import { createFactory, invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';
import { ChartData } from 'shared/types/chart';

export type StatisticParams = 'month' | 'week' | 'all'

interface statisticProps {
  time_interval: StatisticParams
}

export const statistic = createFactory(({
  time_interval
}: statisticProps) => {
  const statisticApi = invoke(queryWrapper<StatisticParams, ChartData>, {
    url: '/index-token/statistic',
    query: { time_interval },
    response: {
      contract: contracts.index.statistic,
      mapData: ({ result }) => (result as any).data
    }
  });
  
  applyBarrier(statisticApi.queryApi, { barrier: barriers.auth });

  return statisticApi;
});