import { StoreWritable } from 'effector';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Loader } from 'shared/ui/loader';
import { Typography } from 'shared/ui/typography';

import PaymentHasClearedIcon from './assets/paymentHasCleared.svg';
import s from './style.module.scss';

interface WaitPaymentStepProps {
    $paymentHasCleared: StoreWritable<boolean>,
    keyModal: string
}

export const WaitPaymentStep = ({
    $paymentHasCleared,
    keyModal
}: WaitPaymentStepProps) => {
    const {t} = useTranslation('');
    const [paymentHasCleared] = useUnit([$paymentHasCleared]);
    const onCloseModal = useUnit(modalsStore.closeModal);

    return(
        <>
            {paymentHasCleared ? 
                <PaymentHasClearedIcon 
                    className={s.body}
                />
                :
                <Loader 
                    className={s.body}
                    size='m'
                />
            }

            {paymentHasCleared && 
                <Typography
                    onClick={() => onCloseModal({keyModal})}
                    className={s.ready}
                    size='m'
                >
                    {t('Оплата завершена')}
                </Typography>
            }
        </>
    );
};