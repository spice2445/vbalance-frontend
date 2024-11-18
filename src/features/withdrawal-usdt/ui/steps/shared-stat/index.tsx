import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import { $addressTrc20, $usdt } from '../../../model';
import common from '../common.module.scss';

export const SharedStat = () => {
    const {t} = useTranslation('');
    const [usdt, addressTrc20] = useUnit([$usdt, $addressTrc20]);

    return(
        <>
            <Typography
                color='main'
                font='additional'
                isTextLine
            >
                {t('Сумма вывода:')}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {`${formatter.number.defaultN(usdt)} USDT`}
                </Typography>
            </Typography>
            <Typography
                className={common.medium_top}
                color='main'
                font='additional'
                isTextLine
            >
                {t('Сеть')}{':'}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {'TRC-20'}
                </Typography>
            </Typography>
            <Typography
                className={common.medium_top}
                color='main'
                font='additional'
                isTextLine
            >
                {t('Кошелек')}{':'}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {formatter.string.truncateAddress(addressTrc20)}
                </Typography>
            </Typography>
        </>
    );
};