import { Link } from 'atomic-router-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { SheduleProps } from 'shared/api/queries/academy/schedule';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

type ScheduleCardProps =  Partial<SheduleProps> & {
    isLoading: boolean
}

export const ScheduleCard = ({
    date,
    name,
    link,
    isLoading
}: ScheduleCardProps) => {
    const {t} = useTranslation('');
    const scheduleDate = formatter.date.datePlane(date);

    return(
        <Card
            className={s.card_padding}
            classNameContent={s.card_wrapper}
        >
            <div className={clsx({[s.text_skeleton]: isLoading})}>
                <Typography
                    color='acsent'
                    font='additional_bold'
                    isTextLine
                    isLoading={isLoading}
                >
                    {scheduleDate[0] && t(scheduleDate[0])}
                    <Typography
                        color='main'
                        font='additional_bold'
                    >
                        {scheduleDate[1]}
                    </Typography>
                </Typography>

                <Typography 
                    className={s.description}
                    size='m'
                    isLoading={isLoading}
                >
                    {name && t(name)}
                </Typography>
            </div>


            {typeof link === 'string' ?
                <Button
                    isLoading={isLoading}
                    as={Link}
                    to={link ?? ''}
                    className={s.action_btn}
                    skeletonClass={s.action_btn}
                >
                    <Icon 
                        variant='video'
                        size='l'
                        fill='light'
                    />
                </Button>
                :
                <Button
                    theme='white'
                    isLoading={isLoading}
                    className={clsx(s.action_btn, s.info_btn)}
                    skeletonClass={s.action_btn}
                >
                    <Icon 
                        variant='info'
                        size='l'
                        fill='green'
                    />
                </Button>
            }
        </Card>
    );
};