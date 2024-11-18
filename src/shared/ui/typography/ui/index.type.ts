import { ComponentProps, ElementType, HTMLAttributes } from 'react';
import { IconFill, IconVariant } from 'shared/ui/icon';
import { IconSize } from 'shared/ui/icon/ui/index.type';
import { SharedSkeleton } from 'shared/ui/skeleton';

export type TypographySizes = 'xl' | 'l' | 'm' | 's' | 'xs';
export type TypographyWeight = 'bold' | 'regular';
export type TypographyFont = 'main' | 'additional' | 'additional_bold' | 'landing_regular' | 'landing_bold';
export type TypographyColor = 'main' | 'acsent' | 'acsent_dark' |
'primary_inverted' | 'positive' | 'negative' | 'white';
export type TypographyAs = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
export type TypographyAlign = 'left' | 'center' | 'right';

export const htmlTagSize: Record<TypographySizes, TypographyAs> = {
  xl: 'h1',
  l: 'h2',
  m: 'h3',
  s: 'div',
  xs: 'span'
};

export interface TypographyOwnProps<AS extends ElementType |
  TypographyAs = ElementType | TypographyAs>
  extends HTMLAttributes<HTMLDivElement>, SharedSkeleton {
    className?: string;
    size?: TypographySizes;
    onClickIcon?: () => void;
    font?: TypographyFont;
    color?: TypographyColor;
    as?: AS;
    icon?: {
      variant: IconVariant;
      onClick?: () => void;
      size?: IconSize;
      fill?: IconFill;
    };
    isNotFlex?: boolean;
    isTextLine?: boolean;
    align?: TypographyAlign;
}

type WithElementType<T extends ElementType> = T extends
  ElementType ? Omit<ComponentProps<T>,
  keyof TypographyOwnProps> : never;

export type TypographyProps<AS
  extends ElementType | TypographyAs = ElementType |
  TypographyAs> = TypographyOwnProps<AS> & WithElementType<AS>;
