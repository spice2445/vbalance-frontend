# Компонент Icon

## Обзор
Компонент для использования иконки.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Icon.
- `ui/index.test.tsx`: Содержит тесты для компонента Icon.
- `ui/index.stories.tsx`: Истории для компонента Icon, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Icon.
- `ui/assets/*.svg`: SVG иконки.
- `ui/index.type.ts`: Размеры иконки и типы для компонента.

## Icon Props
- `className` (string): Дополнительный CSS-класс для пользовательской стилизации.
- `variant`: Указывает какую иконку использовать.
- `size`: Размер иконки (3xs-2xl).
- `fill`: Цвет заливки иконки (light, green, green-dark).
- `isAnimated`: Есть ли анимация у иконки при наведение на кнопку.
- `onClick?`: Дейтсвие при клике на иконку.

## Использование
```jsx
import { Icon } from 'shared/ui/icon';
<Icon size='s' fill variant="coin-1" isAnimated/>
```