import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import acsentIcon from './image/acsent-icon.png';
import { CardProps } from './index.type';
import s from './style.module.scss';

export const Card = ({
  children,
  variant = 'base',
  title,
  className = '',
  classNameContent = '',
  onClick,
  infoClicked
}: CardProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={clsx(s[variant], {}, [className])}
      onClick={onClick}
    >
      {variant === 'acsent' && (
        <>
          <div className={s.acsent_mask_card} />
          <Image src={acsentIcon} className={s.acsent_mask_icon} />
        </>
      )}
      {title && (
        <Typography
          size='m'
          font='main'
          icon={title.variantIcon ? {
            variant: title.variantIcon
          } : undefined}
          className={
            clsx(
              title?.className,
              s.title_align, 
              s[`title_align_${title.align ?? 'left'}`]
            )
          }
          isLoading={title?.isLoading}
          skeletonClass={s.title_skeleton}
        >
          {t(title.text)}
        </Typography>
      )}
      {infoClicked
        && (
          <div
            className={s.info_box}
            onClick={infoClicked}
          >
            <Button
              theme='mini_icon'
              className={s.info_icon}
              icon={{
                variant: 'info',
                size: 'm'
              }}
            />
          </div>
        )}

      <div
        className={clsx(
          s.content,
          classNameContent,
          { [s.content_center]: variant === 'center' }
        )}
      >
        {children}
      </div>
    </div>
  );
};
