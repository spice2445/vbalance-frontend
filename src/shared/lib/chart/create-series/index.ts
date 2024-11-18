import { IChartApi } from 'lightweight-charts';
import { Theme } from 'shared/config/theme';
import { getThemeColor } from 'shared/lib/theme';

export const createSeries = (chart: IChartApi, theme: Theme) => {
    return chart.addAreaSeries({
        lineColor: getThemeColor('--acsent-dark-color', theme),
        lastValueVisible: false,
        crosshairMarkerVisible: false,
        priceLineVisible: false,
        topColor: getThemeColor('--acsent-color', theme),
        bottomColor: getThemeColor('--block-fill-color', theme)
    });
};