import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { routes } from 'shared/config/router';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Refresh } from 'shared/ui/refresh';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

const columns = ['private', 'staking', 'vesting'];
const balance = api.queries.organization.tokens;

interface CommunityBalanceProps {
  className?: string;
}

export const OrganizationBalance = ({
  className
}:CommunityBalanceProps) => {
  const { t } = useTranslation('');
  const balanceData = useUnit(balance.queryApi.$data);

  return (
    <Card
      className={(s.wrapper, className)}
      title={{
        text: 'Баланс токенов сообщества',
        variantIcon: 'balance',
        align: 'center'
      }}
    >
      <LoaddedData loaddedData={balance.loaddedData} />
      <div className={s.container}>
        <div className={s.conatiner_invitees}>
          {columns.map((title) => (
            <div
              key={title}
              className={s.statistic}
            >
              <Typography
                color='acsent'
                size='s'
                className={s.statistic_title}
              >
                {title}
              </Typography>

              <Typography
                color='main'
                size='l'
                skeletonClass={s.title_skeleton}
                className={s.statistic_count}
                isLoading={!balanceData}
              >
                {formatter.number.defaultN(balanceData?.[title]?.tokens)}
              </Typography>
              <Typography
                color='acsent_dark'
                size='s'
                skeletonClass={s.statistic_skeleton}
                className={s.statistic_count}
                isLoading={!balanceData}
              >
                {`≈ ${formatter.number.defaultN(balanceData?.[title]?.usdt)} USDT`}
              </Typography>
              <div className={s.flex}>
                <Typography
                  color='main'
                  size='xs'
                  className={s.statistic_count}
                  isLoading={!balanceData}
                  skeletonClass={s.course_skeleton}
                >
                  {`${t('Курс')}: ${formatter.number.defaultN(balanceData?.[title]?.exchange_rate)} USDT`}
                </Typography>
                <Refresh
                  theme='button'
                  query={balance.queryApi}
                />
              </div>
            </div>
          ))}
        </div>

        <Button
          icon={{
            variant: 'link',
            size: 'xs'
          }}
          as={Link}
          to={routes.tokenomics}
          className={s.link_tokenomics}
        >
          {t('На страницу токеномики')}
        </Button>
      </div>
    </Card>
  );
};
