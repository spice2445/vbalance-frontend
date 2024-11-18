import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import { type depositsArb } from '../../../../config';
import common from '../../common.module.scss';

interface ColumnProps {
    column: depositsArb;
    statistic?: string;
    isLoading?:true;
}

export const Column = ({
  column,
  statistic,
  isLoading
}:ColumnProps) => {
  const { t } = useTranslation('');
  return (
    <div className={common.column_content} key={column.title}>
      <Typography
        size='s'
        color='acsent'
      >
        {t(column?.title)}
      </Typography>

      <Typography
        size='l'
        color='main'
        isLoading={isLoading}
        skeletonClass={common.skeleton_text}
      >
        {statistic}
      </Typography>

      <Typography
        size='s'
        color='acsent'
      >
        {`USDT ${t(column?.subtitle ?? '')}`}
      </Typography>
    </div>
  );
};
