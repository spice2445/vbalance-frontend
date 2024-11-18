import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { Typography } from 'shared/ui/typography';

import { footer, footerStaticInfo } from '../../../config';
import { infoCapital } from '../../../model';

import s from './style.module.scss';

export const CalculatorCapitalFooter = () => {
  const { t } = useTranslation('');
  const infoCapitalData = useUnit(infoCapital.$data);
  return (
    <div className={s.footer}>
      {footer.map((element: footerStaticInfo, index) => (
        <Typography
          key={element.icon}
          icon={{
            variant: element.icon,
            size: 'l',
            fill: 'green'
          }}
          color='acsent'
          font='additional_bold'
          isTextLine
          isLoading={!infoCapitalData}
        >
          {formatter.number.defaultN(infoCapitalData?.[element.icon])}
          {index !== 0 && ' USDT'}
          <Typography
            color='acsent_dark'
            font='additional_bold'
            as='span'
          >
            {t(element.label)}
          </Typography>
        </Typography>
      ))}
    </div>
  );
};
