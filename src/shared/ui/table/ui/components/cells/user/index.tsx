import { useTranslation } from 'react-i18next';
import { CellUserProps } from 'shared/types/table';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const UserCell = ({
  avatar,
  name,
  line
}: CellUserProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <Image src={avatar} className={s.avatar} />
      <Typography color='main' font='additional_bold'>
        {t(name)}
        {line
        && <Typography font='additional_bold'>{t(`(${line} линия)`)}</Typography>}

      </Typography>
    </div>
  );
};
