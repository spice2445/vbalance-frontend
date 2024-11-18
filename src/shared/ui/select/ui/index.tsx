import clsx from 'clsx';
import { EventCallable, Store } from 'effector';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonProps } from 'shared/ui/button';
import { Checkbox } from 'shared/ui/checkbox';

import s from './style.module.scss';

interface SelectProps extends ButtonProps<'button'> {
  options: string[];
  $chooseOption: Store<string>;
  onChoosed: EventCallable<{ option: string }>,
  isLoading?:boolean,
  isWithoutCheckbox?: boolean,
  classList?: string,
  className?: string,
}

export const Select = ({
  options,
  $chooseOption,
  onChoosed,
  isLoading,
  isWithoutCheckbox,
  className,
  classList
}: SelectProps) => {
  const {t} = useTranslation('');
  const chooseOption = useUnit($chooseOption);
  const [isOpen, setOpen] = useState(false);

  return (
    <Button
      isActive={isOpen}
      theme='select'
      className={clsx(s.select, { [s.select_open]: isOpen }, className)}
      onClick={() => setOpen(!isOpen)}
      icon={{
        size: 'xs2',
        variant: 'arrow'
      }}
      isLoading={isLoading}
      // {...otherProps}
    >
      {chooseOption}

      <div className={clsx(s.options, { [s.options_open]: isOpen }, classList)}>
        {options.map((option) => (
          <button
            key={option}
            className={s.option}
            onClick={() => onChoosed({ option })}
            type='button'
          >
            <Checkbox 
              isChoose={option === chooseOption}
              classNames={{
                container: s.checkbox_container, 
                checkbox: clsx({[s.withoutCheckbox]: isWithoutCheckbox})
              }}
            >
              {t(option)}
            </Checkbox>
          </button>
        ))}
      </div>
    </Button>
  );
};
