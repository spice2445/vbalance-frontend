import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { formatter} from 'shared/lib/formatter';
import { ModalI } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { ModalDefault } from 'shared/ui/modal';
import { Refresh } from 'shared/ui/refresh';
import { Typography } from 'shared/ui/typography';

import s from '../style.module.scss';

const PURCHASE_TOKENS_MODAL_KEY = 'PURCHASE_TOKENS_MODAL';

const PurchaseTokens = () => {
    const {t} = useTranslation();
    const [limit] = useUnit([api.queries.index.limit.queryApi.$data]);
    
    return(
        <ModalDefault
            keyModal={PURCHASE_TOKENS_MODAL_KEY}
            title={{
                text: 'Купить токены индекса',
                variantIcon: 'deposit',
                align: 'center'
            }}
            className={s.modal}
        >
            <Typography
                className={s.largeTop}
                color='main'
                isTextLine
            >
                {t('Открытый лимит на покупку: ')}

                <Typography
                    color='acsent'
                    isTextLine
                    isLoading={!limit}
                >
                    {formatter.number.defaultN(limit?.limit ?? 0)}
                    <Refresh 
                        theme='button'
                        query={api.queries.index.limit.queryApi}
                    />
                </Typography>
            </Typography>

            <Typography
                className={s.averageTop}
                isTextLine
                color='acsent'
                font='additional'
            >
                <Button
                    theme='mini_icon'
                    icon={{
                        size: 'xs3',
                        variant: 'plus'
                    }}
                />

                {t('Увеличить лимит')}
            </Typography>

            <Typography className={s.largeTop} >
                {t('Выберите программу для покупки:')}
            </Typography>

            {/* <Select /> */}

            {/* <Typography
                
                color='main'
                font='additional'
            >
                {t('Сумма покупки от 8 до 100 USDT')}
            </Typography> */}

            <Input
                className={s.averageTop}
                theme='secondary'
                placeholder='Сумма покупки от 8 до 100 USDT'
            />

            <Typography
                className={s.averageTop}
                isTextLine
                color='main'
                font='additional'
            >
                {t('Вы получите токенов индекса: ')}
                <Typography>
                    {formatter.number.defaultN(100.08)}
                </Typography>
            </Typography>

            <Typography className={s.largeTop} >
                {t('Выберите способ оплаты:')}
            </Typography>

            {/* <Select /> */}

            <Button className={s.action_btn} >
                {t('Шаг #1. Подтвердить USDT')}
            </Button>

            <Button className={s.action_btn} >
                {t('Шаг #2. Получить VBTI')}
            </Button>
        </ModalDefault>
    );
};

export const purchaseTokensModalProps: ModalI = {
    ModalElement: PurchaseTokens,
    isOpen: true,
    dataProps: {
        keyModal: PURCHASE_TOKENS_MODAL_KEY
    }
};