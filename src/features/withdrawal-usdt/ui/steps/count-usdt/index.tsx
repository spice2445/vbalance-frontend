import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { $balancesProfile } from 'entities/user';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import { $usdt, handleChangedUsdt, selectedFullBalance } from '../../../model';
import common from '../common.module.scss';

import s from './style.module.scss';

export const CountUsdt = () => {
    const {t} = useTranslation('');
    const [usdt, balancesProfile] = useUnit([$usdt, $balancesProfile]);
    const [onHandleChange, onSelectedFullBalance] = useUnit([handleChangedUsdt, selectedFullBalance]);

    const balanceFormatter = formatter.number.defaultN(balancesProfile?.usdt ?? '0');

    return(
        <>
            <Typography
                font='additional'
                color='main'
                align='center'
                isNotFlex
            >
                {t('Вывод осуществляется в ручном режиме и занимает')}
                <Typography font='additional' align='center' as='span' isNotFlex >
                    {' '}{t('до 72 часов.')}{' '}
                </Typography>
                {t('Минимальная сумма:')}
                <Typography font='additional' align='center' as='span' isNotFlex >
                    {' '}{'50 USDT.'}{' '}
                </Typography>
                {t('Вывод доступен')}
                <Typography font='additional' align='center' as='span' isNotFlex >
                    {' '}{t('один раз в 7 дней.')}{' '}
                </Typography>
            </Typography>

            <Input
                value={usdt}
                onValue={onHandleChange}
                theme='large-2'
                type='number'
                placeholder={`${t('Сумма от 50 до')} ${balanceFormatter} USDT`}
                classNames={{
                    body: common.large_top
                }}
                text={{
                    align:'center'
                }}
            />

            <Typography
                onClick={onSelectedFullBalance}
                className={common.medium_top}
                color='main'
                font='additional'
                align='center'
                isNotFlex
            >
                {t('Баланс:')}

                <Typography font='additional_bold' align='center' as='span' isNotFlex>
                    {` ${balanceFormatter} USDT`}
                </Typography>
            </Typography>

            <Typography
                onClick={onSelectedFullBalance}
                className={clsx(common.mini_top, s.all_in)}
                size='xs'
                font='additional_bold'
                align='center'
            >
                {t('Вывести всю сумму')}
            </Typography>
        </>
    );
};