import * as AvatarRad from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { FC } from 'react';
import { routes } from 'shared/config/router';
import { Button } from 'shared/ui/button';
import { Skeleton } from 'shared/ui/skeleton';

import { $cardProfile } from '../../model';

import s from './style.module.scss';

export const Avatar: FC<{ className?: string }> = ({ className }) => {
  const navigate = useUnit(routes.profile._.open);
  const cardProfile = useUnit($cardProfile);
  const fallbackName = cardProfile?.name?.toLocaleUpperCase() ?? '';

  return (
    <AvatarRad.Root
      onClick={navigate}
      aria-label='avatar'
      className={clsx(s.image, className)}
      role='button'
      tabIndex={0}
      onKeyDown={(event) => event.preventDefault()}
    >
      <Button
        className={s.btn}
        onClick={navigate}
        theme='mini_icon' icon={{ variant: 'user', size: 'xs2' }}
      />
      <AvatarRad.Fallback
        delayMs={600}
      >
        {fallbackName?.[0] + fallbackName?.[1]}
      </AvatarRad.Fallback>

      <Skeleton
        isLoading={!cardProfile}
      >
        <AvatarRad.Image
          src={cardProfile?.avatar ?? ''} 
          className={s.avatar_image}
          alt={fallbackName}
        />
      </Skeleton>
    </AvatarRad.Root>
  );
};
