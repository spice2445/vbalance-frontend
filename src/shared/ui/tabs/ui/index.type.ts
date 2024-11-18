import {
  ReactNode
} from 'react';
import { ButtonProps } from 'shared/ui/button';

export interface Controllers extends ButtonProps<'button'> {
  key:string,
  activeClass?:string;
  children:string;
}

export interface TabsProps {
  className?:string;
  classNames?:{
    controllers?: string;
    content?: string; 
  };
  controllers: Controllers[];
  contents: ReactNode[];
  actionRight?: ReactNode;
  isWrapperCard?: true
}
