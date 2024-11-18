import { t } from 'i18next';
import { DescriptionCellProps } from 'shared/types/table';
import { Typography, TypographyProps } from 'shared/ui/typography';

export const converterDescription = ({
  type,
  content
}: DescriptionCellProps) => {
  const props: TypographyProps = {
    as: 'span',
    isNotFlex: true
  };
  const data = content as any;

  switch (type) {
    case 'crediting_commission':
      return (
        <>
          {t('Зачисление комиссии за покупку благотворительного пакета VBALANCE.Life ')}
          <Typography {...props}>{t(`в ${data.line}  ${data.summa} USDT. `)}</Typography>
          {t('линии на сумму ')}
          <Typography {...props}>{t(`${data.summa} USDT.`)}</Typography>
        </>
      );

    case 'crediting_deposit':
      return (
        <>
          {t('Зачисление прибыли с депозита VBALANCE.ARB.ID депозита: ')}
          <Typography {...props}>{data.id}</Typography>
          {t(' Условия депозита: ')}
          <Typography {...props}>{t(`до ${data.percent}% ежемесячно. `)}</Typography>
          {t('Срок депозита: ')}
          <Typography {...props}>{t(`${data.date} месяцев.`)}</Typography>
        </>
      );

    default:
      return '';
  }
};
