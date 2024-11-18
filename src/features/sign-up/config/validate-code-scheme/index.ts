import { string, object } from 'yup';

export const scheme = object({
    code: string()
      .min(6, 'Код должен содержать 6 символов')
      .max(6, 'Код должен содержать 6 символов')
      .required('Обязательное поле')
});