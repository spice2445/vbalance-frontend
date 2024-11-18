import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { useLoadingMock } from 'shared/lib/lazy';
import { Card } from 'shared/ui/card';
import { Typography } from 'shared/ui/typography';

import { TurnoverContentProps } from './../../config';
import s from './style.module.scss';

const variantsData = {
  personaly: {
    content: 5_800,
    title: 'Личный'
  },
  hierarchies: {
    content: 1_161_400,
    title: 'В иерархии'
  }
};

const TypographyData = ({ data, isLoading }: TurnoverContentProps) => {
  const { t } = useTranslation();
  return (
    <Typography className={clsx(isLoading && s.skeleton_content)}>
      <Typography isLoading={isLoading} size='l' color='main'>
        {formatter.number.defaultN(data.content)}
      </Typography>
      <Typography size='s' color='acsent'>
        {`USDT ${t(data.title)}`}
      </Typography>
    </Typography>
  );
};

export const Turnover = () => {
  const isLoading = useLoadingMock(1000);

  return (
    <Card
      title={{
        text: 'Товарооборот организации 1 167 200',
        variantIcon: 'money'
      }}
    >
      <div className={clsx(s.content)}>
        <TypographyData isLoading={isLoading} data={variantsData.personaly} />
        <TypographyData isLoading={isLoading} data={variantsData.hierarchies} />
      </div>
    </Card>
  );
};
