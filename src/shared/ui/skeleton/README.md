# Компонент Skeleton

## Обзор
Компонент для использования обвёртки скелетон.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Skeleton.
- `ui/index.test.tsx`: Содержит тесты для компонента Skeleton.
- `ui/index.stories.tsx`: Истории для компонента Skeleton, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Skeleton.
- `ui/index.type.ts`: Типы пропсов для компонента.

## Skeleton Props
- `children?`(ReactNode): Контент, который надо отображать после скелетона.
- `isLoading?`:(boolean): Загружается ли компонент.
- `skeletonClass?`(string): Класс для враппера скелетона.

## Использование
```jsx
import { Skeleton } from 'shared/ui/skeleton';
<Skeleton></Skeleton>
```