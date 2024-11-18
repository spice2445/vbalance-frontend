import clsx from 'clsx';
import { Store, StoreWritable, EventCallable } from 'effector';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Countdown } from 'shared/ui/countdown';
import { QrCode } from 'shared/ui/qr-code';
import { Skeleton } from 'shared/ui/skeleton';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface MakePaymentStepProps {
    $qrCode: Store<string | null>
    $isCopied: StoreWritable<boolean>, 
    $amountUSDT: StoreWritable<number>, 
    copyClicked:  EventCallable<void>,
    network: 'TRC-20' | 'BEP-20'
}

export const MakePaymentStep = ({
    $qrCode,
    $isCopied, 
    $amountUSDT, 
    copyClicked,
    network
}: MakePaymentStepProps) => {
    const {t} = useTranslation('');
    
    const [
        qrCodeAddress, 
        isCopied,
        amountUSDT
    ] = useUnit([
        $qrCode, 
        $isCopied,
        $amountUSDT
    ]);
    const [onCopyClicked] = useUnit([copyClicked]);

    return(
        <>
            <Typography
                font='additional'
                color='main'
                align='center'
                isNotFlex
                as='span'
            >
                {t('Переведите точную сумму:')}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {` ${amountUSDT} USDT `}
                </Typography>
                {t('на кошелек в сети')}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {` ${network}. `}
                </Typography>
                {t('Подтверждение оплаты занимает')}
                <Typography
                    font='additional_bold'
                    as='span'
                    isNotFlex
                >
                    {t(' до 20 минут.')}
                </Typography>
            </Typography>

            <Typography
                className={s.large_top}
                font='additional_bold'
                color='main'
                align='center'
                isTextLine
                as='span'
            >
                {`${t('Адрес кошелька ')} USDT Tether`}
                <Typography
                    font='additional_bold'
                    color='acsent'
                    as='span'
                >
                    {network}
                </Typography>
            </Typography>

            <Typography
                className={s.mini_top}
                font='additional'
                align='center'
            >
                {t('Этот адрес активен 20 минут. По истечении этого времени, создайте новую заявку.')}
            </Typography>

            <Countdown
                seconds={3600-1}
                customRenderer={({minutes, seconds}) => (
                    <Typography
                        className={s.mini_top}
                        size='xl'
                    >
                        {formatter.date.timeCountdown(minutes)}:{formatter.date.timeCountdown(seconds)}
                    </Typography>
                )}
            />

            <Typography
                onClick={onCopyClicked}
                className={clsx(s.mini_top, s.address)}
                font='additional'
                color='acsent'
                size='xs'
                isLoading={!qrCodeAddress}
                skeletonClass={clsx(s.mini_top, s.skeleton_address)}
            >
                {qrCodeAddress}
            </Typography>

            <Button
                onClick={onCopyClicked}
                className={s.mini_top}
                icon={{
                    variant: 'copy',
                    size: 's'
                }}
            >
                {t(isCopied ? 'Скопировано!' : 'Скопировать адрес')}
            </Button>

            {qrCodeAddress ?
                <QrCode 
                    value={qrCodeAddress ?? ''}
                    className={s.large_top}
                />
                :
                <Skeleton 
                    isLoading
                    skeletonClass={clsx(s.large_top, s.skeleton_qr)}
                />
            }

            <Typography
                className={s.large_top}
                font='additional'
                color='main'
                align='center'
                isNotFlex
                as='span'
            >
                {t('Обратите внимание на сеть')}
                <Typography
                    font='additional'
                    color='acsent'
                    isNotFlex
                    as='span'
                >
                    {` ${network}. `}
                </Typography>
                {t('Если перевод будет отправлен в другой сети, то ваши средства пропадут безвозвратно. Мы не сможем возместить пропажу.')}
            </Typography>
        </>
    );
};