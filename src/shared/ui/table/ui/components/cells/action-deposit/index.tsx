import { useTranslation } from 'react-i18next';
import { CellActionDepositProps } from 'shared/types/table';
import { Button } from 'shared/ui/button';

import s from './style.module.scss';

export const ActionDepositCell = ({
  propsEdit,
  propsWithdraw
}: CellActionDepositProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <Button
        theme='transparent'
        className={s.action}
        disabled={propsEdit?.isDisabled}
      >
        {t('Редактировать')}
      </Button>

      <Button
        className={s.action}
        disabled={propsWithdraw?.isDisabled}
      >
        {t('Вывести')}
      </Button>
    </div>
  );
};
