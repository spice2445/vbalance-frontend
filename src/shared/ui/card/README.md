# Компонент Card

## Обзор
Компонент обертка Card.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Card.
- `ui/index.test.tsx`: Содержит тесты для компонента Card.
- `ui/index.stories.tsx`: Истории для компонента Card, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Card.
- `ui/index.type.ts`: Типы пропсов для компонента.

## Card Props
- `children` (ReactNode): Контент внутри карточек.
- `variant`? (CardVariant): Вариант карточки('base' и 'center', 'acsent').
- `className`? (string): Дополнительный класс.
- `classNameContent`? (string): Дополнительный класс для контента.
- `title.text`? (string): Заголовок карточки.
- `title.variantIcon`?: Название варианта иконки возле заголовка.
- `title.align`?: (left | right | center): Расположение заголовка.
- `title.isLoading`?: (boolean): Статус заголовка.
- `onClick`?: Вызов функции при клике.
- `infoClicked`?: (Event): Вызов модального окна для пояснения, что делает карточка.

## Использование
```jsx
import { Card } from 'shared/ui/card';
<Card variant="center" title={variantIcon: 'coin-1', text: "Title"}>
    <div>Text1</div>
    <div>Background information about card</div>
</Card>
```