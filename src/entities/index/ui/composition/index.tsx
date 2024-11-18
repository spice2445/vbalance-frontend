import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { formatter } from 'shared/lib/formatter';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Card } from 'shared/ui/card';
import { Charts } from 'shared/ui/chart';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Refresh } from 'shared/ui/refresh';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle } from 'shared/ui/vbalance-title';

import { graphicIndexIntervals } from '../../model';

import s from './style.module.scss';
import { CompositionToken } from './token';

const compositionTokensIndex = api.queries.index.structure;
const priceIndex = api.queries.index.price;

export const CompositionIndex = () => {
    const { t } = useTranslation('');
    const [
        compositionTokens,
        priceIndexData
    ] = useUnit([
        compositionTokensIndex.queryApi.$data,
        priceIndex.queryApi.$data
    ]);

    return (
        <Card
            className={s.card_padding}
        >
            <LoaddedData loaddedData={compositionTokensIndex.loaddedData} />
            <LoaddedData loaddedData={priceIndex.loaddedData} />
            <VbalanceTitle
                title='Index'
                size='l'
            />

            <Typography
                className={s.current_price}
                size='m'
                color='main'
                isTextLine
            >
                {t('Текущая стоимость токена:')}
                <Typography
                    size='m'
                    color='acsent'
                >
                    {formatter.number.defaultN(priceIndexData ?? 0)}
                </Typography>
                <Typography
                    size='m'
                    color='acsent_dark'
                >
                    USDT
                </Typography>
                <Refresh
                    theme='icon'
                    query={priceIndex.queryApi}
                />
            </Typography>

            <Charts
                intervals={graphicIndexIntervals}
            />

            <Typography
                className={s.composition_index_title}
                size='m'
                icon={{
                    variant: 'token'
                }}
            >
                {t('Состав токена индекса:')}
            </Typography>

            <div
                className={s.composition_index}
            >
                <LoaddedData loaddedData={compositionTokensIndex.loaddedData}  />
                {compositionTokens ?
                    compositionTokens.map((token) => (
                        <CompositionToken
                            key={token.title}
                            isLoading={false}
                            {...token}
                        />
                    ))
                    :
                    skeletonGeneration(10).map((key) => (
                        <CompositionToken key={key} isLoading />
                    ))
                }
            </div>
        </Card>
    );
};