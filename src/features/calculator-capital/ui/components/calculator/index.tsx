import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const Calculator = () => {
  const { t } = useTranslation('');
  return (
    <div className={s.calculator_container}>
      <Typography
        color='acsent_dark'
        size='l'
        icon={{
          variant: 'calc'
        }}
      >
        {t('Калькулятор программы')}
      </Typography>

      <div className={s.calculator}>
        <Input
          theme='number'
          type='number'
          placeholder='-'
          label={{
            before: {
              text: 'Количество тикетов:',
              font: 'additional',
              color: 'main',
              size: 's'
            },
            after: {
              text: 'лет',
              font: 'additional_bold',
              color: 'acsent',
              size: 's'
            }
          }}
          text={{
            font: 'additional_bold',
            color: 'acsent',
            size: 's'
          }}
          classNames={{
            body: s.size_input
          }}
          isIncreasing
        />

        <div className={s.calculator_final}>
          <Input
            theme='number'
            type='number'
            placeholder='-'
            label={{
              before: {
                text: 'Стартовый капитал:',
                font: 'additional',
                color: 'main',
                size: 's'
              },
              after: {
                text: 'USDT',
                font: 'additional_bold',
                color: 'acsent',
                size: 's'
              }
            }}
            text={{
              font: 'additional_bold',
              color: 'acsent',
              size: 's'
            }}
            classNames={{
              body: s.size_input
            }}
            isIncreasing
          />
          <Typography
            color='main'
          >
            /
          </Typography>
          <Input
            theme='number'
            type='number'
            placeholder='-'
            label={{
              before: {
                text: 'Итоговый результат:',
                font: 'additional',
                color: 'main',
                size: 's'
              },
              after: {
                text: 'USDT',
                font: 'additional_bold',
                color: 'acsent',
                size: 's'
              }
            }}
            text={{
              font: 'additional_bold',
              color: 'acsent',
              size: 's'
            }}
            classNames={{
              body: s.size_input
            }}
            isIncreasing
          />
        </div>
      </div>
    </div>
  );
};
