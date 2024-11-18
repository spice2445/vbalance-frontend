
import { useTranslation } from 'react-i18next';
import { ActualCoursesProps } from 'shared/api/queries/academy/actual';
import { formatter } from 'shared/lib/formatter';
import { Card } from 'shared/ui/card';
import { Player } from 'shared/ui/player';
import { Typography } from 'shared/ui/typography';

import { formatterDuration } from '../../lib';

import s from './style.module.scss';


type ActualCourseCardProps = Partial<ActualCoursesProps> & {
    isLoading: boolean
}

export const ActualCourseCard = ({
    title,
    url,
    date,
    duration,
    isLoading
}: ActualCourseCardProps) => {
    const {t} = useTranslation('');

    return(
        <Card 
            className={s.card_padding}
            classNameContent={s.card_content}
        >
            <div className={s.course_video}>
                <Player
                    videoSrc={url}
                    // posterSrc={posterSrc}
                    // isLoading={isLoading}
                />
            </div>
            
            <div className={s.card_description}>
                <Typography
                    color='main'
                    size='m'
                    isLoading={isLoading}
                >{title && t(title)}</Typography>

                <div className={s.description_date}>
                    <Typography
                        icon={{
                            variant: 'time',
                            size: 'm'
                        }}
                        font='additional'
                        color='main'
                        isLoading={isLoading}
                    >
                        {formatter.date.durationHoursMinutes(
                            formatterDuration(duration ?? '1:00')
                        )}
                    </Typography>

                    <Typography
                        icon={{
                            variant: 'date',
                            size: 'm'
                        }}
                        font='additional'
                        color='main'
                        isLoading={isLoading}
                    >
                        {formatter.date.defaultDate(date)}
                    </Typography>
                </div>
            </div>
        </Card>
    );
};