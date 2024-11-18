import { invoke } from '@withease/factories';
import { api } from 'shared/api';
import { ChartIntervals } from 'shared/types/chart';


export const graphicChartsWeekIndex = invoke(api.queries.index.statistic, {
  time_interval: 'week'
});

export const graphicChartsMonthIndex = invoke(api.queries.index.statistic, {
  time_interval: 'month'
});

export const graphicChartsAllIndex = invoke(api.queries.index.statistic, {
  time_interval: 'all'
});

export const graphicIndexIntervals: ChartIntervals = {
  'Неделя': {
    chart:  graphicChartsWeekIndex.queryApi.$data,
    loaddedData: graphicChartsWeekIndex.loaddedData 
  },
  'Месяц': {
    chart:  graphicChartsMonthIndex.queryApi.$data,
    loaddedData: graphicChartsMonthIndex.loaddedData 
  },
  'Всё': {
    chart:  graphicChartsAllIndex.queryApi.$data,
    loaddedData: graphicChartsAllIndex.loaddedData 
  }
};