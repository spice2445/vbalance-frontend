import { Link } from 'atomic-router-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle, VbalanceTitleVariants } from 'shared/ui/vbalance-title';

import { directionCard } from '../../config';

import s from './style.module.scss';

export type directionCourseComponentProps = directionCard & {
  isLoading?:boolean;
  classNames?: {
    card?: string,
    preview?: string,
  };
};

export const DirectionCourseCard = ({
  direction = 'Brinkmann',
  image = '',
  name = '',
  short_description = '',
  url,
  isLoading,
  classNames
}: directionCourseComponentProps) => {
  const { t } = useTranslation();

  return (
    <Card className={clsx(s.card_container, classNames?.card)}>
      <div className={clsx(s.preview, classNames?.preview)}>
        <Image
          src={image}
          isLoading={isLoading}
          skeletonClass={s.preview_loading}
        />
      </div>

      <div data-testid='card-container' className={s.content}>
        <VbalanceTitle
          isLoading={isLoading}
          title={direction.replace('VBALANCE.', '') as VbalanceTitleVariants}
          size='s'
        />

        <Typography
          isLoading={isLoading}
          skeletonClass={s.content_text}
          className={s.content_text}
          size='l'
          color='main'
        >
          {t(name)}
        </Typography>

        <Typography
          isLoading={isLoading}
          skeletonClass={s.content_text}
          className={s.content_text}
          size='s'
          color='main'
          font='additional'
        >
          {t(short_description)}
        </Typography>

        <Button
          isLoading={isLoading}
          skeletonClass={s.cross_over}
          icon={{
            variant: 'link',
            size: 'xs'
          }}
          className={s.cross_over}
          as={Link}
          disabled={!url || url === 'null'}
          to={url ?? ''}
        >
          {t('Перейти к направлению')}
        </Button>
      </div>
    </Card>
  );
};
