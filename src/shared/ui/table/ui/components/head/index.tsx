import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from '../../style.module.scss';
import { HeadProps } from '../index.type';

export const HeadCell = ({
  content,
  isFilterable = false,
  position = 'center',
  onClick,
  index,
  fixedSpeaker
}: HeadProps) => {
  const { t } = useTranslation();
  return (
    <Typography
      onClick={onClick && onClick(index)}
      className={clsx(
        s.cell_head,
        s.filterable,
        {
          [s.fixed_cell]: fixedSpeaker === index + 1
        }
      )}
      aria-details={position}
      as='div'
    >
      {t(content)}
      {isFilterable
        && <Icon variant='sort' size='xs2' />}
    </Typography>
  );
};
