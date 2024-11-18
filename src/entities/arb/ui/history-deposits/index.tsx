import clsx from 'clsx';
import { Table } from 'shared/ui/table';

import {
    tableArbHead,
    tableArbSizeX,
    tableizeY
} from '../../config';
import { tableHistoryDepositsArb } from '../../model';

import s from './style.module.scss';

interface HistoryDepositsArbTableProps {
    isInTab?: boolean; 
}

export const HistoryDepositsArbTable = ({
    isInTab
}: HistoryDepositsArbTableProps) => {
    return(
        <Table
            className={clsx({[s.table]: !isInTab})}
            head={tableArbHead}
            $content={tableHistoryDepositsArb.$table}
            $isDataRanedOut={tableHistoryDepositsArb.$dataRanOut}
            reachedEndOfTable={tableHistoryDepositsArb.reachedEndOfTable}
            loaddedTable={tableHistoryDepositsArb.loaddedTable}
            gridX={tableArbSizeX}
            gridY={tableizeY}
        />
    );
};