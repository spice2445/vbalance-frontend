
import CountdownLib from 'react-countdown';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

export interface rendererProps {
    hours: number;
    minutes: number;
    seconds: number;
    completed: number;
}

const formatterTime = formatter.date.timeCountdown;

const defaultRenderer = ({ hours, minutes, seconds, completed }: rendererProps) => {
    const {t} = useTranslation('');

    if (completed) {
      return <Typography>{t('Готово!')}</Typography>;
    } else {
      return (
        <Typography
            color='main'
        >
            {formatterTime(hours)}:{formatterTime(minutes)}:{formatterTime(seconds)}
        </Typography>
      );
    }
};

interface CountdownProps {
    seconds: number,
    customRenderer: (props: rendererProps) => React.ReactNode,
    daysInHours?: boolean
}

export const Countdown = ({
    seconds,
    customRenderer,
    daysInHours
}: CountdownProps) => {
    return(
        <CountdownLib 
            date={Date.now() + seconds * 1000}
            renderer={(customRenderer ?? defaultRenderer) as any}
            daysInHours={daysInHours}
        />
    );
};