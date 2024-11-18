import {
  CellProps, CellPropsPostion
} from 'shared/types/table';

export type HeadProps = Omit<CellProps, 'color' | 'content' | 'type' | 'fixedSpeakers'> & {
    isFilterable?: boolean;
    onClick: ((index:number) => () => void) | undefined;
    content: string;
    fixedSpeaker?: number;
}

export type TableContentItem = Omit<CellProps, 'index' | 'fixedSpeakers'> 
export type TableContentProps = TableContentItem[][];

export type TableHeadProps = {
  isFilterable?: boolean,
  position?: CellPropsPostion,
  content: string,
}
