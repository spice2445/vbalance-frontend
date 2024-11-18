
import { useUnit } from 'effector-react';
import { ActualCourseCard } from 'entities/academy';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';

const relevatCourses = api.queries.academy.getRelevant;

export const ActualCourses = () => {
    const { t } = useTranslation('');
    const actualCoursesListData = useUnit(relevatCourses.queryApi.$data);

    return (
        <div className={common.line_second_column}>
            <Typography
                color='main'
                size='m'
                icon={{
                    variant: 'play',
                    size: 'm'
                }}
            >
                {t('Актуальные записи')}
                <LoaddedData loaddedData={relevatCourses.loaddedData} />
            </Typography>

            <div className={common.line_second_column}>
                {actualCoursesListData ? actualCoursesListData.data?.map((infoCard) => (
                    <ActualCourseCard
                        key={infoCard.id}
                        isLoading={false}
                        {...infoCard}
                    />
                ))
                    :
                    skeletonGeneration(5).map((key) => (
                        <ActualCourseCard
                            key={key}
                            isLoading
                        />
                    ))
                }
            </div>

        </div>
    );
}; 