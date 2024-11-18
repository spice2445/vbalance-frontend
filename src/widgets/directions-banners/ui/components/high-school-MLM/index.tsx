import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import { WrapperBanner } from '../../wrapper';
import common from '../../wrapper.module.scss';

import s from './style.module.scss';

export const HighSchoolMLM = () => {
    const {t} = useTranslation();

    return(
        <WrapperBanner
            type_course='Brinkmann'
            title='Высшая школа МЛМ'
            description='Единственная в мире школа, которая обучает многоуровневому маркетингу как профессии, от первого партнера до управления большой организацией.'
            media='HighSchoolMLM'
            classNames={{
                book: s.media_book,
                book_content: s.book_content,
                description: s.description,
                icon: s.icon
            }}
            isPayment={false}
        >
            <Typography
                className={clsx(s.description, common.default_top)}
                color='main'
                font='additional'
            >
                {t('Это самая высокооплачиваемая профессия в независимости от того, где вы находитесь, сколько вам лет, и рода деятельности.')}
            </Typography>

            <div className={clsx(s.list, common.payment_top)}>
                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('8 блоков обучения')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Наставник по прохождению школы')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Рабочие материалы')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Система отработки и оценок навыков «Пятерочки»')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('PDF версия каждого занятия')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('Сертификат о прохождении школы')}</Typography>
            </div>

            <Typography
                className={common.payment_top} 
                color='main'
                font='additional_bold'
                isTextLine
            >
                {`${t('Стоимость участия в первом потоке')}:`}
                <Typography
                    className={s.old_price}
                    font='additional_bold'
                    isTextLine
                >
                    {formatter.number.defaultN(3500)}
                </Typography>

                <Typography
                    color='acsent'
                    font='additional_bold'
                    isTextLine
                >
                    {formatter.number.defaultN(2500)}{' USDT'}
                </Typography>
            </Typography>
        </WrapperBanner>
    );
};