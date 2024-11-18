import { EventCallable, Store } from 'effector';
import { Time } from 'lightweight-charts';

export type Tooltip = {
    display: boolean;
    date: string;
    time: string;
    price: number;
    x: number;
    y: number;
}

export type ChartData = { time: Time; value: number; }[];

export type IntervalChart = Store<ChartData | null>;
export type IntervalLoadded = EventCallable<void>;

export type ChartIntervals = Record<string, {
    chart: IntervalChart,
    loaddedData: IntervalLoadded
}>