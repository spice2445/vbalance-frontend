# Компонент Portal

## Обзор
Компонент для создания портала, позволяет отрендерить children в любой части DOM.

## Файлы
- `ui/index.ts`: Основной файл, в котором определяется компонент Portal.

## Portal Props
- `children` (ReactNode): Компонент, который надо поместить в полтар.
- `element`? (HTMLElement): Элемент куда отрендерить children, по умолчанию - document.body.

## Использование
```jsx
import { Portal } from 'shared/ui/portal';
<Portal element={document.querySelector('header')}>
    <div>some text to render</div>
</Portal>
```
