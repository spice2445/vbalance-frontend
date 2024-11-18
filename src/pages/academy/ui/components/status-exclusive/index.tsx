import { useUnit } from 'effector-react';
import { StatusExclusiveCard } from 'entities/academy';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { skeletonGeneration } from 'shared/lib/lazy';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';

import s from './style.module.scss';

const exclusiveStatus = api.queries.academy.getExclusive;

export const StatusExclusive = () => {
    const {t} = useTranslation('');
    const exclusiveStatusData = useUnit(exclusiveStatus.queryApi.$data);

    return(
        <div className={common.line_first_column}>
            <Typography
                color='main'
                size='m'
                icon={{
                    variant: 'education',
                    size: 'm'
                }}
            >
                {t('Эксклюзив для статусов')}
                <LoaddedData loaddedData={exclusiveStatus.loaddedData} />
            </Typography>

            <div className={s.content_cards}>
                {exclusiveStatusData?.data ? exclusiveStatusData.data.map((cousre) => (
                    <StatusExclusiveCard 
                        {...cousre}
                        isLoading={false}
                    />
                ))
                :
                skeletonGeneration(5).map(() => (
                    <StatusExclusiveCard
                        isLoading={true}
                    />
                ))
                }
            </div>
        </div>
    );
};