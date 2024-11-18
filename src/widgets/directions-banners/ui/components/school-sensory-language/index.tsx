import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import { WrapperBanner } from '../../wrapper';
import common from '../../wrapper.module.scss';

import s from './style.module.scss';

export const SchoolSensoryLanguage = () => {
    const {t} = useTranslation();

    return(
        <WrapperBanner
            type_course='Brinkmann'
            title='Школа языка чувств'
            description='Настоящая «волшебная таблетка» которая исполняет все желания. Начните говорить на языке, с которым Вы пришли в этот мир.'
            media='SchoolSensoryLanguage'
            classNames={{
                book: s.media_book,
                book_content: s.book_content,
                description: s.description
            }}
            isPayment={false}
        >
            <Typography
                className={clsx(s.description, common.default_top)}
                color='main'
                font='additional'
            >
                {t('Цель школы - научить вас чувствовать свои состояния и проживать их, выражая словами, развивая в мыслях, и закрепляя действиями. Слова могут идти от головы или от сердца. Слова, идущие от сердца, называются Языком чувств.')}
            </Typography>

            <Typography
                className={s.large_top} 
                color='main'
                font='additional_bold'
                isTextLine
            >
                {t('Как прожить жизнь по сердцу:')}

                <div className={s.explanation}>
                    <Typography color='acsent' font='additional_bold'>
                        {t('Ощущаю')}
                    </Typography>

                    <Icon 
                        variant='arrow'
                        size='xs2'
                        fill='green'
                    />

                    <Typography color='acsent' font='additional_bold'>
                        {t('Выражаю')}
                    </Typography>

                    <Icon 
                        variant='arrow'
                        size='xs2'
                        fill='green'
                    />

                    <Typography color='acsent' font='additional_bold'>
                        {t('Думаю')}
                    </Typography>

                    <Icon 
                        variant='arrow'
                        size='xs2'
                        fill='green'
                    />

                    <Typography color='acsent' font='additional_bold'>
                        {t('Делаю')}
                    </Typography>
                </div>
            </Typography>

            <div className={s.list}>
                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('12 блоков обучения')}</Typography>

                <Typography 
                    className={s.column} 
                    icon={{
                        variant: 'arrow',
                        size: 'xs2',
                        fill: 'green'
                    }}
                    font='additional_bold' 
                >{t('168 часов осознания себя')}</Typography>
            </div>

            <Typography
                className={common.default_top} 
                color='main'
                font='additional_bold'
                isTextLine
            >
                {`${t('Стоимость программы из 12 блоков')}:`}
                <Typography
                    className={s.old_price}
                    color='acsent'
                    font='additional_bold'
                    isTextLine
                >
                    {formatter.number.defaultN(1200)}{' USDT'}
                </Typography>
            </Typography>
        </WrapperBanner>
    );
};