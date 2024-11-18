import { YourProgammsVbtiStatistic } from 'shared/api/queries/index/token';

export type columns_type = 'buy' | 'sell'; 
export type statistic_type = 'vbti' | 'average' | 'usdt'; 

const STATISTIC_PURCHASE = {
    vbti: 'Куплено токенов',
    average: 'Средняя цена покупки',
    usdt: 'Общая сумма покупок'
    // profit: 'Нереализованная прибыль'
};

const STATISTIC_SELL = {
    vbti: 'Продано токенов',
    average: 'Средняя цена продажи',
    usdt: 'Общая сумма продаж'
    // profit: 'Реализованная прибыль'
};

export const TEXT_COLUMNS: YourProgammsVbtiStatistic = {
    buy: STATISTIC_PURCHASE,
    sell: STATISTIC_SELL
};