import { StoreWritable, EventCallable, Store } from 'effector';

import { TableContentProps, TableHeadProps } from './components/index.type';

export interface TableProps {
    head: TableHeadProps[];
    $content: StoreWritable<TableContentProps | null> | Store<TableContentProps | null>;
    fixedSpeaker?: number;
    $isDataRanedOut: StoreWritable<boolean>;
    reachedEndOfTable: EventCallable<void>;
    loaddedTable: EventCallable<void>;
    gridX:string;
    gridY:string;
    className?: string;
}
