# Компонент Typography

## Обзор
Компонент для использования текста.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Typography.
- `ui/index.test.tsx`: Содержит тесты для компонента Typography.
- `ui/index.stories.tsx`: Истории для компонента Typography, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Typography.
- `ui/index.type.ts`: Типы пропсов для компонента.

## Typography Props
- `className` (string): Дополнительный CSS-класс для пользовательской стилизации.
- `size`: Указываем размер текста('xl' | 'l' | 'm' | 's' | 'xs').
- `font`: Выбираем шрифт, от него зависит weight текста, доступные шрифты: 'main'(Tektur Bold) | 'additional'(Lato Regular) | 'additional_bold'(Lato Bold).
- `color`: Цвет текста('main' | 'acsent' | 'acsent_dark' | 'positive' | 'negative' - соотвествует цветам из фигмы), по умолчанию - acsent_dark.
- `as`: Какой тег использовать в тексте для семантики('p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'), если as не указан, то as подставляется взависимости от пропса size({
  xl: 'h1',
  l: 'h2',
  m: 'h3',
  s: 'p',
  xs: 'span'
}).
- `icon.variant`: Название варианта иконки, необязательный аргумент. Если указан вариант иконки, icon.size=m.
- `icon.size`: Размер иконки(xs3-xl).
- `icon.onClick`: Функция, при клике на иконку.
- `isLoading?`:(boolean): Загружается ли компонент.
- `skeletonClass?`(string): Класс для враппера скелетона. 
- `children`: Текст внутри компонента.
  
## Использование
```jsx
import { Typography } from 'shared/ui/typography';
<Typography size='m' font='main'>Text</Typography>
```
