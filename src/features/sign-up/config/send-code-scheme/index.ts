import { string, ref, object, boolean} from 'yup';

export const scheme = object({
    email: string()
      .email('Введите правильный email')
      .required('Обязательное поле'),
    password: string()
      .required('Обязательное поле'),
    confirmPassword: string()
      .oneOf([ref('password'), ''], 'Пароли должны совпадать')
      .required('Обязательное поле'),
    refCode: string(),
    checkbox: boolean().isTrue().required()
  });