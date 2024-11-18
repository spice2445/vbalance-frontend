# Компонент VbalanceTitle

## Обзор
Компонент для использования тайтла VBALANCE.{content}.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент VbalanceTitle.
- `ui/index.test.tsx`: Содержит тесты для компонента VbalanceTitle.
- `ui/index.stories.tsx`: Истории для компонента VbalanceTitle, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента VbalanceTitle.
- `ui/index.type.ts`: Типы пропсов для компонента.

## VbalanceTitle Props
- `title`(VbalanceTitleVariants): Какую надпись использовать после точки.
- `size`(TypographySizes): Размеры, как у компонента Typography (xs-xl).
- `isLoading?`:(boolean): Загружается ли компонент.
- `skeletonClass?`(string): Класс для враппера скелетона.
- `className?`(string): Допнительный класс для стилизации.
- 
## Использование
```jsx
import { VbalanceTitle } from 'shared/ui/vbalance-title';
<VbalanceTitle title='Brinkmann' size='s'/>
```