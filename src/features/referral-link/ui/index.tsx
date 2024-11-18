import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { api } from 'shared/api';
import { routes } from 'shared/config/router';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import { STATISTIC_COLUMNS, referralLink } from '../config';
import {
  $isCopied,
  copyClicked 
} from '../model';

import s from './style.module.scss';

const personalInfo = api.queries.user.personalLink;

interface ReferralUserProps {
  className?: string;
}

export const ReferralUser = ({
  className
}: ReferralUserProps) => {
  const { t } = useTranslation('');
  const [personalInfoData, isCopied] = useUnit([personalInfo.queryApi.$data, $isCopied]);
  const [copy] = useUnit([copyClicked]);

  console.log(personalInfoData);
  return (
    <Card
      title={{
        text: 'Персональная ссылка для приглашения',
        variantIcon: 'share',
        align: 'center'
      }}
      className={className}
    >
      <LoaddedData loaddedData={personalInfo.loaddedData} />
      <div className={s.container}>
        <div className={s.container_link}>
          <Typography
            isLoading={!personalInfoData}
            className={s.referral_link}
            skeletonClass={s.referral_link_skeleton}
            size='s'
            color='acsent'
            font='additional'
            onClick={copy}
          >
            <span className={s.referral_link_text}>{referralLink?.replace(window.location.protocol+'//', '')}{personalInfoData?.referral_code}</span>
          </Typography>

          <Button
            isLoading={!personalInfoData}
            icon={{
              variant: 'copy',
              size: 'xs'
            }}
            className={s.copy_referral}
            onClick={copy}
          >
            {t(isCopied ? 'Скопировано!' : 'Скопировать ссылку')}
          </Button>
        </div>

        <div className={s.conatiner_invitees}>
          {STATISTIC_COLUMNS.map((title, index) => (
            <div
              key={title}
              className={s.statistic}
            >
              <Typography
                color='acsent'
                size='s'
                className={s.statistic_title}
              >
                {t(title)}
              </Typography>

              <Typography
                color='main'
                size='l'
                className={s.statistic_count}
                isLoading={!personalInfoData?.referrals}
              >
                {formatter.number.defaultN(Object.values(personalInfoData?.referrals ?? {})?.[index])}
              </Typography>
            </div>
          ))}
        </div>

        <Button
          isLoading={!personalInfoData}
          icon={{
            variant: 'link',
            size: 'xs'
          }}
          as={Link}
          to={routes.my_organization}
          className={s.link_organizations}
          skeletonClass={s.link_organizations}
        >
          {t('На страницу организации')}
        </Button>
      </div>
    </Card>
  );
};
