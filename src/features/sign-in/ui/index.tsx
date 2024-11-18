import { useForm } from '@filledout/react';
import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { FieldInput } from 'shared/ui/input';

import { $$form } from '../model';

import s from './style.module.scss';

export const ByEmail = () => {
  const { t } = useTranslation();
  const { onSubmit, fields } = useForm($$form);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={submit} className={s.form}
    >
      <FieldInput
        theme='large'
        name='email'
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
        field={fields.email}
      />

      <FieldInput
        theme='large_password'
        placeholder='Введите пароль'
        name='password'
        autoComplete='current-password'
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
        field={fields.password}
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
          {t('Войти в кабинет')}
        </Button>
      </div>

    </form>
  );
};
