import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { ModalI } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { ModalDefault } from 'shared/ui/modal';
import { Typography } from 'shared/ui/typography';

import s from '../style.module.scss';


const AUTO_PURCHASE_TOKENS_MODAL_KEY = 'AUTO_PURCHASE_TOKENS_MODAL';

const AutoPurchaseTokens = () => {
    const {t} = useTranslation();

    return(
        <ModalDefault
            keyModal={AUTO_PURCHASE_TOKENS_MODAL_KEY}
            title={{
                text: 'Автоматическая покупка VBTI',
                variantIcon: 'play',
                align: 'center'
            }}
            className={clsx(s.modal, s.modal_autopurchase)}
        >
            <Typography
                className={s.largeTop}
                color='main'
                font='additional'
            >
                {t('Автоматическая покупка осуществляется только с баланса личного кабинета на каждую активную программу отдельно.')}
            </Typography>

            <Typography className={s.largeTop} >
                {t('Программа для авто-покупки:')}
            </Typography>

            {/* <Select className={s.averageTop} /> */}

            <Typography className={s.largeTop} >
                {t('Регулярность авто-покупки:')}
            </Typography>

            {/* <Select className={s.averageTop} /> */}

            <Input
                classNames={{
                    body: s.averageTop
                }}
                theme='large'
                placeholder='Сумма автоматической покупки в USDT'
            />

            <Button className={s.action_btn} >
                {t('Включить авто-покупку VBTI')}
            </Button>
        </ModalDefault>
    );
};

export const autoPurchaseTokensModalProps: ModalI = {
    ModalElement: AutoPurchaseTokens,
    isOpen: true,
    dataProps: {
        keyModal: AUTO_PURCHASE_TOKENS_MODAL_KEY
    }
  };