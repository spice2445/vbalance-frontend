import clsx from 'clsx';
import { formatter} from 'shared/lib/formatter';
import {
  CellHierarchyActionProps,
  CellActionDepositProps,
  CellProps, 
  CellUserProps, 
  DescriptionCellProps,
   ModificationCellProps
} from 'shared/types/table';
import { Typography } from 'shared/ui/typography';

import s from '../../../style.module.scss';
import { ActionDepositCell } from '../action-deposit';
import { ActionHierarchyCell } from '../action-hierarchy';
import { DescriptionCell } from '../description';
import { ModificationCell } from '../modification';
import { UserCell } from '../user';

const converterCell = ({
  type,
  content,
  label
}: Pick<CellProps, 'type' | 'content' | 'label'>) => {
  switch (type) {
    case 'number':
    case 'number_indicator':
      return `${content as number > 0 && type === 'number_indicator' ? '+' : ''}`+formatter.number.defaultN(content as number) + (label ?? '');

    case 'modification':
      return (
        <ModificationCell
          {...(content as ModificationCellProps)}
        />
      );

    case 'user':
      return <UserCell {...(content as CellUserProps)} />;

    case 'description':
      return <DescriptionCell {...(content as DescriptionCellProps)} />;

    case 'action_hierarchy':
      return <ActionHierarchyCell {...(content as CellHierarchyActionProps)} />;

    case 'action_deposit':
      return <ActionDepositCell {...(content as CellActionDepositProps)} />;

    default:
      return content as string;
  }
};

const convertColor = ({content, type, color}: Pick<CellProps, 'content' | 'type' | 'color'>) => {
  switch (type) {
    case 'number_indicator':
      return content as number > 0 ? 'positive' : 'negative';
    default:
      return color;
  }
};

export const DefaultCell = ({
  content,
  type,
  label,
  color = 'main',
  font = 'additional_bold',
  position = 'center',
  fixedSpeakers,
  index
}: CellProps) => (
  <Typography
    color={convertColor({content, type, color})}
    font={font}
    className={clsx(
      s.cell_content,
      {
        [s.fixed_cell]:
          fixedSpeakers?.indexOf(index + 1) !== -1
      }
    )}
    aria-details={position}
    as='div'
  >
    {converterCell({ content, type, label })}
  </Typography>
);
