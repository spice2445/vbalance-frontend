import { Step } from 'shared/ui/multistep-form';

export const checkStepsConditions = (steps: Step, step: number) => {
  for (let i = 1; i <= step; i++) {
    if (steps[i] && !steps[i].condition) {
      return false;
    }
  }
  return true;
};
