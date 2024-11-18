import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';

import {
    $amountUSDT, $chooseOption,
    choosedOption, options
} from '../../../model';

import s from './style.module.scss';

export const SelectPurchaseStep = () => {
    const [amountUSDT] = useUnit([$amountUSDT]);
    const { t } = useTranslation('');

    return(
        <>
            <Select
                options={options}
                $chooseOption={$chooseOption}
                onChoosed={choosedOption}
            />
            <Typography
                className={s.amountToPay} font='additional' color='main'
                size='s'
            >
                {t('Сумма к оплате:')}
                <Typography font='additional_bold' color='acsent_dark' size='s'>
                {formatter.number.defaultN(amountUSDT)}
                {' '}
                {'USDT'}
                </Typography>
            </Typography>
        </>
    );
};
