import clsx from 'clsx';
import { Table } from 'shared/ui/table';

import {
    tableIndexHead,
    tableIndexSizeX,
    tableizeY
} from '../../config';
import { tableHistoryDepositsIndex } from '../../model';


import s from './style.module.scss';


interface HistoryDepositsIndexTableProps {
    isInTab?: boolean; 
}

export const HistoryDepositsIndexTable = ({
    isInTab
}: HistoryDepositsIndexTableProps) => {
    return(
        <Table
            className={clsx({[s.table]: !isInTab})}
            head={tableIndexHead}
            $content={tableHistoryDepositsIndex.$table}
            $isDataRanedOut={tableHistoryDepositsIndex.$dataRanOut}
            reachedEndOfTable={tableHistoryDepositsIndex.reachedEndOfTable}
            loaddedTable={tableHistoryDepositsIndex.loaddedTable}
            gridX={tableIndexSizeX}
            gridY={tableizeY}
        />
    );
};