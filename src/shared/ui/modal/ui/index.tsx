import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { positionAlign } from 'shared/types/align';
import { Button } from 'shared/ui/button';
import { IconVariant } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface ModalDefaultProps {
  className?: string;
  children?: ReactNode;
  title?: {
    text:string,
    variantIcon?:IconVariant,
    align?:positionAlign;
  }
  keyModal:string;
}

export const ModalDefault = ({
  className,
  children,
  title,
  keyModal
}: ModalDefaultProps) => {
  const { t } = useTranslation('');
  const onCloseModal = useUnit(modalsStore.closeModal);

  return (
    <div className={clsx(s.content, className)}>
      <div className={s.header}>
        {title && 
          <Typography
            icon={title.variantIcon ? {
              variant: title.variantIcon,
              size: 'l'
            } : undefined}
            className={clsx(s.title_align, s[`title_align_${title.align ?? 'center'}`])}
            size='m'
          >
            {t(title?.text)}
          </Typography>
        }
        <Button
          data-testid='close-button'
          theme='mini_icon' className={s.close} icon={{ variant: 'close', size: 'xs' }}
          onClick={() => onCloseModal({ keyModal })}
        />
      </div>
      <div className={s.center}>{children}</div>
    </div>
  );
};
