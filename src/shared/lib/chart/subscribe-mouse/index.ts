import { ISeriesApi, LineData, MouseEventParams, Time, UTCTimestamp } from 'lightweight-charts';
import { Dispatch, SetStateAction } from 'react';
import { formatter } from 'shared/lib/formatter';
import { Tooltip } from 'shared/types/chart';

type SubScribeMouseMove = {
    param: MouseEventParams<Time>;
    cb: Dispatch<SetStateAction<Tooltip>>;
    container: HTMLDivElement;
    series: ISeriesApi<'Area'>
}

const toolTipWidth = 110,
    toolTipHeight = 60,
    toolTipMargin = 15;

export const subscribeMouseMove = ({ param, cb, container, series }: SubScribeMouseMove) => {
    if (!param.point || !param.time || param.point.x < 0 ||
        param.point.x > container.clientWidth ||
        param.point.y <= 0 ||
        param.point.y > container.clientHeight) {
        cb((prev: Tooltip) => ({ ...prev, display: false }));
    }
    else {
        const currentPoint: LineData<Time> = param.seriesData.get(series) as LineData<Time>;
        let x = param.point.x + toolTipMargin;
        if (x > container.clientWidth - toolTipWidth) {
            x = param.point.x - toolTipMargin - toolTipWidth;
        }
        let y = param.point.y + toolTipMargin;
        if (y > container.clientHeight - toolTipHeight) {
            y = param.point.y - toolTipHeight - toolTipMargin;
        }
        const [date, time] = formatter.date.dateAndTime(currentPoint?.time as UTCTimestamp); 
        cb({
            display: true,
            date: date,
            time: time,
            price: currentPoint.value,
            x,
            y
        });
    }

};
