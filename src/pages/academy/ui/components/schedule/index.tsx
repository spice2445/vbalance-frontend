import { useUnit } from 'effector-react';
import { ScheduleCard } from 'entities/academy';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';

const scheduleList = api.queries.academy.getSchedule;

export const Schedule = () => {
    const {t} = useTranslation('');
    const scheduleListData = useUnit(scheduleList.queryApi.$data);

    return(
        <div className={common.line_second_column}>
            <LoaddedData loaddedData={scheduleList.loaddedData} />
            <Typography
                color='main'
                size='m'
                icon={{
                    variant: 'date',
                    size: 'm'
                }}
            >
                {t('Расписание')}
            </Typography>

            <div className={common.line_second_column}>
                {scheduleListData?.data ? scheduleListData.data.map((cardInfo) => (
                    <ScheduleCard
                        key={cardInfo.link}
                        isLoading={false}
                        {...cardInfo}
                    />
                ))
                :
                skeletonGeneration(5).map((key) => (
                    <ScheduleCard
                        isLoading={true}
                        key={key}
                    />
                ))
                }
            </div>
        </div>
    );
};