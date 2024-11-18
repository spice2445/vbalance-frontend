
import { useUnit } from 'effector-react';
import { ModalDefault } from 'shared/ui/modal';
import { MultiSteps } from 'shared/ui/multistep-form';

import { WITHDRAWAL_USDT_MODAL_KEY } from '../config';
import { $conditionSecondStep, $conditionThirdStep, $activeStepWithdrawUSDT, settedActiveStepWithdrawUSDT } from '../model';

import { ConfrimData, CountUsdt, SelectVariant, WaitWithdraw } from './steps';

const WithdrawalUsdtModal = () => {
    const [conditionSecondStep, conditionThirdStep] = useUnit([$conditionSecondStep, $conditionThirdStep]);

    return (
        <ModalDefault
            title={{
                text: 'Вывести USDT',
                variantIcon: 'withdraw'
            }}
            keyModal={WITHDRAWAL_USDT_MODAL_KEY}
        >
            <MultiSteps
                $activeStep={$activeStepWithdrawUSDT}
                settedActiveStep={settedActiveStepWithdrawUSDT}
                steps={{
                    1: {
                        title: 'Введите сумму вывода',
                        condition: true,
                        content: <CountUsdt />
                    },
                    2: {
                        title: 'Выберите способ вывода',
                        condition: conditionSecondStep,
                        content: <SelectVariant  />,
                        next: {
                            // fn: getQrCodeQuery.loaddedData
                        }
                    },
                    3: {
                        title: 'Подтвердите данные',
                        condition: conditionThirdStep,
                        content: <ConfrimData />,
                        next: {
                            text: 'Подтвердить данные'
                            // fn: handlePaymented
                        }
                    },
                    4: {
                        title: 'Ожидайте вывода',
                        condition: true,
                        content: <WaitWithdraw />,
                        cutomFooterContent: true
                    }
                }}
            />
        </ModalDefault>
    );
};

export const withdrawalUsdtProps = {
    ModalElement: WithdrawalUsdtModal,
    isOpen: true,
    dataProps: {
        keyModal: WITHDRAWAL_USDT_MODAL_KEY
    }
};
  