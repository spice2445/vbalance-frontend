import { ClearLayout } from 'layouts';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Typography } from 'shared/ui/typography';

import template from '../template.module.scss';

import s from './style.module.scss';

export const PageError = () => {
  const { t } = useTranslation('');

  return (
    <ClearLayout>
      <div
        className={template.page}
      >
        <Typography
          color='acsent_dark'
          className={s.title}
        >
          {t('OOOOPS!')}
        </Typography>
        <Typography
          color='acsent'
          className={template.subtitle}
          size='xl'
        >
          {t('Произошла ошибка!')}
        </Typography>
        <Typography
          font='additional'
          className={template.description}
          color='main'
          size='m'
        >
          {t('Вероятно, на сайте произошла какая-то ошибка.')}
        </Typography>
        <Typography
          font='additional_bold'
          className={template.description2}
          color='acsent_dark'
          size='m'
        >
          {t('Пожалуйста, попробуйте перезагрузить страницу или написать в поддержку.')}
        </Typography>
        <Button
          icon={{ variant: 'frame', size: 'xs' }}
          onClick={() => window.location.reload()}
        >
          {t('Перезагрузить страницу')}
        </Button>
      </div>
    </ClearLayout>

  );
};
