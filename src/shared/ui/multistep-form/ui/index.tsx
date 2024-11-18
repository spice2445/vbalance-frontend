import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { createStepsReturn } from 'shared/lib/factories';
import { checkStepsConditions } from 'shared/lib/steps-conditions';
import { Button } from 'shared/ui/button';
import { Typography } from 'shared/ui/typography';

import { Step } from './components';
import s from './style.module.scss';

export type StepContent = {
  title: string
  condition: boolean
  content: ReactNode,
  cutomFooterContent?: boolean,
  next?: {
    text?: string,
    fn?: () => void,
  }
};

export type StepItem = Record<number, StepContent>;

export interface StepsProps extends createStepsReturn {
  steps: StepItem,
}

export const MultiSteps = ({ 
  steps, 
  $activeStep,
  settedActiveStep
}: StepsProps) => {
  const [activeStep, setActiveStep] = useUnit([$activeStep, settedActiveStep]);
  const { t } = useTranslation('');

  const isCurrenStepClickAvaliable = (step: number) => {
    const isStepAvaliable = checkStepsConditions(steps, step);

    if (isStepAvaliable || step < activeStep) return true;
    return false;
  };

  // useEffect(() => { step && setActiveStep(step); }, [step]);
  
  const lengthSteps = Object.keys(steps).length;
  const isNextStepClickAvaliable = !checkStepsConditions(steps, activeStep + 1);

  const handleNext = () => {
    steps[activeStep]?.next?.fn?.();

    if(isNextStepClickAvaliable) return; 

    if(lengthSteps !== activeStep) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(1);
    }
  };

  const handlePrev = () => {
    if(activeStep === 1) return;

    steps[activeStep-2]?.next?.fn?.();

    setActiveStep(activeStep - 1);
  };

  const handleNavigation = (step: number, isDisabled: boolean) => () => {
    steps[step-1]?.next?.fn?.();

    if(isDisabled) return; 

    setActiveStep(step);
  };
  
  return (
    <>
      <Typography className={s.amount} size='s' color='acsent_dark'>
        <Typography color='main' size='s'>{`${t('Шаг')}#${activeStep}.`}</Typography>
        {t(steps[activeStep].title)}
      </Typography>
      <div className={s.flex_container}>
        {Object.keys(steps).map((step) => {
          const isDisabled = !isCurrenStepClickAvaliable(Number(step));
          return (
            <Step
              onClick={handleNavigation(Number(step), isDisabled)}
              key={step}
              disabled={isDisabled}
              currentStep={Number(step)}
              activeStep={activeStep}
            />
          );
        })}
      </div>
      
      {steps[activeStep].content}

      {!steps[activeStep]?.cutomFooterContent &&
        <div className={s.footer}>
          {activeStep !== lengthSteps ?
            <>
              <Button
                theme='big_icon'
                onClick={handlePrev}
                disabled={activeStep === 1}
                className={s.back_btn}
                icon={{ variant: 'arrow-reversed', size: 'xs' }}
              />
              <Button
                onClick={handleNext}
                className={s.next_btn}
                icon={{ variant: 'arrow', size: 'xs2' }}
              >
                {t(steps[activeStep]?.next?.text ?? 'Следующий шаг')}
              </Button>
            </>
            :
            <Button
              icon={{ variant: 'arrow-reversed', size: 'xs' }}
              onClick={handlePrev}
            >
              {t('Вернуться назад')}
            </Button>
          }
        </div>
      }
    </>

  );
};
