import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { router, routes } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Player } from 'shared/ui/player';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface LessonProps {
    name_block?: string,
    name_lesson?: string,
    description?: string,
    additionalMaterials?: {
        name: string,
        link: string
    }[],
    allCountLessons?:number,
}

export const Lesson = ({
    name_block,
    name_lesson,
    description,
    additionalMaterials,
    allCountLessons
}: LessonProps) => {
    const {t} = useTranslation();
    const path = useUnit(router.$path);
    const directionName = path.split('/')[2];
    const lessonIndex = path.split('/')[3];

    return(
        <Card
            className={s.card}
        >
            <div className={s.video} >
                <Player 
                    videoSrc='https://player.vimeo.com/video/903483828?h=60401222e9'
                />
            </div>

            <div className={s.info_lesson}>
                <Typography
                    size='m'
                    color='main'
                    font='additional_bold'
                    isLoading={!name_block}
                >
                    {`${name_block && t(name_block)}. ${t('Занятие')} #${lessonIndex}.`}
                </Typography>

                <Typography 
                    className={s.name_lesson} 
                    skeletonClass={s.name_lesson} 
                    size='xl'
                    isLoading={!name_lesson}
                >
                    {name_lesson && t(name_lesson)}
                </Typography>

                <Typography 
                    className={s.description_lesson}
                    skeletonClass={s.description_lesson} 
                    color='main'
                    font='additional'
                    isLoading={!description}
                >
                    {description && t(description)}
                </Typography>

                {additionalMaterials && 
                    <div className={s.additional_materials_container} >
                        {additionalMaterials.map((additionalMaterial) => (
                            <div
                                key={additionalMaterial.name}
                                className={s.additional_materials}
                            >
                                <div>
                                    <Typography color='acsent' font='additional_bold'>{t('Дополнительные материалы')}</Typography>
                                    <Typography size='m' font='additional_bold'>{t(additionalMaterial.name)}</Typography>
                                </div>

                                <Button
                                    to={additionalMaterial.link}
                                    as={Link}
                                    className={s.download_link}
                                    theme='big_icon'
                                    icon={{
                                        variant: 'download',
                                        size: 'xs'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                }

                <div className={s.footer}>
                    <Typography
                        className={s.current_lesson}
                        color='acsent'
                        skeletonClass={s.current_lesson} 
                    >
                        {lessonIndex}
                        <Typography size='m'>
                            /
                        </Typography>
                        <Typography size='m'>
                            {allCountLessons}
                        </Typography>
                    </Typography>

                    <div className={s.footer_controls}>
                        <Button
                            as={Link}
                            // @ts-ignore
                            to={routes.directions.block}
                            params={{
                                directionName,
                                blockId: +lessonIndex === 1 ? 1 : +lessonIndex - 1
                            }}
                            disabled={+lessonIndex === 1}
                            theme='transparent'
                            icon={{
                                variant: 'arrow-reversed',
                                size: 'xs'
                            }}
                        >
                            {t('Перыдущее занятие')}
                        </Button>
                        <Button
                            as={Link}
                            // @ts-ignore
                            to={routes.directions.block}
                            params={{
                                directionName,
                                blockId: +lessonIndex === allCountLessons ? lessonIndex :  +lessonIndex + 1
                            }}
                            disabled={+lessonIndex === allCountLessons}
                            icon={{
                                variant: 'arrow',
                                size: 'xs'
                            }}
                        >
                            {t('Следующее занятие')}
                        </Button>
                        <Button
                            theme='big_icon'
                            icon={{
                                variant: 'hamburger',
                                size: 'xs'
                            }}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};