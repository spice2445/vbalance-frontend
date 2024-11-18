import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Icon, IconVariant } from 'shared/ui/icon';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import { bonusesGroupFisrt, bonusesGroupSecond } from '../../config';
import { $cardProfile } from '../../model';

import ProgressLine from './image/progress.svg';
import s from './style.module.scss';

export const ProfileCard = () => {
  const { t } = useTranslation('');
  const cardProfile = useUnit($cardProfile);
  const isLoading = !cardProfile;
  const status = !isLoading ? t(cardProfile.status) : '';

  return (
    <Card
      variant='acsent'
      className={s.size_card}
      classNameContent={s.paddings}
    >
      <div className={s.content}>
        <div className={s.content_head}>
          <div className={s.avatar_head}>
            <Image 
              isLoading={isLoading} 
              src={cardProfile?.avatar ?? ''} 
            />
          </div>

          <div className={s.container_meta}>
            <Typography
              isLoading={isLoading}
              color='white'
              size='l'
              className={s.name_user}
            >
              {cardProfile?.name}
            </Typography>

            <Typography
              color='white'
              size='s'
              className={s.status_user}
            >
              {t('Мой статус:')}
              <Typography
                isLoading={isLoading}
                className={s.status_color}
                as='span'
              >
                {`«${t(status)}»`}
              </Typography>
            </Typography>
          </div>
        </div>

        <div className={s.bonuses}>
          <div className={s.fisrt_group}>
            {bonusesGroupFisrt.map((title, index) => (
              <div key={title} className={s.block_fisrt}>
                <Typography
                  font='additional'
                  color='white'
                >
                  {t(title)}
                </Typography>

                <Typography
                  isLoading={isLoading}
                  skeletonClass={s.content_first_loading}
                  size='m'
                  color='white'
                >
                  {cardProfile && 
                    `${formatter.number.defaultN(cardProfile?.bonusesGroupFisrt * (index === 0 ? 1 : 10))} ${index === 0 ? ' USDT' : '%'}`
                  }
                </Typography>
              </div>
            ))}
          </div>

          <div className={s.second_group}>
            {bonusesGroupSecond.map((key) => {
              const bonus = (cardProfile?.bonusesGroupSecond?.[key] ?? '-').toString();
              return (
                <div key={key} className={s.block_second}>
                  <Icon
                    variant={`proportion-${bonusesGroupSecond.length - key}` as IconVariant}
                    size='m'
                    isAnimated={false}
                  />
  
                  <Typography
                    isLoading={isLoading}
                    size='m'
                    color='white'
                  >
                    {bonus}{bonus !== '-' ? '%' : ''}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>

        <div className={s.actions}>
          <Button
            isLoading={isLoading}
            theme='white' icon={{
              size: 's',
              variant: 'status'
            }}
            as={Link}
            to={routes.profile.statuses}
          >
            {t('Карьерный план и статусы')}
          </Button>

          <Button
            isLoading={isLoading}
            theme='second' icon={{
              size: 's',
              variant: 'user'
            }}
            as={Link}
            to={routes.profile.redactor}
          >
            {t('Редактировать профиль')}
          </Button>
        </div>
      </div>

      <div className={s.progress_status}>
        <ProgressLine />
        <Typography
          isLoading={isLoading}
          skeletonClass={s.status_title_skeleton}
          size='xl'
          className={s.status_title}
          as='span'
        >
          {status.toUpperCase()}
        </Typography>
      </div>
    </Card>
  );
};
