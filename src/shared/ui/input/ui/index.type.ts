import { InputHTMLAttributes } from 'react';
import { positionAlign } from 'shared/types/align';
import { IconSettingsOther } from 'shared/ui/icon';
import { TypographyColor, TypographyFont, TypographySizes } from 'shared/ui/typography';

export type ThemeInput = 'primary' | 'secondary' | 'number' | 'large' | 'large_password' | 'large-2';
export type InputAlign = positionAlign;

export interface InputTextProps {
  size?:TypographySizes;
  font?:TypographyFont;
  color?:TypographyColor;
  align?:InputAlign
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  increment?: () => void;
  decrement?: () => void;
  onValue?: (value: string) => void;
  value?: string | number;
  error?: string;
  isActive?: boolean;
  theme?: ThemeInput;
  label?: {
    before?: Omit<InputTextProps, 'align'> & {text: string};
    after?: Omit<InputTextProps, 'align'> & {text: string};
  };
  text?: InputTextProps;
  icon?: IconSettingsOther;
  isIncreasing?: boolean;
  isHideButtons?: boolean;
  classNames?: {
    body?: string,
    input?: string,
    buttonNumber?: string,
  };
}
