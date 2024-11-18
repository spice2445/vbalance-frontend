import { Link } from 'atomic-router-react';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface LessonCardProps {
    index?: number,
    title_block?: string,
    title_lesson?: string,
    directionName: string
}

export const LessonCard = ({
    index = 0,
    title_block = '',
    title_lesson = '',
    directionName
}: LessonCardProps) => {
    const {t} = useTranslation();
    return(
        <Card
            className={s.card}
            classNameContent={s.card_content}
        >
            <div className={s.content_text}>
                <Typography
                    className={s.header_text}
                    color='acsent'
                    font='additional_bold'
                    isTextLine
                >
                    {`${t(title_block)}.`}
                    <Typography
                        color='main'
                        font='additional_bold'
                        as='span'
                    >
                        {`${t('Занятие')} #${index}.`}
                    </Typography>
                </Typography>

                <Typography font='additional_bold' size='m'>
                    {t(title_lesson)}
                </Typography>
            </div>

            <Link
                to={routes.directions.block}
                params={{
                    directionName,
                    blockId: index.toString()
                }}
                className={s.link_to_lesson}
            >
                <Button
                    theme='big_icon'
                    icon={{
                        variant:'play',
                        size: 'xl'
                    }}
                />
            </Link>
        </Card>
    );
};