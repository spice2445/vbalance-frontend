import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { ModalI } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { ModalDefault } from 'shared/ui/modal';
import { Typography } from 'shared/ui/typography';

import s from '../style.module.scss';

const SELL_TOKENS_MODAL_KEY = 'SELL_TOKENS_MODAL';

const SellTokens = () => {
    const {t} = useTranslation();

    return(
        <ModalDefault
            keyModal={SELL_TOKENS_MODAL_KEY}
            title={{
                text: 'Продать токены индекса',
                variantIcon: 'withdraw',
                align: 'center'
            }}
            className={s.modal}
        >
            <Typography className={s.largeTop}>
                {t('Выберите программу для продажи:')}
            </Typography>

            {/* <Select /> */}

            <Typography 
                className={s.averageTop}
                color='main'
                font='additional'
                isTextLine
            >
                {t('Доступно:')}

                <Typography>
                    {`${formatter.number.defaultN(100.08)} VBTI`}
                </Typography>
            </Typography>

            <Input
                className={s.averageTop}
                theme='secondary'
                placeholder='Сумма продажи от 8 до 100 VBTI'
            />

            <Typography 
                className={s.averageTop}
                color='main'
                font='additional'
                isTextLine
            >
                {t('Вы получите USDT:')}

                <Typography>
                    {formatter.number.defaultN(100.08)}
                </Typography>
            </Typography>

            <Typography className={s.largeTop}>
                {t('Выберите способ получения:')}
            </Typography>

            {/* <Select /> */}

            <Button className={s.action_btn} >
                {t('Шаг #1. Подтвердить VBTI')}
            </Button>

            <Button className={s.action_btn} >
                {t('Шаг #2. Получить USDT')}
            </Button>
        </ModalDefault>
    );
};

export const sellTokensModalProps: ModalI = {
    ModalElement: SellTokens,
    isOpen: true,
    dataProps: {
        keyModal: SELL_TOKENS_MODAL_KEY
    }
  }; 