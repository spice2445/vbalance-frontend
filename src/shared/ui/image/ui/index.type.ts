import { ImgHTMLAttributes } from 'react';
import { SharedSkeleton } from 'shared/ui/skeleton';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, SharedSkeleton {
    lazyLoad?: boolean;
}
