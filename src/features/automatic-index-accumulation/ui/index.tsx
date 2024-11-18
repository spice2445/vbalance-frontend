import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle } from 'shared/ui/vbalance-title';

export const AutomaticIndexAccumulation = () => {
    const {t} = useTranslation();
    return(
        <Card>
           <VbalanceTitle
                title='AIASystem'
                size='l'
           />

           <Typography size='m'>
                {t('Автоматическая система накопления индекса')}
           </Typography>

           <Typography 
                size='m' 
                font='additional'
                color='main'
                isTextLine
            >
                {t('Система аккумулирует от')}
                <Typography size='m' font='additional_bold'>
                    {`${0.5}%`}
                </Typography>
                {t('до')}
                <Typography size='m' font='additional_bold'>
                    {`${1.5}%`}
                </Typography>
                {t('в неделю (24-60% годовых) на всю сумму ваших депозитов.')}
           </Typography>

           <Typography
                font='additional_bold'
                color='main'
                isTextLine
            >
                {t('Минимальный срок депозита:')}
                <Typography font='additional_bold'>
                    {t('12 месяцев с автоматическим продлением')}
                </Typography>
            </Typography>

            <div>
                <Input
                    theme='large'
                    placeholder='Введите сумму депозита USDT'
                />

                <Typography
                    color='main'
                    isTextLine
                >
                    {t('В неделю:')}
                    <Typography
                        color='acsent'
                    >
                        {'- USDT'}
                    </Typography>
                </Typography>
            </div>
        </Card>
    );
};