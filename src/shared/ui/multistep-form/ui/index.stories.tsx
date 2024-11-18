import { Meta, StoryObj } from '@storybook/react';
import { invoke } from '@withease/factories';
import { CenterDecorator } from 'shared/config/storybook';
import { createSteps } from 'shared/lib/factories';
import { ModalDefault } from 'shared/ui/modal';

import { MultiSteps } from '.';

const {
  $activeStep,
  settedActiveStep
} = invoke(createSteps, {});

const steps = {
  1: {
    title: 'Первый заголовок шага',
    condition: true,
    content: <div>шаг 1 контент</div>
  },
  2: {
    title: 'Второй заголовок шага',
    condition: true,
    content: <div>шаг 2 контент</div>
  },
  3: {
    title: 'Третий заголовок шага',
    condition: true,
    content: <div>шаг 3 контент</div>
  },
  4: {
    title: 'Четвертый заголовок шага',
    condition: true,
    content: <div>шаг 4 контент</div>
  },
  5: {
    title: 'Пятый заголовок шага',
    condition: false,
    content: <div>шаг 5 контент</div>
  }
};

const meta: Meta<typeof MultiSteps> = {
  title: 'shared/MultiSteps',
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  component: MultiSteps,
  args: {
    steps,
    $activeStep,
    settedActiveStep
  },
  argTypes: {
    steps: {
      description: 'Шаги'
    },
    $activeStep: {
      description: 'Еффектор стор: На каком шагу открыть'
    }
  }
};

export default meta;

type Story = StoryObj<typeof MultiSteps>;

const MODAL_MULTISTEP_KEY = 'MODAL_MULTISTEP_KEY';

export const Default: Story = {
  decorators: [(Story) => (
    <>
      {/* <Button onClick={() => setIsOpen(true)}>Open modal</Button> */}
      <ModalDefault
        title={{ text: 'Title', align: 'center', variantIcon: 'balance' }}
        keyModal={MODAL_MULTISTEP_KEY}
      >
        <Story />
      </ModalDefault>
    </>

  )]
};
