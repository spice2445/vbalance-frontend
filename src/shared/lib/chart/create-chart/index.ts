import { ColorType, IChartApi, LogicalRange, createChart } from 'lightweight-charts';
import { Theme } from 'shared/config/theme';
import { getThemeColor } from 'shared/lib/theme';

export const createChartView = (container: HTMLDivElement, language: string, theme: Theme): IChartApi => {
    const chart = createChart(container, {
        localization: {
            locale: language
        },
        layout: {
            background: { type: ColorType.Solid, color: getThemeColor('--block-fill-color', theme) },
            textColor: getThemeColor('--main-color', theme)
        },
        rightPriceScale: {
            borderColor: getThemeColor('--main-color', theme),
            textColor: getThemeColor('--acsent-dark-color', theme)
        },
        timeScale: {
            fixLeftEdge: true,
            fixRightEdge: true,
            rightOffset: 0,
            tickMarkFormatter: (time: number, _tickMarkType: number, locale: string): string => {
                const date: Date = new Date(time * 1000);
                let formatter: Intl.DateTimeFormat;
                const range: LogicalRange | null = chart.timeScale().getVisibleLogicalRange();
                if (!range) return '';
          
                const barsCount: number = range.to - range.from;
          
                if (barsCount < 24) {
                  formatter = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' });
                } else if (barsCount < 30 * 24) {
                  formatter = new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' });
                } else if (barsCount < 12 * 30 * 24) {
                  formatter = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short' });
                } else {
                  formatter = new Intl.DateTimeFormat(locale, { year: 'numeric' });
                }
          
                return formatter.format(date);
              },
            borderVisible: false
        },
        crosshair: {
            vertLine: {
                color: getThemeColor('--main-color', theme),
                labelBackgroundColor: getThemeColor('--main-color', theme)
            },

            horzLine: {
                color: getThemeColor('--main-color', theme),
                labelBackgroundColor: getThemeColor('--main-color', theme)
            }
        },
        grid: {
            vertLines: { color: getThemeColor('--block-stoke-color', theme) },
            horzLines: { color: getThemeColor('--block-stoke-color', theme) }
        },
        width: container.clientWidth,
        height: 150
    });

    return chart;
};