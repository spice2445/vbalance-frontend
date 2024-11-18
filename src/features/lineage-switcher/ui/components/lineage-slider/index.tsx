import { 
  useStoreMap,
  useUnit 
} from 'effector-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import { LineageUser } from '../../../config';
import { makeSyllable } from '../../../lib';
import {
  $debouncedSearch, 
  $filterlineage
} from '../../../model';
import { FilterLine } from '../filter-line';
import { ProgressBar } from '../progress-bar';
import { UserCard } from '../user-card';

import s from './style.module.scss';

export interface LineageUserProps {
  users?: LineageUser[],
  indexParent?: number,
  nameParent?: string,
  statisticInvited?:{
    all:number,
    direct:number,
  },
  isLoading: boolean,
  choosedUser?: number,
}

export const LineageSlider = ({
  users,
  indexParent = 0,
  nameParent,
  statisticInvited,
  choosedUser,
  isLoading
}: LineageUserProps) => {
  const { t } = useTranslation('');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true
  });
  const [search] = useUnit([$debouncedSearch]);
  const filterLine = useStoreMap(
    $filterlineage,
    (lines) => Boolean(lines[indexParent])
  );

  return (
    <div className={s.lineage_container}>
      <Typography 
        size='m' 
        skeletonClass={s.title_loading}
        isLoading={isLoading}
      >
        <span className={s.lineage_index}>
          {indexParent + 1}
        </span>
        {indexParent > 0
          ? `${t(`${makeSyllable(indexParent)} линия от пользователя: `)}${nameParent}`
          : t('Прямые пользователи')}
      </Typography>

      <FilterLine
        statisticInvited={statisticInvited}
        filterLine={filterLine}
        isLoading={isLoading}
        indexParent={indexParent}
      />

      <div className={s.slider}>
        <div className='shadow_x' ref={emblaRef}>
          <div className={s.slider__container}>
            {(!isLoading && users) ? 
              users.map((user, index) => {
                if (
                  (
                    (filterLine && ((user.organizationCount) + (user.firstLineCount)) > 0)
                    || !filterLine
                  )
                  && 
                  (user.name?.toLocaleLowerCase())?.includes(search.toLocaleLowerCase())
                ) {
                  return (
                    <UserCard
                      key={user.id}
                      {...user}
                      indexParents={[indexParent, index]}
                      isChoosedUser={choosedUser === index}
                    />
                  );
                }
                return null;
              })
              : (new Array(5)).fill(1).map((a, i) => i).map((key) => (
                <UserCard
                  isLoading
                  key={key}
                />
              ))}
          </div>
        </div>

        <ProgressBar emblaApi={emblaApi} />
      </div>
    </div>
  );
};
