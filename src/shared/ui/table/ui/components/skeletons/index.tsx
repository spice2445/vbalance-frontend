import { skeletonGeneration } from 'shared/lib/lazy';
import { Skeleton } from 'shared/ui/skeleton';

import s from '../../style.module.scss';

interface SkeletonsTabsProps {
  countColumns: number;
  countRows: number;
}

export const SkeletonsTabs = ({
  countColumns,
  countRows
}: SkeletonsTabsProps) => skeletonGeneration(countColumns * countRows).map((key) => (
  <div
    className={s.cell_content}
    key={key}
  >
    <Skeleton
      isLoading
      skeletonClass={s.skeleton}
    />
  </div>
));
