import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Loader } from 'shared/ui/loader';
import { Typography } from 'shared/ui/typography';

import { TICKETS_MODAL_KEY } from '../../../config';
import { $paymentHasCleared } from '../../../model';

import PaymentHasClearedIcon from './assets/paymentHasCleared.svg';
import s from './style.module.scss';

export const WaitPaymentStep = () => {
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
                    onClick={() => onCloseModal({keyModal: TICKETS_MODAL_KEY})}
                    className={s.ready}
                    size='m'
                >
                    {t('Оплата завершена')}
                </Typography>
            }
        </>
    );
};