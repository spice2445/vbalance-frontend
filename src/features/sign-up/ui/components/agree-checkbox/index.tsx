import { FieldDescriptor, useField } from '@filledout/react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Checkbox } from 'shared/ui/checkbox';
import { Typography, TypographyColor } from 'shared/ui/typography';

import { changeConditionalStatus } from '../../../model';

import { ModalConditions, CONDITIONS_KEY } from './modal';
import s from './style.module.scss';

interface AgreeCheckboxProps {
  fieldCheckbox: FieldDescriptor<any, boolean>;
}

export const AgreeCheckbox: FC<AgreeCheckboxProps> = ({ fieldCheckbox }) => {
  const { t } = useTranslation();
  const {
    value,
    errors
  } = useField(fieldCheckbox);
  const setConditions = useUnit(changeConditionalStatus);
  const onSetModal = useUnit(modalsStore.setModal);


  const isHaveError = Boolean(errors?.[0]?.name);
  const colors = {
    main: isHaveError ? 'negative' : 'main',
    acsent: isHaveError ? 'negative' : 'acsent'
  };

  return (
    <Checkbox
      isChoose={value}
      classNames={{
        checkbox: clsx({ [s.errorCheckbox]: isHaveError })
      }}
      onChange={setConditions}
    >
      <Typography
        color={colors.main as TypographyColor}
        font='additional'
        size='xs'
        className={clsx(s.agreeForm)}
        isNotFlex
      >
        {t('Я соглашаюсь с условиями')}
        <Typography
          color={colors.main as TypographyColor}
          font='additional'
          size='xs'
          isNotFlex
          className={clsx(s.second_line, s.agreeForm)}
        >
          <Typography
            color={colors.acsent as TypographyColor}
            font='additional'
            size='xs'
            className={clsx(s.cursor, s.agreeForm)}
            isNotFlex
            onClick={() => onSetModal({
              dataProps: {
                keyModal: CONDITIONS_KEY
              },
              ModalElement: ModalConditions,
              isOpen: true
            })}
          >
            {t('Пользовательского соглашения')}
          </Typography>
          {t('и')}
          <Typography
            color={colors.acsent as TypographyColor}
            font='additional'
            size='xs'
            className={clsx(s.cursor, s.agreeForm)}
            isNotFlex
            onClick={() => onSetModal({
              dataProps: {
                keyModal: CONDITIONS_KEY
              },
              ModalElement: ModalConditions,
              isOpen: true
            })}
          >
            {t('Политики конфиденциальности')}
          </Typography>
        </Typography>
      </Typography>
    </Checkbox>
  );
};
