# Компонент Loader

## Обзор
Компонент для использования лоадера.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Loader.
- `ui/index.stories.tsx`: Истории для компонента Loader, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Loader.

## Loader Props
- `className` (string): Дополнительный CSS-класс для пользовательской стилизации.
- `isLoading` (boolean): Отображать лоадер или нет, по умолчанию true.
- `size` (s' | 'm' | 'full_page'): Размер иконки.

## Использование
```jsx
import { Loader } from 'shared/ui/Loader';
<Loader 
    className='some className' 
    size='full_page'
/>
```