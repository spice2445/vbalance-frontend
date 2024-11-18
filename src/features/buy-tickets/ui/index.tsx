import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { keyModal } from 'shared/lib/modal/index.type';
import { ModalDefault } from 'shared/ui/modal';
import { MakePaymentStep, MultiSteps, WaitPaymentStep } from 'shared/ui/multistep-form';

import { 
  $activeStepBuyTickets, 
  settedActiveStepBuyTickets,
  $isTicketsEnough, 
  $paymentHasCleared, 
  paymented,
  getQrCodeQuery,
  $isCopied,
  $amountUSDT,
  copyClicked
} from '../model';

import { CountTicketsStep, SelectPurchaseStep } from './steps';

interface TicketsModalProps extends keyModal {
  modalStep: number;
}

export const TicketsModal = ({
  keyModal,
  modalStep
}: TicketsModalProps) => {
  const [
    isTicketsEnough, 
    paymentHasCleared
  ] = useUnit([
    $isTicketsEnough, 
    $paymentHasCleared
  ]);
  const [
    handlePaymented,
    setActiveStep
  ] = useUnit([
    paymented,
    settedActiveStepBuyTickets
  ]);

  useEffect(() => {setActiveStep(modalStep);}, [modalStep, setActiveStep]);

  return (
    <ModalDefault
      title={{
        text: 'Получить тикеты',
        variantIcon: 'deposit'
      }}
      keyModal={keyModal}
    >
      <MultiSteps
        $activeStep={$activeStepBuyTickets}
        settedActiveStep={settedActiveStepBuyTickets}
        steps={{
          1: {
            title: 'Введите количество тикетов',
            condition: true,
            content: <CountTicketsStep />
          },
          2: {
            title: 'Выберите способ оплаты',
            condition: isTicketsEnough,
            content: <SelectPurchaseStep />,
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
              text: 'Перевод отправлен',
              fn: handlePaymented
            }
          },
          4: {
            title: 'Ожидание статуса перевода',
            condition: true,
            content: <WaitPaymentStep 
              $paymentHasCleared={$paymentHasCleared}
              keyModal={keyModal}
            />,
            cutomFooterContent: paymentHasCleared
          }
        }}
      />
    </ModalDefault>
  );
};

export const ticketsModalProps = {
  ModalElement: TicketsModal,
  isOpen: true
};
