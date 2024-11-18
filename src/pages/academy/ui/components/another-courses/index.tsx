
import { useUnit } from 'effector-react';
import { DirectionCourseCard } from 'entities/academy';
import { useTranslation } from 'react-i18next';
import {api} from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';

import s from './style.module.scss';

const directionsList = api.queries.academy.getOther;

export const AnotherCourses = () => {
    const {t} = useTranslation('');
    const directions = useUnit(directionsList.queryApi.$data);

    return(
        <div className={common.column}>
            <Typography
                color='main'
                size='m'
                icon={{
                    variant: 'education',
                    size: 'm'
                }}
            >
                {t('Другие разделы академии')}
                <LoaddedData loaddedData={directionsList.loaddedData} />
            </Typography>

            <div className={s.content_cards}>
                {directions?.data ? 
                    directions?.data.map((cardData) => (
                        <DirectionCourseCard
                            classNames={{
                                card: s.card,
                                preview: s.card_preview
                            }}
                            key={cardData.id}
                            direction={cardData.direction}
                            image={cardData.image}
                            name={cardData.name}
                            short_description={cardData.short_description}
                            url={cardData.url}
                        />
                    ))
                    : 
                    skeletonGeneration(10).map((key) => <DirectionCourseCard
                        classNames={{
                            card: s.card,
                            preview: s.card_preview
                        }}
                        key={key} 
                        isLoading 
                    />)
                }
            </div>
        </div>
    );
};