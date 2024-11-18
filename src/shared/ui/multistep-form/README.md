# Компонент MultiSteps

## Обзор
Компонент для использования MultiSteps. Это компонент, который позволяет реализовать удобную логику пошаговых действий.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент MultiSteps.
- `ui/index.stories.tsx`: Истории для компонента MultiSteps, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента MultiSteps.
- `ui/components/*`: Внутренние компоненты.

## MultiSteps Props
- `finish.onClick`: Функция, которая вызывается при клике на последний шаг.
- `finish.text`: Текст, который будет показан на кнопке на последнем шагу.
- `steps`: Обьект, который содержит в себе другие обьекты-шаги.
- `step`?: Номер шага, на котором открыть multistep. 

## Как работает, подробнее:
В steps передаем обьекты с ключами в качестве шаги (1, 2, 3, ...), а внутрь каждого обьекта:
условие при котором перекидывать на следующий шаг, заголовок для шага и контент, который отрисовывать внутри.

## Использование
```jsx
import { Multisteps } from 'shared/ui/multistep-form';
<MultiSteps
  finish={{
    text: 'Перейти к оплате',
    onClick: console.log('payment')
  }}
  steps={{
    1: {
      title: 'Введите количество тикетов',
      condition: a > b,
      content: <>
        <Input
          theme='number'
          className={s.input}
          value={tickets}
          label={'Количество тикетов:'}
          increment={increment}
          decrement={decrement}
          onValue={onChange}
        />
        <Typography className={s.amountToPay} font='additional' color='main' size='s'>
            Сумма к оплате:
            <Typography font='additional_bold' color='acsent_dark' size='s'>
              {amountUSDT} USDT
            </Typography>
              </Typography>
            </>
          },
          2: {
            title: Выберите способ оплаты,
            condition: и Ю с,
            content: <>
              <Typography className={s.amountToPay} font='additional' color='main' size='s'>
                Сумма к оплате:
                <Typography font='additional_bold' color='acsent_dark' size='s'>
                  {amountUSDT} USDT
                </Typography>
              </Typography>
            </>
          }
        }} />
```