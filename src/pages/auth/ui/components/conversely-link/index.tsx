import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { router, routes, RoutePath } from 'shared/config/router';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

const texts: Record<string, string[]> = {
  [RoutePath['auth/sign-up']]: ['Уже зарегистрированы?', 'Войти'],
  [RoutePath['auth/sign-in']]: ['Ещё не зарегистрированы?', 'Зарегистрироваться']
};

export const ConverselyLink = () => {
  const { t } = useTranslation();
  const [path, query] = useUnit([router.$path, router.$query]);
  const [navSignIn, navSignUp] = useUnit([routes.auth.signIn.navigate, routes.auth.signUp.navigate]);
  const navigate = path === RoutePath['auth/sign-in'] ? navSignUp : navSignIn;

  return (
    <Typography
      color='main'
      font='additional'
      className={s.conversely_link}
    >
      {t(texts[path][0])}
      <Typography
        onClick={() => navigate({
          query: query.method ? { method: query.method } : {},
          params: {},
          replace: true
        })}
        color='acsent'
        font='additional'
      >
        {t(texts[path]?.[1])}
      </Typography>
    </Typography>
  );
};
