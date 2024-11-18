import { Link } from 'atomic-router-react';
import { useTranslation } from 'react-i18next';
import { CellHierarchyActionProps } from 'shared/types/table';
import { Button } from 'shared/ui/button';

import s from './style.module.scss';

export const ActionHierarchyCell = ({
  link,
  linkTelegram
}: CellHierarchyActionProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <Button
        icon={{
          variant: 'search',
          size: 'xs'
        }}
        as={Link}
        to={link}
      >
        {t('Показать в иерархии')}
      </Button>

      <Button
        theme='big_icon'
        icon={{
          variant: 'telegram_theme',
          size: 'm'
        }}
        as={Link}
        to={linkTelegram}
      />
    </div>
  );
};
