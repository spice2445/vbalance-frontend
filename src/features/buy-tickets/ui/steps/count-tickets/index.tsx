import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import {
    decremented, incremented, $tickets,
    handleChanged, $amountUSDT
} from '../../../model/';

import s from './style.module.scss';

export const CountTicketsStep = () => {
    const { t } = useTranslation('');
    const [increment, decrement, tickets, onHandleChanged, amountUSDT] = useUnit([incremented, decremented, $tickets, handleChanged, $amountUSDT]);

    return(
        <>
            <Input
                theme='number'
                type='number'
                classNames={{
                    input: s.input
                }}
                value={tickets}
                label={{
                before: {
                    text: 'Количество тикетов:',
                    font: 'additional',
                    color: 'main'
                }
                }}
                increment={increment}
                decrement={decrement}
                onValue={onHandleChanged}
            />

            <Typography
                className={s.amountToPay} 
                font='additional' 
                color='main'
                size='s'
                isLineText
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