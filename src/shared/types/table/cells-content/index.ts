
export type textCell = 'text';
export type numberCell = 'number';
export type numberIndicatorCell = 'number_indicator';

export type ModificationCell = 'modification';
export interface ModificationCellProps {
    content: number;
    token: string;
}

export type CellUser = 'user';
export type CellUserProps = {
    avatar: string,
    name: string,
    line?: string
};

type crediting_commission = {
    line: string;
    summa: string;
}
type crediting_deposit = {
    id: string;
    percent: string;
    date: string;
}

export type DescriptionCell = 'description';
export interface DescriptionCellProps {
    type: 'crediting_commission' | 'crediting_deposit';
    content: crediting_commission | crediting_deposit;
}

export type CellHierarchyAction = 'action_hierarchy';
export type CellHierarchyActionProps = {
    link: string,
    linkTelegram: string,
};

export type CellActionDeposit = 'action_deposit';
export type CellActionDepositProps = {
    propsEdit: Record<string, any> & {
        isDisabled: boolean,
    },
    propsWithdraw: Record<string, any> & {
        isDisabled: boolean,
    },
};

