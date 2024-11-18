import clsx from 'clsx';
import { FC } from 'react';

import s from './style.module.scss';

type StepProps = {
    activeStep: number,
    currentStep: number,
    disabled: boolean,
    onClick: (step: number) => void
};
export const Step: FC<StepProps> = ({
  currentStep, activeStep, onClick, disabled
}) => (
  <button
    type='button'
    aria-label='btn'
    disabled={disabled}
    onClick={() => !disabled && onClick(currentStep)}
    className={clsx(s.step, { [s.step_active]: activeStep >= currentStep, [s.disabled]: disabled })}
  />
);
