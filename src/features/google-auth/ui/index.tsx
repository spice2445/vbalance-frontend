import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Button } from 'shared/ui/button';

import s from './style.module.scss';


export const GoogleAuth = () => {
  const {t} = useTranslation('');
  
  const onGoogle = () => {
    toast(t('google...'));
  };

  return (
    <Button
      onClick={onGoogle}
      className={s.method_google}
      icon={{
        size: 'l',
        variant: 'google'
      }}
    />
  );
};
