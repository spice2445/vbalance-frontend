import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface ResendMessageProps {
  resentCode: () => void;
}

export const ResendMessage = ({
  resentCode
}: ResendMessageProps) => {
  const { t } = useTranslation('');
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (seconds > 0) timeout = setTimeout(setSeconds, 1000, seconds - 1);
    return () => clearTimeout(timeout);
  }, [seconds]);

  const onClickFn = () => {
    resentCode();
    setSeconds(60);
  };

  if (seconds !== 0) {
    return (
      <Typography
        size='xs'
        font='additional'
        color='acsent'
        disabled
        className={s.resend_message}
        isTextLine
      >
        {t('Повторить запрос: ')}

        <Typography
          color='acsent'
          size='xs'
          font='additional_bold'
        >
          {seconds}
        </Typography>

        {t(' сек.')}
      </Typography>
    );
  }

  return (
    <Typography
      onClick={onClickFn}
      size='xs'
      font='additional_bold'
      className={s.resend_message_sekundomer}
      icon={{
        variant: 'refresh',
        size: 'm'
      }}
    >
      {t('Отправить ещё раз')}
    </Typography>
  );
};
