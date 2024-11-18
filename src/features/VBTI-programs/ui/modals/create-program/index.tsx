import { useTranslation } from 'react-i18next';
import { ModalI } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { ModalDefault } from 'shared/ui/modal';
import { Typography } from 'shared/ui/typography';

import s from '../style.module.scss';


const CREATE_PROGRAM_MODAL_KEY = 'CREATE_PROGRAM_MODAL';

const CreateProgram = () => {
    const {t} = useTranslation();

    return(
        <ModalDefault
            keyModal={CREATE_PROGRAM_MODAL_KEY}
            title={{
                text: 'Продать токены индекса',
                variantIcon: 'add',
                align: 'center'
            }}
            className={s.modal}
        >
            <Typography className={s.largeTop} >
                {t('Программа для добавления:')}
            </Typography>

            {/* <Select className={s.averageTop} /> */}

            <Input
                classNames={{
                    body: s.largeTop
                }}
                theme='large'
                placeholder='Имя и фамилия'
            />

            <Input
                classNames={{
                    body: s.averageTop
                }}
                theme='large'
                placeholder='Дата рождения'
            />

            <Button className={s.action_btn} >
                {t('Создать программу')}
            </Button>
        </ModalDefault>
    );
};

export const createProgramModalProps: ModalI = {
    ModalElement: CreateProgram,
    isOpen: true,
    dataProps: {
        keyModal: CREATE_PROGRAM_MODAL_KEY
    }
  };