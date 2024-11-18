// import * as CheckboxRad from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { Icon } from 'shared/ui/icon';
import { IconSize } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface CheckboxProps {
  classNames?: {
    container?:string,
    checkbox?:string
  }
  children?: ReactNode,
  isChoose: boolean,
  onChange?: () => void,
  size?: IconSize
}

export const Checkbox = ({
  children,
  isChoose,
  classNames,
  onChange,
  size
}: CheckboxProps) => (
  <Typography
    color={isChoose ? 'acsent_dark' : 'acsent'}
    font='additional'
    className={clsx(s.checkbox_body, classNames?.container)} 
    onClick={onChange}
  >
    {/* <CheckboxRad.Root className={clsx(s.checkbox, classNames?.checkbox)}>
      <CheckboxRad.Indicator
        className={s.checkbox_input}
      >
        <Icon
          variant={isChoose ? 'checkboxChoose' : 'checkboxEmpty'}
          size={size ?? 's'}
        /> 
      </CheckboxRad.Indicator>

      <input className={s.checkbox_input} />
    </CheckboxRad.Root> */}

    <div className={clsx(s.checkbox, classNames?.checkbox)}>
      <Icon
        variant={isChoose ? 'checkboxChoose' : 'checkboxEmpty'}
        size={size ?? 's'}
      /> 

      <input className={s.checkbox_input} />
    </div>

    {children}
  </Typography>
);
