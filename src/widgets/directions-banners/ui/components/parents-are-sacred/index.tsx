
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import { WrapperBanner } from '../../wrapper';
import common from '../../wrapper.module.scss';

import s from './style.module.scss';

export const ParentsAreSacred = () => {
    const {t} = useTranslation();
    const nextZoomDate = formatter.date.datePlane(+(new Date()));

    return(
        <WrapperBanner
            type_course='Social'
            title='Родители - это святое'
            description='Социальный некоммерческий проект, который еженедельно помогает сотням тысяч людей обрести счастье и выстроить крепкие и гармоничные отношения со всем миром.'
            media='ParentsAreSacred'
            classNames={{
                book: s.media_book,
                book_content: s.book_content,
                description: s.description,
                icon: s.icon
            }}
            isPayment={true}
        >
            <Typography
                className={common.default_top}
            >
                {t('Благодаря вам, о влиянии родителей на жизнь узнали')}{':'}
            </Typography>

            <div className={s.container_columns}>
                <div>
                    <Icon 
                        className={s.icon_column}
                        variant='status'
                        size='xl2'
                    />
                    <Typography font='additional_bold' color='main'>{t('Всего')}</Typography>
                    <Typography size='m'>{formatter.number.defaultN(3155)}</Typography>
                </div>

                <div>
                    <Icon 
                        className={s.icon_column}
                        variant='user'
                        size='xl2'
                    />
                    <Typography font='additional_bold' color='main'>{t('Лично от вас')}</Typography>
                    <Typography size='m'>{formatter.number.defaultN(21)}</Typography>
                </div>

                <div>
                    <Icon 
                        className={s.icon_column}
                        variant='hierarchy'
                        size='xl2'
                    />
                    <Typography font='additional_bold' color='main'>{t('От ваших близких')}</Typography>
                    <Typography size='m'>{formatter.number.defaultN(3134)}</Typography>
                </div>
            </div>

            <Typography
                className={common.default_top}
                color='main'
                isTextLine
            >
                {t('Следующая публичная консультация')}{':'}
                {nextZoomDate[0] &&
                    <Typography
                        color='acsent'
                    >
                        {nextZoomDate[0]}
                    </Typography>
                }
                {nextZoomDate[1]}
            </Typography>

            <Button
                className={s.zoom_btn}
                icon={{
                    variant: 'video',
                    size: 'xs'
                }}
            >
                {t('Войти в комнату занятия')}
            </Button>
        </WrapperBanner>
    );
};