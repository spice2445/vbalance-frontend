import { EventCallable, StoreWritable } from 'effector';
import { useUnit } from 'effector-react';
import { Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { skeletonGeneration } from 'shared/lib/lazy';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import { CardStatuses } from '../../../config';
import { CardStatus } from '../card-status';

import s from './style.module.scss';

interface LayoutDescriptionsProps {
  title: string;
  descriptions: string[];
  isBuyable:boolean;
  loadedData: EventCallable<void>;
  $statuses: StoreWritable<CardStatuses[] | null>;
}

export const LayoutDescriptions = ({
  title,
  descriptions,
  isBuyable,
  loadedData,
  $statuses
}: LayoutDescriptionsProps) => {
  const { t } = useTranslation('');
  const statuses = useUnit($statuses);

  return (
    <div>
      <LoaddedData loaddedData={loadedData} />
      <Typography
        color='main'
        size='m'
        icon={{
          variant: 'status',
          size: 'l'
        }}
      >
        {t(title)}
      </Typography>

      <Typography
        color='main'
        font='additional'
        size='s'
        className={s.description}
      >
        {descriptions.map((description) => (
          <Fragment key={description}>
            {t(description)}
            <br />
          </Fragment>
        ))}
      </Typography>

      <div className={s.container_cards}>
        {statuses ? statuses.map((status) => (
          <CardStatus key={status.status} {...status} />
        ))
          : skeletonGeneration(4).map((index) => (
            <CardStatus
              theme={index === 0 && isBuyable ? 'acsent' : 'base'}
              key={index}
              isLoading
              isBuyable={isBuyable}
            />
          ))}
      </div>
    </div>
  );
};
