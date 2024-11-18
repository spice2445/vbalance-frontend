import { createFactory } from '@withease/factories';
import { Store, combine, createEvent, createStore, sample } from 'effector';
import { TableContentProps } from 'shared/ui/table';

interface filterCellType {
    index: number,
    type: 'asc' | 'desc'
}

interface tableFilterProps {
    $content: Store<TableContentProps | null>
}

export const createTableFilter = createFactory(({
    $content
}: tableFilterProps) => {
    const $filterCell = createStore<filterCellType | null>(null);
    const $filteredContent = combine($content, $filterCell, (content, filterCell) => {
        if(filterCell !== null && content !== null) {
            // return content[filterCell.index].map((cell) => cell.content)
        }

        return content;
    });

    const changedFilter = createEvent<number>();
    
    sample({
        clock: changedFilter,
        source: $filterCell,
        fn: (store, index): filterCellType => {
            if(store?.index === index) {
                if(store.type === 'asc') {
                    return { index, type: 'desc' };
                } else {
                    return { index, type: 'asc' };
                }
            }

            return { index, type: 'asc' };
        },
        target: $filterCell
    });

    return {
        $filterCell,
        $filteredContent,
        changedFilter
    };
});