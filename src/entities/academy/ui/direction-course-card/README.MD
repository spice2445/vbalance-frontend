# Компонент DirectionCourseCard

## Обзор
Карточка для выбора направления, на странице выбора направлений.

## Файлы
- `index.tsx`: Основной файл, в котором определяется компонент DirectionCourseCard.
- `index.test.tsx`: Содержит тесты для компонента DirectionCourseCard.
- `index.stories.tsx`: Истории для компонента DirectionCourseCard, иллюстрирующие различные сценарии использования.
- `style.module.scss`: SCSS-модуль, предоставляющий стили для компонента DirectionCourseCard.
- `assets/*`: Картинки для компонента.

## SelectionCard Props
- `vbalanceTitle`(VbalanceTitleVariants): Текст после точки для vbalanceTitle.
- `previewUrl`(string): Картинка для превью.
- `title`(string): Название направления.
- `description`(string): Описание направления.
- `link` (string): Ссылка на страницу направления.

## Использование
```jsx
import { DirectionCourseCard } from 'entities/direction';
<DirectionCourseCard 
    vbalanceTitle='Brinkmann'
    previewUrl='https://'
    title='Title'
    description='description some'
    link='/link'
/>
```