import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { $statusProfile } from 'entities/user';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Typography } from 'shared/ui/typography';

import { opennedInfoCardStatus } from '../../../model';

import s from './style.module.scss';

export const CardStatus = () => {
    const {t} = useTranslation('');
    const statusProfile = useUnit($statusProfile);
    
    return(
        <Card
            className={s.card}
            infoClicked={opennedInfoCardStatus}
        >
            <Typography
                color='acsent'
                size='l'
            >
                {t('АКАДЕМИЯ VBALANCE')}
            </Typography>
            <div className={s.content}>
                <Typography
                    color='main'
                    isTextLine
                >
                    {t('Ваш статус: ')}
                    <Typography
                        color='acsent'
                        isLoading={!statusProfile}
                    >
                        {statusProfile && t(statusProfile)}
                    </Typography>
                </Typography>

                <Button
                    as={Link}
                    to={routes.profile.statuses}
                    icon={{
                        variant: 'status',
                        size: 's'
                    }}
                >
                    {t('Карьерный план и статусы')}
                </Button>
            </div>
        </Card>
    );
};