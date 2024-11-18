import { TypographyColor, TypographyFont } from 'shared/ui/typography';

import { positionAlign } from '../align';

import { 
    CellHierarchyActionProps, 
    CellUserProps, 
    DescriptionCellProps, 
    ModificationCellProps,
    CellActionDepositProps,

    numberCell, 
    textCell,
    numberIndicatorCell,
    ModificationCell,
    CellUser,
    DescriptionCell,
    CellHierarchyAction,
    CellActionDeposit
} from './cells-content';


export type CellPropsContent = string | number | ModificationCellProps | CellUserProps | 
DescriptionCellProps | CellHierarchyActionProps | CellActionDepositProps;

export type CellPropsType = textCell | numberCell | numberIndicatorCell | ModificationCell | CellUser | 
DescriptionCell | CellHierarchyAction | CellActionDeposit;

export type CellPropsPostion = positionAlign;

export interface CellProps {
    content?: CellPropsContent
    type: CellPropsType,
    label?: string,
    color?: TypographyColor;
    font?: TypographyFont;
    position?: CellPropsPostion;
    index:number,
    fixedSpeakers?: number[];
}

export type {
    CellActionDepositProps, 
    CellHierarchyActionProps, 
    CellUserProps, 
    DescriptionCellProps, 
    ModificationCellProps 
};
