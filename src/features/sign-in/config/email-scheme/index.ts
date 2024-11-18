import { object, string } from 'yup';

export const scheme = object({
    email: string()
      .email('Введите правильный email')
      .required('Обязательное поле'),
    password: string()
      .required('Обязательное поле')
});