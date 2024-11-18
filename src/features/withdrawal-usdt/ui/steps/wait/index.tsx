import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Countdown } from 'shared/ui/countdown';
import { Loader } from 'shared/ui/loader';
import { Typography } from 'shared/ui/typography';

import { WAIT_WITHDRAW_TIME } from '../../../config';
import { cannceledRequest } from '../../../model';
import common from '../common.module.scss';
import { SharedStat } from '../shared-stat';

export const WaitWithdraw = () => {
    const {t} = useTranslation('');
    const handleCannceledRequest = useUnit(cannceledRequest);

    return(
        <>
            <SharedStat />

            <Countdown
                seconds={WAIT_WITHDRAW_TIME}
                daysInHours={true}
                customRenderer={({hours, minutes, seconds}) => (
                    <Typography
                        className={common.medium_top}
                        size='xl'
                    >
                        {formatter.date.timeCountdown(hours)}:{formatter.date.timeCountdown(minutes)}:{formatter.date.timeCountdown(seconds)}
                    </Typography>
                )}
            />

            <Loader 
                size='m'
                className={common.large_top}
            />
            
            <Button
                onClick={handleCannceledRequest}
                icon={{
                    variant: 'close',
                    size: 'xs3'
                }}
                className={common.large_top}
            >
                {t('Отменить заявку на вывод')}
            </Button>
        </>
    );
};