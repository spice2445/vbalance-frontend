import { Icon } from 'shared/ui/icon';

import s from './style.module.scss';

export const ShowNotification = (): JSX.Element => (
  <button
    type='button'
    data-testid='toggle-theme'
    onClick={() => { }}
    className={s.btn}
    aria-label='Toggle theme'
  >
    <Icon
      className={s.icon} size='xl' variant='notification'
      fill='green'
    />
  </button>
);
