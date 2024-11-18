import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { equityPoolsArbCard } from 'shared/api/queries/arb/pools';
import { formatter } from 'shared/lib/formatter';
import { Card } from 'shared/ui/card';
import { IconVariant } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

type poolInfoColumnVariant = 'count_users' | 'sum' | 'sum_month'
// | 'distributedAmount' | 'monthlyPerParticipant';

const PoolInfoColumn: Record<poolInfoColumnVariant, string> = {
  count_users: 'Количество пользователей',
  sum: 'Общая сумма депозитов',
  // distributedAmount: 'Сумма для распределения',
  sum_month: 'Ежемесячно на участника'
};

interface equityPoolsArbCardProps {
  poolInfo?: equityPoolsArbCard;
  index: number;
  isLoading?: boolean;
}

export const CardPoolInfo = ({
  poolInfo,
  index,
  isLoading
}: equityPoolsArbCardProps) => {
  const { t } = useTranslation('');
  const indexProportion = 5 - index;
  const iconTitle = indexProportion === 0 ? 'partner' : `proportion-${indexProportion}`;
  const textTitle = indexProportion === 0 ? 'Партнерский Пул' : `Пул ${formatter.number.defaultN(poolInfo?.conditions)}`;

  return (
    <Card
      variant='center'
      title={{
        text: textTitle,
        variantIcon: iconTitle as IconVariant,
        align: 'center',
        isLoading
      }}
      className={clsx(s.card, {[s.card_active]: poolInfo?.is_active})}
      classNameContent={s.card_content}
      key={iconTitle}
    >
      <Typography
        isTextLine
        isLoading={isLoading}
        skeletonClass={s.needParticipate_loading}
      >
        {t('Условия участия: ')}
        
        {index !== 5 ?
          <>
            <Typography color='acsent'>
              {formatter.number.defaultN(poolInfo?.sum)}
            </Typography>
            {`/ ${formatter.number.defaultN(poolInfo?.conditions)} USDT`}
          </>
          :
          <Typography color='acsent'>
            {t('Статус «Партнер»')}
          </Typography>
        }
        
      </Typography>

      <div className={clsx(s.info_column, {[ s.conatiner_columns_loading]: isLoading})}>
        {Object.entries(PoolInfoColumn).map(([key, text], index) => (
          <Typography
            font='additional'
            color='main'
            key={key}
            as='span'
            isTextLine
          >
            {`${t(text)}:`}
            <Typography
              font='additional'
              color='acsent'
              isLoading={isLoading}
              skeletonClass={s.info_column_loading}
            >
              {`${formatter.number.defaultN(poolInfo?.[key as poolInfoColumnVariant])} ${index !== 0 ? 'USDT' : ''}`}
            </Typography>
          </Typography>
        ))}
      </div>

      <div className={s.info_column_bottom}>
        <Typography
          color='main'
          size='l'
          isTextLine
          isLoading={isLoading}
        >
          {formatter.number.defaultN(poolInfo?.sum_week)}
          <Typography
            size='l'
          >
            {'USDT'}
          </Typography>
        </Typography>
        <Typography color='acsent'>{t('Еженедельно')}</Typography>
      </div>
    </Card>
  );
};
