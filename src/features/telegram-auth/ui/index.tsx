import { useUnit } from 'effector-react';
import { Button } from 'shared/ui/button';

import { authorized } from '../model';

import s from './style.module.scss';

export const TelegramAuth = () => {
  const authorize = useUnit(authorized);
  return (
    <>
      <Button
        onClick={authorize}
        className={s.method_telegram}
        icon={{
          size: 'l',
          variant: 'telegram'
        }}
      />
    </>
  );
};
