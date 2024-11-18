# Компонент Select

## Обзор
Компонент селекта.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Select.
- `ui/index.stories.tsx`: Истории для компонента Select, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Select.

## Select Props
- `options` (string[]): Опции селекта.
- `$chooseOption` (Store<string>): Выбранная опция, store эффектора.
- `onChoosed` (EventCallable<{option: string}>): Event эффектора для выбора опции.

## Использование
```jsx
import { Select } from 'shared/ui/select';
<Select
    options={optionsMock}
    $chooseOption={$chooseOption}
    onChoosed={choosedOption}
/>
```
