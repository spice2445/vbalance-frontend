import { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';

import { ModalDefault } from '.';

const ButtonComponent = (
  <div style={{
    width: '100%',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '150px'
  }}
  >
    <Button>button 1</Button>
    <Button>button 2</Button>
  </div>
);

const STORYBOOK_MODAL_KEY = 'STORYBOOK_MODAL_KEY';

const meta: Meta<typeof ModalDefault> = {
  title: 'shared/Modal',
  component: ModalDefault,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    className: '',
    children: ButtonComponent,
    keyModal: STORYBOOK_MODAL_KEY,
    title: {
      variantIcon: 'balance',
      text: 'Example Title',
      align: 'center'
    }
  },
  argTypes: {
    className: {
      description: 'Сторонний класс'
    },
    children: {
      name: 'content',
      description: 'Контент модального окна'
    },
    keyModal: {
      description: 'СПециальный ключ-констатнта для модалки'
    }
    // 'title.variantIcon': {
    //   description: 'Вариант иконки у тайтла',
    //   defaultValue: 'coin-1',
    //   options: VariantsIcon,
    //   control: 'select'
    // },
    // 'title.text': {
    //   description: 'Текст тайтла',
    //   defaultValue: 'Example Title',
    // },
    // 'title.align': {
    //   description: 'Расположение тайтла',
    //   defaultValue: 'center',
    //   control: 'select',
    //   options: ['left', 'center', 'right']
    // }
  }
};

export default meta;

type Story = StoryObj<typeof ModalDefault>;

export const Default: Story = {
  decorators: [(Story) => {
    const modalProps = {
      ModalElement: Story,
      isOpen: true,
      dataProps: {
        keyModal: STORYBOOK_MODAL_KEY
      }
    };

    return (
      <>
        <Button onClick={() => modalsStore.setModal(modalProps)}>Open modal</Button>
        <Story />
      </>
    );
  }]
};
