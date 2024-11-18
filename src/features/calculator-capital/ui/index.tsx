import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle } from 'shared/ui/vbalance-title';

import { infoCapital } from '../model';

import { Calculator, CalculatorCapitalFooter } from './components';
import banner from './image/banner.png';
import s from './style.module.scss';

export const CalculatorCapital = () => {
  const { t } = useTranslation('');
  return (
    <>
      <LoaddedData loaddedData={infoCapital.loaddedData} />
      <Card
        variant='base'
        className={s.card}
        classNameContent={s.card_content}
      >
        <div className={s.container_banner}>
          <Image
            src={banner}
          />
        </div>

        <div className={s.content}>
          <VbalanceTitle
            title='Capital'
            size='l'
            className={s.title_lh_150}
          />

          <Typography
            color='acsent'
            size='xl'
          >
            {t('За 7 лет к финансовой независимости')}
          </Typography>

          <Typography
            color='main'
            size='m'
            font='additional_bold'
            isTextLine
          >
            {t('Синергия направлений ')}
            <Typography
              color='acsent'
              font='additional_bold'
              size='m'
            >
              {'Index'}
            </Typography>
            {t('и')}
            <Typography
              color='acsent'
              font='additional_bold'
              size='m'
            >
              {'Arb'}
            </Typography>
            {t('дает прекрасные финансовые результаты.')}
          </Typography>

          <Calculator />

          <CalculatorCapitalFooter />
        </div>
      </Card>
    </>
  );
};
