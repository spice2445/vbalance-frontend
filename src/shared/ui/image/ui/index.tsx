import clsx from 'clsx';
import { Skeleton } from 'shared/ui/skeleton';

import { ImageProps } from './index.type';
import s from './style.module.scss';

export const Image = ({
  src,
  alt,
  lazyLoad = true,
  isLoading,
  skeletonClass,
  className,
  ...othersProps
}: ImageProps) => {
  if (isLoading) {
    return <Skeleton isLoading={isLoading} skeletonClass={skeletonClass ?? className} />;
  }

  return (
    <img
      src={src}
      className={clsx(s.imageContainerBase, className)}
      alt={alt}
      loading={lazyLoad ? 'lazy' : 'eager'}
      {...othersProps}
    />
  );
};
