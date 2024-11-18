# Компонент Button

## Обзор
Кнопка поддерживает различные темы, опциональные иконки и может быть отображен в виде различных HTML-элементов на основе предоставленных реквизитов.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Button.
- `ui/index.test.tsx`: Содержит тесты для компонента Button.
- `ui/index.type.ts`: Типы пропсов для компонента.
- `ui/index.stories.tsx`: Истории для компонента Button, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Button.

## Button Props
- `className` (string): Дополнительный CSS-класс для пользовательской стилизации.
- `children` (ReactNode): Содержимое, которое будет отображаться внутри кнопки.
- `theme` (строка): Тема кнопки (например, 'primary', 'secondary'). По умолчанию - 'primary'.
- `icon` (объект): Необязательная конфигурация иконки. 
- `as` (string | React.ElementType): Можно html тег сделать другим, например a.
- `type` (string): Тип кнопки (e.g., 'button', 'submit', 'reset').
- `isLoading?`:(boolean): Загружается ли компонент.
- `isActive?`: (boolean): Активна ли кнопка.
- `skeletonClass?`(string): Класс для враппера скелетона.

## Icon Prop
- `variant`: Указывает какую иконку использовать.
- `size`: Размер иконки(xs3-xl).
- `isAnimated`: Есть ли анимация у иконки при наведение на кнопку.

## Использование
```jsx
import { Button } from 'shared/ui/button';
<Button 
  theme="primary" 
  as="div" 
  isActive="true"
  icon={{ 
    variant: 'arrow', 
    size: 'xs3', 
    isAnimated: true 
  }}
>Next</Button>
```