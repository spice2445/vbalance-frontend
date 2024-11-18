import { formatter } from 'shared/lib/formatter';
import { DescriptionCellProps } from 'shared/types/table';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const DescriptionCell = ({
  type,
  content
}: DescriptionCellProps) => (
  <Typography
    color='main'
    font='additional'
    className={s.description}
  >
    {formatter.table.description({ type, content })}
  </Typography>
);
