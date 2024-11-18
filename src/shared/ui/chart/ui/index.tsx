import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { IChartApi, ISeriesApi } from 'lightweight-charts';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createChartView, createSeries, subscribeKeyDown, subscribeMouseMove, subscribeResize } from 'shared/lib/chart';
import { formatter} from 'shared/lib/formatter';
import { $theme } from 'shared/lib/theme';
import { IntervalChart, IntervalLoadded, Tooltip, ChartIntervals } from 'shared/types/chart';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Skeleton } from 'shared/ui/skeleton';
import { Tabs } from 'shared/ui/tabs';
import { Typography } from 'shared/ui/typography';

import { initialTooltip } from '../config';

import s from './style.module.scss';

interface ChartProps {
    $chart: IntervalChart,
    loaddedData: IntervalLoadded
}

export const Chart = ({
    $chart,
    loaddedData
}: ChartProps) => {
    const { i18n } = useTranslation();
    const container = useRef<HTMLDivElement>(null);
    const [chart, setChart] = useState<IChartApi | null>(null);
    const [series, setSeries] = useState<ISeriesApi<'Area'> | null>(null);
    const [tooltip, setTooltip] = useState<Tooltip>(initialTooltip);
    const theme = useUnit($theme);
    const chartData = useUnit($chart);

    useEffect(() => {
        const updateChartLocale = () => {
            if (chart) {
                chart.applyOptions({
                    localization: {
                        locale: i18n.language
                    }
                });
            }
        };

        i18n.on('languageChanged', updateChartLocale);
        return () => {
            i18n.off('languageChanged', updateChartLocale);
        };
    }, [chart, i18n]);

    useEffect(() => {
        if (container.current && chartData) {
            const newChart = createChartView(container.current, i18n.language, theme);
            const newSeries = createSeries(newChart, theme);

            setChart(newChart);
            setSeries(newSeries);

            newSeries.setData(chartData);

            const resize = () => subscribeResize(container.current, newChart);
            const rescale = (event: KeyboardEvent) => subscribeKeyDown(event, newChart);
            window.addEventListener('resize', resize);
            window.addEventListener('keydown', rescale);

            return () => {
                window.removeEventListener('resize', resize);
                window.removeEventListener('keydown', rescale);

                if (newChart) newChart.remove();
            };
        }
    }, [chartData, theme]);

    useEffect(() => {
        if (container.current && series && chart) {
            chart.subscribeCrosshairMove((param) => subscribeMouseMove({
                param, cb: setTooltip, container: container.current as HTMLDivElement, series
            }));
        }
    }, [chart, chartData, series, container]);

    return (
        <div
            ref={container}
            className={s.chart}
        >
            <Skeleton
                isLoading={!chartData}
            />
            <LoaddedData loaddedData={loaddedData} />
            {tooltip.display && (
                <div
                    className={clsx(s.chart_tooltip)}
                    style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
                >
                    <div className={s.flex}>
                        <Typography font='additional_bold' className={s.tooltip_title}>{tooltip.date}</Typography> {/* DATE */}
                        <Typography font='additional_bold' color='acsent' className={s.tooltip_title}>{tooltip.time}</Typography> {/* DATE */}
                    </div>
                    <div className={s.flex}>
                        <Typography color='acsent'>{formatter.number.defaultN(tooltip.price)}</Typography>
                        <Typography color='acsent_dark'>{'USDT'}</Typography>
                    </div>
                </div>
            )}
        </div>
    );
};


interface ChartsProps {
    className?: string;
    intervals: ChartIntervals
}

export const Charts = ({
    className,
    intervals
}: ChartsProps) => {
    return (
        <Tabs
            className={className}
            controllers={Object.keys(intervals).map((key) => ({
                key,
                className: s.btn,
                activeClass: clsx(s.btn, s.active),
                children: key
            }))}

            contents={(Object.keys(intervals)).map((key) => (
                <Chart
                    $chart={intervals[key].chart}
                    loaddedData={intervals[key].loaddedData}
                    key={key}
                />
            ))}
        />
    );
};