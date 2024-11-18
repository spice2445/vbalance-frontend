import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import { type PriceCourseProps } from '../../../config';
import s from '../common.module.scss';

export const ReadConditions = ({
    priceUsdt = 0
}: PriceCourseProps) => {
    const {t} = useTranslation();
    return(
        <>
            <Typography
                color='main'
                font='additional'
                align='center'
            >
                {t('Оплата направлений обучения производится в два этапа. 70% от стоимости оплачивается тикетами, и 30% USDT (тренерский гонорар).')}
            </Typography>

            <Typography
                className={s.large_top}
                color='main'
                font='additional_bold'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Стоимость')}:`}
                <Typography
                    color='acsent'
                    font='additional_bold'
                    as='span'
                >
                    {formatter.number.defaultN(priceUsdt)}
                </Typography>
                {'USDT'}
            </Typography>

            <Typography
                className={s.mini_top}
                color='main'
                font='additional'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Тикеты')} (70%):`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(formatter.number.price.usdtToTickets(priceUsdt) * 0.7)} ${t('тикетов')}`}
                </Typography>
            </Typography>

            <Typography
                className={s.mini_top}
                color='main'
                font='additional'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Тренерский гонорар')} (30%):`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(priceUsdt * 0.3)} USDT`}
                </Typography>
            </Typography>

        </>
    );
};