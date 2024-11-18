
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

// import title_background from './assets/title.mp4';
import s from './style.module.scss';

export const FirstBlock = () => {
    const {t} = useTranslation();

    return(
        <div className={s.content}>
            <Typography
                isTextLine
                font='landing_regular'
                color='main'
                size='l'
            >
                {t('В счастливую жизнь через')}

                <Typography
                    font='landing_bold'
                    size='l'
                    color='acsent'
                >
                    {t('финансовую свободу')}
                </Typography>
                
                {t('и')}

                <Typography
                    font='landing_bold'
                    size='l'
                    color='acsent'
                >
                    {t('самореализацию')}
                </Typography>
            </Typography>

            {/* <div className={s.vabalance_section}>
                <video
                    className={s.title_video}
                    src={title_background}
                    autoPlay
                    loop
                    muted
                />
                <h1 className={s.title}>
                    VBALANCE
                </h1>
            </div> */}

            <div className={s.center_content}>
                <div className={s.description_content}>
                    <Typography
                        size='m'
                        color='acsent_dark'
                        font='landing_bold'
                    >
                        {t('Мультиязычное комьюнити креативных людей, которые смотрят с перспективой в будущее, используя новые технологии в сфере финансов и саморазвития')}
                    </Typography>

                    <div className={s.description_columns} >
                        <Typography
                            color='main'
                            size='s'
                            font='landing_regular'
                        >
                            <Icon
                                className={s.columns_icon}
                                variant='directions'
                                size='xl2'
                            />
                            {t('Помогаем каждому сделать капитал в новых условиях финансового рынка')}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};