import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Checkbox } from 'shared/ui/checkbox';
// import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';

import { type PriceCourseProps } from '../../../config';
import s from '../common.module.scss';

export const PurchaseAccess = ({
    priceUsdt = 0
}: PriceCourseProps) => {
    const {t} = useTranslation();
    const [balancesProfile] = useUnit([$balancesProfile]);
    const purchaseUSDT = priceUsdt * 0.3;
    const purchaseTickets = formatter.number.price.usdtToTickets(priceUsdt) * 0.7;
    
    return(
        <>
            <Typography
                color='main'
                font='additional_bold'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Оплата доступа')}:`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(purchaseUSDT)} ${t('тикетов')} + ${formatter.number.defaultN(purchaseTickets)} USDT`}
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
                {`${t('Ваш баланс')}:`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(balancesProfile.ticklets)} ${t('тикетов')}`}
                </Typography>
            </Typography>

            <Checkbox
                isChoose
                classNames={{
                    container: s.mini_top
                }}
            >
                {t('Списать тикеты')}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    ({formatter.number.defaultN(purchaseTickets)})
                </Typography>
            </Checkbox>

            <Typography
                className={s.mini_top}
                color='main'
                font='additional'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Не хватает')}:`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(-1)} ${t('тикета')} (${formatter.number.defaultN(-10)}) USDT`}
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
                {`${t('Общая сумма к оплате')}:`}
                <Typography
                    font='additional_bold'
                    as='span'
                >
                    {`${formatter.number.defaultN(priceUsdt)} USDT`}
                </Typography>
            </Typography>

            {/* <Select
                className={s.large_top}
            /> */}
        </>
    );
};