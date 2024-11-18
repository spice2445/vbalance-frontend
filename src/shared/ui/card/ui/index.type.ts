import { ReactNode } from 'react';
import { positionAlign } from 'shared/types/align';
import { IconVariant } from 'shared/ui/icon';

type CardVariant = 'base' | 'center' | 'acsent';

export interface CardTitle {
  text:string,
  variantIcon?:IconVariant,
  align?:positionAlign;
}

export interface CardProps {
  children:ReactNode;
  variant?:CardVariant;
  className?:string;
  classNameContent?:string;
  title?: {
    text:string,
    variantIcon?:IconVariant,
    align?:positionAlign,
    isLoading?: boolean,
    className?: string,
  },
  onClick?: () => void;
  infoClicked?: () => void;
}
