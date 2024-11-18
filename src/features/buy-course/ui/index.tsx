import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { ModalDefault } from 'shared/ui/modal';
import { MakePaymentStep, MultiSteps, WaitPaymentStep } from 'shared/ui/multistep-form';

import { BUY_COURSE_MODAL_KEY, type PriceCourseProps } from '../config';
import { 
    $activeStepBuyCourse, 
    settedActiveStepBuyCourse,
    getQrCodeQuery,
    $isCopied,
    $amountUSDT,
    settedPriceCourse,
    copyClicked,
    $paymentHasCleared
} from '../model';

import { PurchaseAccess, ReadConditions } from './steps';

const BuyCourse = ({
    priceUsdt
}:PriceCourseProps) => {
    const [setPriceCourse] = useUnit([settedPriceCourse]);

    useEffect(() => {setPriceCourse(priceUsdt ?? 0);}, [setPriceCourse, priceUsdt]);

    return(
        <ModalDefault
            title={{
                text: 'Получить доступ',
                variantIcon: 'deposit'
            }}
            keyModal={BUY_COURSE_MODAL_KEY}
        >
            <MultiSteps
                $activeStep={$activeStepBuyCourse}
                settedActiveStep={settedActiveStepBuyCourse}
                steps={{
                    1: {
                        title: 'Ознакомьтесь с условиями',
                        condition: true,
                        content: <ReadConditions priceUsdt={priceUsdt} />
                    },
                    2: {
                        title: 'Оплатить доступ',
                        condition: true,
                        content: <PurchaseAccess priceUsdt={priceUsdt} />,
                        next: {
                            text: 'Перейти к оплате',
                            fn: getQrCodeQuery.loaddedData
                        }
                    },
                    3: {
                        title: 'Совершите оплату',
                        condition: true,
                        content: <MakePaymentStep
                            $qrCode={getQrCodeQuery.queryApi.$data}
                            $isCopied={$isCopied}
                            $amountUSDT={$amountUSDT}
                            copyClicked={copyClicked}
                            network='TRC-20'
                        />,
                        next: {
                            text: 'Перевод отправлен'
                            // fn: handlePaymented
                        }
                    },
                    4: {
                        title: 'Ожидание статуса перевода',
                        condition: true,
                        content: <WaitPaymentStep
                            $paymentHasCleared={$paymentHasCleared}
                            keyModal={BUY_COURSE_MODAL_KEY}
                        />,
                        cutomFooterContent: true
                    }
                }}
            />
        </ModalDefault>
    );
};

export const BuyCourseProps = {
    ModalElement: BuyCourse,
    isOpen: true,
    dataProps: {
        keyModal: BUY_COURSE_MODAL_KEY
    }
};
  