import { IChartApi } from 'lightweight-charts';

function zoom(chart: IChartApi, pct: number, zoomIn: boolean) {
    const currentRange = chart.timeScale().getVisibleLogicalRange();
    if (!currentRange) return;
    const bars = currentRange.to - currentRange.from;
    const direction = zoomIn ? -1 : 1;
    const newRangeBars = bars * pct * direction + bars;
    chart.timeScale().setVisibleLogicalRange({
        to: currentRange.to,
        from: currentRange.to - newRangeBars
    });
}

function scale(chart: IChartApi, diff: number) {
    const currentPos = chart.timeScale().scrollPosition();
    chart.timeScale().scrollToPosition(currentPos + diff, false);
}

export const subscribeKeyDown = (event: KeyboardEvent, chart: IChartApi | null) => {
    if (!chart) return;

    const actionMap: Record<string, () => void> = {
        'ArrowUp': () => zoom(chart, 1 / 8, true),
        'ArrowDown': () => zoom(chart, 1 / 8, false),
        '+': () => zoom(chart, 1 / 8, true),
        '-': () => zoom(chart, 1 / 8, false),
        'ArrowLeft': () => scale(chart, -10),
        'ArrowRight': () => scale(chart, 10)
    };

    const action = actionMap[event.key];
    if (action) {
        event.preventDefault(); 
        action();
    }
};

