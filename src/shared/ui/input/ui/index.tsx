import clsx from 'clsx';
import { ChangeEventHandler, forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatter} from 'shared/lib/formatter';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';
import { Typography, typography } from 'shared/ui/typography';

import { InputProps } from './index.type';
import s from './style.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  classNames,
  theme = 'primary',
  onValue,
  increment,
  decrement,
  text,
  icon,
  error,
  disabled,
  placeholder,
  label,
  isIncreasing,
  isHideButtons,
  value,
  ...rest
}, phoneRef) => {
  const { t } = useTranslation('');
  const defaultRef = useRef<HTMLInputElement>(null);
  const [isShow, setShow] = useState(theme !== 'large_password');

  const handleChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    onValue?.(value);
  };

  const inputClasses = clsx([
    classNames?.input,
    s.input,
    s[theme],
    s[`align_${text?.align ?? 'left'}`],
    typography[`color_${text?.color ?? 'main'}`],
    typography[`font_${text?.font ?? 'additional'}`],
    typography[text?.size ?? 'xs']
  ],
    { [s.disabled]: disabled }
  );

  const onFocusInput = () => {
    (defaultRef?.current)?.focus();
  };

  const input = (
    <div
      onClick={onFocusInput}
      className={clsx(
        s.body,
        classNames?.body,
        {
          [s.primary]: theme === 'number',
          [s.large2_body]: theme === 'large-2',
          [classNames?.input ?? '']: theme === 'number'
        }
      )}
    >
      {icon?.variant
        && (
          <Icon
            className={s[`${theme}_icon`]}
            fill='green'
            {...icon}
          />
        )}

      <Typography
        font='additional'
        color='main'
        size='xs'
        className={s.label}
        {...label?.before}
      >
        {label?.before && t(label.before.text)}
      </Typography>

      <input
        ref={phoneRef ?? defaultRef}
        className={clsx(inputClasses)}
        type={isShow ? 'text' : 'password'}
        disabled={disabled}
        placeholder={placeholder && t(placeholder)}
        style={isIncreasing ? {
          width: `${((value ?? '').toString().length + 1) * 8}px`
        } : undefined}
        onChange={handleChanged}
        value={theme === 'number' ? formatter.number.defaultN(value) : value}
        {...rest}
      />

      <Typography
        font='additional'
        color='main'
        size='xs'
        {...label?.after}
        className={s.label}
      >
        {label?.after && t(label.after.text)}
      </Typography>

      {theme === 'large_password'
        && (
          <Icon
            className={clsx(s.password_icon, { [s.disabled]: disabled })}
            fill='green'
            size={icon?.size ?? 's'}
            variant={isShow ? 'show' : 'hide'}
            onClick={() => value && !disabled && setShow(!isShow)}
          />
        )}

      {error && (
        <Typography
          className={s.error}
          font='additional'
          color='negative'
        >
          {t(error)}
        </Typography>
      )}
    </div>
  );

  if (theme !== 'number') {
    return input;
  }

  // theme === 'number'
  const buttonsClasses = clsx(s.btnNumber, { [s.input_buttons]: isHideButtons }, classNames?.buttonNumber);
  return (
    <div
      onClick={onFocusInput}
      className={s.number_container}
    >
      <Button
        icon={{
          variant: 'minus',
          size: 'xs3'
        }}
        theme='mini_icon'
        className={buttonsClasses}
        onClick={decrement}
      />

      {input}

      <Button
        icon={{
          variant: 'plus',
          size: 'xs3'
        }}
        className={buttonsClasses}
        onClick={increment}
        theme='mini_icon'
      />
    </div>
  );
});

