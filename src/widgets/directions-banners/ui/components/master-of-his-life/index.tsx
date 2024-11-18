import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import { WrapperBanner } from '../../wrapper';
import common from '../../wrapper.module.scss';

import s from './style.module.scss';

export const MasterOfHisLife = () => {
    const {t} = useTranslation();

    return(
        <WrapperBanner
            type_course='Brinkmann'
            title='Высшая школа МЛМ'
            description='Единственная в мире школа, которая обучает многоуровневому маркетингу как профессии, от первого партнера до управления большой организацией.'
            media='MasterOfHisLife'
            classNames={{
                book: s.media_book,
                book_content: s.book_content,
                description: s.description,
                icon: s.icon
            }}
            isPayment={false}
        >
            <div className={clsx(s.list, common.large_top)}>
                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своей жизни')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своих коммуникаций')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своих чувств')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своего влияния')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своих отношений')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своих целей')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своей судьбы')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своих денег')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своего счастья')}</Typography>

                <Typography
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Мастер своего дела')}</Typography>
            </div>

            <Typography
                className={common.payment_top} 
                color='main'
                font='additional_bold'
                isTextLine
            >
                {`${t('Стоимость программы')} ${10} ${t('из курсов')}:`}
                <Typography
                    color='acsent'
                    font='additional_bold'
                    isTextLine
                >
                    {`${formatter.number.defaultN(1000)} USDT`}
                </Typography>
            </Typography>
        </WrapperBanner>
    );
};