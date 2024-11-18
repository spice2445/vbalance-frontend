import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { statusIdsI } from 'shared/types/user-statuses';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import { LineageUser } from '../../../config';
import { choosedUserLineage } from '../../../model';

import s from './style.module.scss';

type UserCardProps = Partial<LineageUser> & {
  isLoading?: boolean;
  indexParents?: [number, number];
  isChoosedUser?:boolean;
}

export const UserCard = memo(({
  avatar,
  name,
  status,
  indexParents,
  organizationCount,
  firstLineCount,
  isLoading,
  isChoosedUser
}: UserCardProps) => {
  const { t } = useTranslation('');
  const onChooseUserLineage = useUnit(choosedUserLineage);

  const choseUser = () => {
    if(indexParents && !isChoosedUser) {
      onChooseUserLineage({ indexParents });
    }
  };

  return (
    <Card
      className={clsx(s.slider__element, { [s.active_element]: isChoosedUser })}
      variant='center'
      onClick={choseUser}
    >
      <div className={s.user_avatar}>
        <Image 
          src={avatar ?? ''} 
          isLoading={isLoading} 
        />
      </div>
      <Typography
        isLoading={isLoading}
        color='main'
        size='m'
        className={s.name}
        skeletonClass={s.name_skeleton}
      >
        {name}
      </Typography>
      <Typography
        isLoading={isLoading}
        skeletonClass={s.status_skeleton}
        className={s.status}
      >
        {t(`Статус: «${formatter.string.statusProfile((status ?? 'base') as statusIdsI)}»`)}
      </Typography>

      <div className={s.statistic}>
        <Typography color='main' font='additional'>
          {t('Прямые пользователи: ')}
          <Typography
            isLoading={isLoading} font='additional'
            skeletonClass={s.statistic_skeleton}
          >
            {formatter.number.defaultN(firstLineCount)}
          </Typography>
        </Typography>

        <Typography color='main' font='additional'>
          {t('Всего пользователей: ')}
          <Typography
            isLoading={isLoading} font='additional'
            skeletonClass={s.statistic_skeleton}
          >
            {formatter.number.defaultN(organizationCount)}
          </Typography>
        </Typography>
      </div>
    </Card>
  );
});
