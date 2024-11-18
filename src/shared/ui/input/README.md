# Компонент Input

## Обзор
Shared инпут для переиспользования

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Input.
- `ui/index.test.tsx`: Содержит тесты для компонента Input.
- `ui/index.type.ts`: Типы пропсов для компонента.
- `ui/index.stories.tsx`: Истории для компонента Input, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Input.
- `ui/components/*`: Компоненты-инпуты.

## Input Props
- `className` (string): Дополнительный CSS-класс для пользовательской стилизации.
- `theme` (string): Тема инпута (например, 'primary', 'secondary'). По умолчанию - 'primary'.
- `increment`: Effect: Функция, которая увеличивает value на 1.
- `decrement`: Effect: Функция, которая уменьшает value на 1.
- `type` (string): Тип кнопки (e.g., 'Input', 'submit', 'reset').
- `isActive?`: (boolean): Активен ли инпут. Если нет, то им нельзя пользоваться.
- `text`: (object): Пропсы для настройки текста.
- `error`?: (object[]): Текст ошибки если есть.
- `label`?: (object): текст до и после вводимого 
  - `before`?: ({text: string} & Typography): до
  - `after`?: ({text: string} & Typography): до

## Text Prop
Все типы берутся из компонента typography
- `size` (string): Размер текста(xs-xl).
- `font` (string): Шрифт инпута.
- `color` (string): Цвет инпута, на placeholder не распространяется.
- `align` (string): Как разместить текст инпута.
- `onValue`: (value: string) => void: Функция для передачи value.
- `value`: (string): Значение из инпута.
- `type?`: (string): Тип инпута.

## Использование
```jsx
import { Input } from 'shared/ui/Input';
<Input
  placeholder='Введите количество VBT'
  text={{
    color: 'main',
    font: 'additional',
    size: 'xs',
    align: 'center'
  }}
/>
```