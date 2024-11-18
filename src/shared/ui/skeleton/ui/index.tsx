import clsx from 'clsx';
import { memo } from 'react';

import { SkeletonProps } from './index.type';
import s from './style.module.scss';

const SkeletonWrapper = ({ children, isLoading, skeletonClass }: SkeletonProps) => {
  if (isLoading) {
    return (
      <div className={clsx(s.skeleton_wrapper, skeletonClass)}>
        <div className={s.skeleton_loading} />
      </div>
    );
  }

  return <>{children}</>;
};

export const Skeleton = memo(SkeletonWrapper);
