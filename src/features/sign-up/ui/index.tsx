import { useForm } from '@filledout/react';
import { useUnit } from 'effector-react';
import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { mutations } from 'shared/api/mutations';
import { router } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { FieldInput } from 'shared/ui/input';

import {
  $$formSendCode,
  $$formValidateCode,
  $formStatus,
  FormStatus
} from '../model';

import { AgreeCheckbox, ResendMessage } from './components';
import s from './style.module.scss';

export const ByEmail = () => {
  const { t } = useTranslation();
  const resendCode = useUnit(mutations.auth.byEmail.resendCode.start);
  const {
    onSubmit: sendCode,
    fields: fieldsSendCode
  } = useForm($$formSendCode);
  const {
    onSubmit: validateCode,
    fields: fieldsValidateCode
  } = useForm($$formValidateCode);
  const formStatus = useUnit($formStatus);
  const queryRef = useUnit(router.$query);
  
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formStatus === FormStatus.Initial) sendCode();
    else if (formStatus === FormStatus.ValidateCode) validateCode();
  };

  return (
    <form
      onSubmit={submit} className={s.form}
    >
      <FieldInput
        theme='large'
        name='email'
        disabled={formStatus == FormStatus.ValidateCode}
        autoComplete='email'
        placeholder='Введите электронную почту'
        text={{
          size: 's',
          font: 'additional',
          color: 'main',
          align: 'left'
        }}
        icon={{
          variant: 'email',
          size: 'm'
        }}
        field={fieldsSendCode.email}
      />
      <FieldInput
        theme='large_password'
        placeholder='Введите пароль'
        name='password'
        disabled={formStatus == FormStatus.ValidateCode}
        autoComplete='password'
        text={{
          size: 's',
          font: 'additional',
          color: 'main',
          align: 'left'
        }}
        icon={{
          variant: 'password',
          size: 'm'
        }}
        field={fieldsSendCode.password}
      />

      <FieldInput
        theme='large_password'
        name='password'
        disabled={formStatus == FormStatus.ValidateCode}
        autoComplete='password'
        placeholder='Повторите пароль'
        text={{
          size: 's',
          font: 'additional',
          color: 'main',
          align: 'left'
        }}
        icon={{
          variant: 'password',
          size: 'm'
        }}
        field={fieldsSendCode.confirmPassword}
      />

      {!queryRef?.ref &&
        <FieldInput
          theme='large'
          name='ref'
          disabled={formStatus == FormStatus.ValidateCode}
          placeholder='Введите пригласительный код'
          text={{
            size: 's',
            font: 'additional',
            color: 'main',
            align: 'left'
          }}
          icon={{
            variant: 'user',
            size: 'm'
          }}
          field={fieldsSendCode.refCode}
        />
      }

      <FieldInput
        theme='large'
        disabled={formStatus !== FormStatus.ValidateCode}
        placeholder='Введите код из письма'
        text={{
          size: 's',
          font: 'additional',
          color: 'main',
          align: 'left'
        }}
        icon={{
          variant: 'confirm',
          size: 'm'
        }}
        field={fieldsValidateCode.code}
      />

      <div className={s.actions}>
        <Button
          theme='primary'
          icon={{
            variant: 'confirm',
            size: 'xs'
          }}
          className={s.submit}
        >
          {t(formStatus === 1 ? 'Получить код на почту' : 'Подтвердить регистрацию')}
        </Button>

        {formStatus === FormStatus.ValidateCode && (
          <ResendMessage resentCode={resendCode} />
        )}
      </div>

      <AgreeCheckbox
        fieldCheckbox={fieldsSendCode.checkbox}
      />
    </form>
  );
};
