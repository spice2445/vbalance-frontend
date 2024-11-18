import { ModificationCellProps } from 'shared/types/table';
import { Typography } from 'shared/ui/typography';

export const ModificationCell = ({
  content,
  token
}: ModificationCellProps) => {
  const isPositive = content > 0;
  const theme = isPositive ? 'positive' : 'negative';
  const symbol = isPositive ? '+' : '';

  return (
    <Typography color={theme} font='additional_bold'>
      {symbol}
      {content}
      {' '}
      {token}
    </Typography>
  );
};
