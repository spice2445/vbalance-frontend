import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import { WrapperBanner } from '../../wrapper';
import common from '../../wrapper.module.scss';


import Energy from './icons/energy.svg';
import Fire from './icons/fire.svg';
import Happy from './icons/happy.svg';
import Health from './icons/health.svg';
import Money from './icons/money.svg';
import Time from './icons/time.svg';
import s from './style.module.scss';

export const AcademyMastering = () => {
    const {t} = useTranslation();

    return(
        <WrapperBanner
            type_course='Social'
            title='Валюта жизни'
            description='Что это такое? И что делать, чтобы в твоем «кошельке» её было столько, чтобы ни в чем себе не отказывать?'
            media='CurrencyLife'
            classNames={{
                book: s.media_book,
                book_content: s.book_content,
                card: s.card,
                description: s.description
            }}
            isPayment={false}
        >
            <Typography
                className={common.mini_top}
                font='additional_bold'
            >
                {t('Этот проект для тебя, если')}{':'}
            </Typography>

            <div className={clsx(s.list, common.large_top)}>
                <div className={s.column}>
                    <Money />
                    <Typography color='main' font='additional_bold' >{t('Не хватает денег на жизнь, о которой мечтаешь')}</Typography>
                </div>

                <div className={s.column}>
                    <Time />
                    <Typography color='main' font='additional_bold' >{t('Испытываешь недостаток времени для главного')}</Typography>
                </div>

                <div className={s.column}>
                    <Energy />
                    <Typography color='main' font='additional_bold' >{t('Чувствуешь выгорание и истощение внутреннего ресурса')}</Typography>
                </div>

                <div className={s.column}>
                    <Happy />
                    <Typography color='main' font='additional_bold' >{t('Не испытываешь счастье и удовлетворенность от каждого дня')}</Typography>
                </div>

                <div className={s.column}>
                    <Health />
                    <Typography color='main' font='additional_bold' >{t('Имеются проблемы со здоровьем у тебя или у близких')}</Typography>
                </div>

                <div className={s.column}>
                    <Fire />
                    <Typography color='main' font='additional_bold' >{t('Не хватает теплоты и уважения в отношениях')}</Typography>
                </div>
            </div>
        </WrapperBanner>
    );
};