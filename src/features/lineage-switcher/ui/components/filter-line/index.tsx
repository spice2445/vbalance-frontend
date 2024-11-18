import { useUnit } from 'effector-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { Checkbox } from 'shared/ui/checkbox';
import { Typography } from 'shared/ui/typography';

import {
  changedFilter
} from '../../../model';
import { LineageUserProps } from '../lineage-slider';

import s from './style.module.scss';

interface FilterLineProps extends Omit<LineageUserProps, 'users' | 'nameParent'> {
  filterLine: boolean;
  indexParent: number;
}

export const FilterLine = memo(({
  indexParent,
  filterLine,
  statisticInvited,
  isLoading
}: FilterLineProps) => {
  const { t } = useTranslation('');
  const [onChangedFilter] = useUnit([changedFilter]);

  return (
    <div className={s.filter}>
      <Checkbox
        isChoose={!filterLine}
        onChange={() => onChangedFilter({ idLine: indexParent, value: false })}
      >
        <Typography font='additional'>
          {t('Все пользователи')}
          <Typography
            isLoading={isLoading}
            skeletonClass={s.statistic_skeleton}
            font='additional_bold'
          >
            (
            {formatter.number.defaultN(statisticInvited?.all)}
            )
          </Typography>
        </Typography>
      </Checkbox>

      <Checkbox
        isChoose={filterLine}
        onChange={() => onChangedFilter({ idLine: indexParent, value: true })}
      >
        <Typography font='additional'>
          {t('Только с иерархией')}
          <Typography
            isLoading={isLoading}
            skeletonClass={s.statistic_skeleton}
            font='additional_bold'
          >
            (
            {formatter.number.defaultN(statisticInvited?.direct)}
            )
          </Typography>
        </Typography>
      </Checkbox>
    </div>
  );
});
