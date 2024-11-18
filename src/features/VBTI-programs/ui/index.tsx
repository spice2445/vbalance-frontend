import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { formatter} from 'shared/lib/formatter';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Refresh } from 'shared/ui/refresh';
import { Typography } from 'shared/ui/typography';

import {TEXT_COLUMNS, columns_type, statistic_type} from '../config';

import { 
    sellTokensModalProps,
    purchaseTokensModalProps,
    autoPurchaseTokensModalProps,
    createProgramModalProps
} from './modals';
import s from './style.module.scss';


const statisticProgramms = api.queries.index.token;

export const VBTIPrograms = () => {
    const {t} = useTranslation('');
    const [statisticProgrammsData, limit] = useUnit([
        statisticProgramms.queryApi.$data,
        api.queries.index.limit.queryApi.$data
    ]);
    const openModal = useUnit(modalsStore.setModal);

    return(
        <Card
            className={s.card}
        >
            <LoaddedData loaddedData={statisticProgramms.loaddedData} />
            <Typography
                size='l'
                color='main'
                isTextLine
            >
                {t('Ваши программы')}

                <Typography
                    size='l'
                    color='acsent'
                >
                    VBTI
                </Typography>
            </Typography>

            <div className={s.programm}>
                {/* <Select /> */}

                <Button
                    onClick={() => openModal(createProgramModalProps)}
                    theme='transparent'
                    className={s.mini_button}
                    icon={{
                        variant: 'plus',
                        size: 'xs'
                    }}
                >{t('Создать')}</Button>
            </div>

            <div
                className={s.tokens_balances}
            >
                <Typography
                    isTextLine
                    size='xl'
                    color='main'
                    isLoading={!statisticProgrammsData}
                >
                    {formatter.number.defaultN(statisticProgrammsData?.balance.vbti ?? 0)}
                    <Typography
                        size='xl'
                        color='acsent'
                    >
                        VBTI
                    </Typography>
                </Typography>

                <Typography
                    size='m'
                    color='main'
                >
                    /
                </Typography>

                <Typography
                    isTextLine
                    size='m'
                    color='main'
                    isLoading={!statisticProgrammsData}
                >
                    {formatter.number.defaultN(statisticProgrammsData?.balance.usdt ?? 0)}
                    <Typography
                        size='m'
                        color='acsent'
                    >
                        USDT
                    </Typography>
                </Typography>
            </div>

            <Typography
                className={s.open_limit}
            >
                <Typography
                    className={s.open_limit_text}
                    color='main'
                    isTextLine
                >
                    {t('Открытый лимит:')}
                    <Typography
                        color='acsent'
                        skeletonClass={s.open_limit_skeleton}
                        isLoading={!limit}
                    >
                        {formatter.number.defaultN(limit?.limit ?? 0)}
                        <Refresh
                            theme='icon'
                            query={api.queries.index.limit.queryApi}
                        />
                    </Typography>
                </Typography>

                <Button
                    theme='transparent'
                    className={s.mini_button}
                    icon={{
                        variant: 'plus',
                        size: 'xs'
                    }}
                >
                    {t('Увеличить лимит')}
                </Button>
            </Typography>

            <div className={s.actions}>
                <div>
                    <Button
                        onClick={() => openModal(purchaseTokensModalProps)}
                        className={s.mini_button}
                        icon={{
                            variant: 'deposit',
                            size: 'xs'
                        }}
                    >
                        {t('Купить токены')}
                    </Button>

                    <Button
                        onClick={() => openModal(sellTokensModalProps)}
                        className={s.mini_button}
                        icon={{
                            variant: 'deposit',
                            size: 'xs'
                        }}
                    >
                        {t('Продать токены')}
                    </Button>
                </div>

                <Button
                    onClick={() => openModal(autoPurchaseTokensModalProps)}
                    className={s.mini_button}
                    icon={{
                        variant: 'settings',
                        size: 'xs'
                    }}
                >
                    {t('Автопокупка')}
                </Button>
            </div>

            <Typography
                className={s.sub_title}
                size='m'
                icon={{
                    variant: 'pause'
                }}
                isLineText
            >
                {t('Автоматическая покупка VBTI:')}

                <Typography
                    color='acsent'
                    size='m'
                    isLoading={!statisticProgrammsData}
                >
                    {t('Остановлена')}
                </Typography>
            </Typography>

            <Typography
                className={s.sub_title}
                size='m'
                icon={{
                    variant: 'part'
                }}
            >
                {t('Статистика вырбарной программы:')}
            </Typography>

            < div className={s.statistic_body}>
                {Object.keys(TEXT_COLUMNS).map((key_column) => (
                    <div key={key_column} className={s.statistic_column}>
                        {Object.entries(TEXT_COLUMNS[key_column as columns_type]).map(([key_row, value], index) => (
                            <Typography
                                key={key_row}
                                color='main'
                                font='additional'
                                isLineText
                            >
                                {`${t(value as string)}:`}
                                <Typography
                                    font='additional_bold'
                                    color={
                                        Object.keys(TEXT_COLUMNS[key_column as columns_type]).length - 1 === index ?
                                        key_column === 'purchase' ? 'positive' : 'negative'
                                        :
                                        'acsent_dark'
                                    }
                                    isLoading={!statisticProgrammsData}
                                    skeletonClass={s.statistic_skeleton}
                                >
                                    {
                                        statisticProgrammsData?.
                                            statistic?.
                                            [key_column as columns_type]?.
                                            [key_row as statistic_type]
                                    }
                                    {index === 0 ? ' VBTI' : ' USDT'}
                                </Typography>
                            </Typography>
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    );
};