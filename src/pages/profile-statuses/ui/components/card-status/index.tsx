import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Button, ThemeButton } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Icon, IconVariant } from 'shared/ui/icon';
import { Skeleton } from 'shared/ui/skeleton';
import { Typography, TypographyColor } from 'shared/ui/typography';

import type { CardStatuses } from '../../../config';

import s from './style.module.scss';

type CardStatusProps = CardStatuses & {
  isLoading?: boolean
};

export const CardStatus = ({
  isLoading,
  theme,
  isBuyable,
  status = '',
  includedStatus = '',
  commision = 0,
  magicBonus = 0,
  proporions,
  getUsdtMonth = 0,
  price = 0,
  turnover
}: CardStatusProps) => {
  const { t } = useTranslation('');
  const isBase = theme === 'base';
  const colors = {
    title: isBase ? 'acsent' : 'white',
    text: isBase ? 'main' : 'white',
    data: isBase ? 'acsent_dark' : 'white',
    button_buy: isBase ? 'primary' : 'white',
    price: isBase ? 'acsent_dark' : 'white',
    status_sideways: isBase ? s.status_sideways : s.status_sideways_acsent,
    propotion_percent: isBase ? s.propotion_percent : s.propotion_percent_acsent
  };

  return (
    <Card
      variant={theme}
      className={clsx(s.size_card, s.base_paddings, { [s.buyable_height]: isBuyable })}
      classNameContent={s.paddings}
    >
      <Typography
        color={colors.title as TypographyColor}
        size='m'
        isLoading={isLoading}
        skeletonClass={s.container_content}
      >
        {t(`Статус «${status}»`)}
      </Typography>

      {isBuyable
        ? (
          <div className={s.statistic}>
            <div className={s.statistic_column}>
              <Typography
                color={colors.text as TypographyColor}
                font='additional'
                size='xs'
              >
                {t('Комиссии за тикеты / статусы')}
              </Typography>
              <Typography
                color={colors.data as TypographyColor}
                skeletonClass={s.statistic_skeleton}
                isLoading={isLoading}
              >
                {formatter.number.defaultN(commision)}
                {' USDT / '}
                {`${formatter.number.defaultN(commision * 10)}%`} {/* !!!!! MOCK 10 */}
                {'(1-5 '}
                {t('линии')}
                {')'}
              </Typography>
            </div>

            <div className={s.statistic_column}>
              <Typography
                color={colors.text as TypographyColor}
                font='additional'
                size='xs'
              >
                {t('Магический бонус')}
              </Typography>
              <Typography
                color={colors.data as TypographyColor}
                skeletonClass={s.statistic_skeleton}
                isLoading={isLoading}
              >
                {`${t('Разница до')} ${formatter.number.defaultN(magicBonus)} USDT`}
              </Typography>
            </div>
          </div>
        )
        : (
          <Typography
            className={s.include_status}
            font='additional'
            color='main'
            size='xs'
          >
            {t('Включает все бонусы, комиссии, и долевые пулы статуса')}
            <Typography
              font='additional_bold'
              color='acsent_dark'
              size='xs'
              skeletonClass={s.statistic_skeleton}
              isLoading={isLoading}
            >
              «
              {t(includedStatus)}
              »
            </Typography>
          </Typography>
        )}

      <div className={s.procents_statuses}>
        {proporions ? proporions.map((proportion) => (
          <div
            key={proportion.icon}
            className={colors.propotion_percent}
          >
            <Icon
              fill='green'
              size='m'
              variant={`proportion-${proportion.icon}` as IconVariant}
            />
            <Typography className={s.full_text} size='xs'>
              {proportion.percent}
              %
              <Typography color={colors.data as TypographyColor} size='xs'>
                {t(` Пул ${proportion.status}`)}
              </Typography>
            </Typography>
          </div>
        ))
          : skeletonGeneration(4).map((key) => (
            <Button
              key={key}
              isLoading
              className={s.propotion_percent}
              as='div'
            />
          ))}
      </div>

      <Typography
        className={s.get_usdt}
        color={colors.text as TypographyColor}
        font='additional'
        size='xs'
      >
        {t('За последний месяц')}
        <Typography
          color={colors.data as TypographyColor}
          font='additional_bold'
          size='xs'
        >
          {t(' Менторы ')}
        </Typography>
        {t('получили за долевое участие: ')}
        <Typography
          color={colors.data as TypographyColor}
          font='additional_bold'
          size='xs'
          isLoading={isLoading}
          skeletonClass={s.statistic_skeleton}
        >
          {`${formatter.number.defaultN(getUsdtMonth)} USDT`}
        </Typography>
      </Typography>

      {isBuyable
        ? (
          <>
            <div className={s.buy_status}>
              <Button
                theme={colors.button_buy as ThemeButton}
                icon={{
                  variant: 'user',
                  size: 'xs'
                }}
                isLoading={isLoading}
              >
                {t(`Стать «${status}ом»`)}
              </Button>

              <Typography
                className={s.price}
                as='span'
                color={colors.price as TypographyColor}
                font='additional'
                size='xs'
              >
                {t('Стоимость активации:')}
                <Typography
                  color={colors.data as TypographyColor}
                  isLoading={isLoading}
                  skeletonClass={s.statistic_skeleton}
                >
                  {`${formatter.number.defaultN(price)} USDT`}
                </Typography>
              </Typography>
            </div>

            <Typography
              className={colors.status_sideways}
              skeletonClass={s.status_sideways_skeleton}
              isLoading={isLoading}
              as='h2'
            >
              {t(status.toLocaleUpperCase())}
            </Typography>
          </>
        )
        : (
          <div className={s.achivment_turnover}>
            <Typography
              className={s.turnover_title}
              color='main'
              isLoading={isLoading}
              skeletonClass={s.container_content}
            >
              {t('Товарооборот: ')}
              <Typography color='acsent'>
                {formatter.number.defaultN(turnover?.done)}
              </Typography>
              {`/ ${formatter.number.defaultN(turnover?.need)} USDT`}
            </Typography>

            {isLoading
              ? <Skeleton isLoading skeletonClass={s.turnover_progress} />
              : (
                <div className={s.turnover_progress}>
                  <div
                    className={s.turnover_progress_bar}
                    style={{
                      width: `${((turnover?.done ?? 0 * 100) / (turnover?.need ?? 0)) * 100}%`
                    }}
                  />
                </div>
              )}

          </div>
        )}
    </Card>
  );
};
