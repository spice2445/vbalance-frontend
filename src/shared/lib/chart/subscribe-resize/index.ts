import { IChartApi } from 'lightweight-charts';

export const subscribeResize = (container: HTMLDivElement | null, chart: IChartApi | null) => {
    if (!container || !chart) return;
    chart.applyOptions({ width: container.clientWidth, height: container.clientHeight });
};

