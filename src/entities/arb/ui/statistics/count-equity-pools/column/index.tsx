import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { $statusProfile } from 'entities/user';
import { useTranslation } from 'react-i18next';
import { countEquityPoolsArbColumn } from 'shared/api/queries/arb/calculation-pools';
import { formatter } from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import {
  StatusesPercent
} from '../../../../config';
import { getStatusCountPoolsArb } from '../../../../lib';
import common from '../../common.module.scss';

import s from './style.module.scss';

interface ColumnProps {
  title?: string,
  column?: countEquityPoolsArbColumn,
  indexColumn?: number,
  isLoading?: boolean;
}

export const Column = ({
  title,
  column,
  indexColumn = 0,
  isLoading
}:ColumnProps) => {
  const { t } = useTranslation('');
  const statusUser = useUnit($statusProfile);
  const statusUserFormat = getStatusCountPoolsArb(statusUser);
  const percent = column?.percent ?? 10;

  return (
    <div className={common.column_content} key={indexColumn}>
      <Typography
        color='acsent'
        isLoading={isLoading}
        skeletonClass={common.skeleton_text}
      >
        {title && t(title)}
      </Typography>
      <Typography
        size='l'
        color='main'
        className={s.gap_text}
        isLoading={isLoading}
        skeletonClass={common.skeleton_text}
      >
        {formatter.number.defaultN(column?.sum ?? 0)}
        <Typography
          size='l'
          color='acsent'
        >
          (
          {percent}
          %)
        </Typography>
      </Typography>
      <Typography
        color='acsent_dark'
        className={s.gap_text}
      >
        {t('Всего: ')}
        <Typography
          color='acsent'
          isLoading={isLoading}
          skeletonClass={common.skeleton_text}
        >
          {formatter.number.defaultN(column?.sum_all ?? 0)}
        </Typography>
        USDT
      </Typography>

      <div className={s.statuses_column}>
        {Object.entries(StatusesPercent)
          .map(([status, percent]) => (
            <Typography
              className={clsx({ [s.status_hide]: status !== statusUserFormat })}
              color={status !== statusUserFormat ? 'acsent_dark' : 'acsent'}
              font='additional'
              isLoading={isLoading}
              skeletonClass={common.skeleton_text}
            >
              {`${t(status)} (${indexColumn === 2 ? percent / 10 : percent}%)`}
            </Typography>
          ))}
      </div>
    </div>
  );
};
