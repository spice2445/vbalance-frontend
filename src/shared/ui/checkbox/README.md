# Компонент Checkbox

## Обзор
Компонент для использования Checkbox'а.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Checkbox.
<!-- - `ui/index.test.tsx`: Содержит тесты для компонента Checkbox. -->
- `ui/index.stories.tsx`: Истории для компонента Checkbox, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Checkbox.

## Checkbox Props
- `children` (ReactNode): Текст справа от CheckBox'а.
- `isChoose` (boolean): Выбран CheckBox или нет.
- `onChange` (() => void): функция для изменения выбора CheckBox'а.
- `classNames?` (обьект): Сторонние классы:
  - `conatainer?` (строка): класс для контейнера чекбокса и текста(или другого элемента ReactNode),
  - `checkbox?` (строка): класс для самого чекбокса,

## Использование
```jsx
import { Checkbox } from 'shared/ui/checkbox';
<Checkbox
    isChoose={agreeForm}
    onChange={onChangedForm}
>
    <Typography
        color='acsent_dark'
    >
        {t('Hi')}
    </Typography>
</Checkbox>
```