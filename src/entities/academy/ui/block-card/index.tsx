import { RouteInstance, RouteParams } from 'atomic-router';
import { Link } from 'atomic-router-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import { coursesType } from '../../config';

import s from './style.module.scss';

interface CourseBlockCardProps {
    index?: number,
    direction?: coursesType,
    title?: string,
    description?: string,
    count_lessons?: number,
    count_time?: number,
    banner?: string,
    isOpen?: boolean, 
    haveMentorMark?: boolean
}

export const CourseBlockCard = ({
    index = 0,
    direction,
    title = '',
    description = '',
    count_lessons = 0,
    count_time = 0,
    banner = '',
    isOpen = false,
    haveMentorMark = false
}: CourseBlockCardProps) => {
    const {t} = useTranslation();
    
    return(
        <Card
            className={s.card}
            classNameContent={s.card_content}
        >
            <div className={clsx(s.banner, {[s.banner_loading]: !banner})}>
                <Image 
                    src={banner}
                    isLoading={!banner}
                />
            </div>

            <div className={s.content}>
                <Typography
                    color='acsent'
                    size='l'
                    isTextLine
                    isLoading={!title}
                >
                    {`${t('Блок')} #${index}.`}
                    <Typography color='main' size='l'>
                        {t(title)}
                    </Typography>
                </Typography>

                <Typography
                    className={s.description}
                    skeletonClass={s.description_loading} 
                    font='additional' 
                    color='main'
                    isLoading={!description} 
                >
                    {t(description)}
                </Typography>

                <div className={s.statistic}>
                    <Typography
                        color='main'
                        font='additional'
                        icon={{
                            variant: 'play',
                            size: 'm',
                            fill: 'green'
                        }}
                        isTextLine
                        isLoading={!count_lessons}
                    >
                        {t('Количество занятий')}{':'}
                        <Typography color='acsent' font='additional_bold'>
                            {count_lessons}
                        </Typography>
                    </Typography>

                    <Typography
                        color='main'
                        font='additional'
                        icon={{
                            variant: 'time',
                            size: 'm',
                            fill: 'green'
                        }}
                        isTextLine
                        isLoading={!count_time}
                    >
                        {t('Время просмотра')}{':'}
                        <Typography color='acsent' font='additional_bold'>
                            {formatter.date.durationHoursMinutes(count_time)}
                        </Typography>
                    </Typography>
                </div>

                <div className={s.to_block}>
                    <Button
                        as={Link}
                        to={routes.directions.block as unknown as RouteInstance<RouteParams>}
                        params={{
                            directionName: direction,
                            blockId: index.toString()
                        }}
                        icon={{
                            variant: 'link',
                            size: 'xs'
                        }}
                        disabled={!isOpen}
                        isLoading={!title}
                    >
                        {t('Перейти к блоку обучения')}
                    </Button>

                    {isOpen &&
                        <Typography
                            color='main' 
                            font='additional_bold' 
                            isTextLine
                        >
                            {t('Отметка наставника:')}
                            <Typography
                                color='acsent' 
                                font='additional_bold'
                                as='span'
                                isNotFlex
                                isLoading={!title}
                            >
                                {haveMentorMark ? t('Получена') : '-'}
                            </Typography>
                        </Typography>
                    }
                </div>
            </div>
        </Card>
    );
};