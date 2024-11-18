
import { useUnit } from 'effector-react';
import { ClearLayout } from 'layouts';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { Logo } from 'shared/ui/logo';
import { Typography } from 'shared/ui/typography';

import template from '../template.module.scss';

import s from './style.module.scss';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('');
  const navigate = useUnit(routes.profile._.open);

  return (
    <ClearLayout>
      <div
        className={template.page}
      >
        <div className={s.logo_wrapper}>
          <Typography className={s.title} color='acsent_dark'>4</Typography>
          <Logo onClick={navigate} className={s.logo} size='small' />
          <Typography className={s.title} color='acsent_dark'>4</Typography>
        </div>
        <Typography
          color='acsent'
          className={template.subtitle}
          size='xl'
        >
          {t('Страница не найдена')}
        </Typography>
        <Typography
          font='additional'
          className={template.description}
          color='main'
          size='m'
        >
          {t('Вероятно, страница была удалена, перемещена или никогда не существовала.')}
        </Typography>
        <Typography
          font='additional_bold'
          className={template.description2}
          color='acsent_dark'
          size='m'
        >
          {t('Пожалуйста, убедитесь, что вы ввели правильный URL адрес.')}
        </Typography>
        <Button
          icon={{ variant: 'frame', size: 'xs' }}
          onClick={navigate}
        >
          {t('Открыть главную страницу')}
        </Button>
      </div>
    </ClearLayout>

  );
};