# Компонент SharingPool

## Обзор
Карточка взаимодействия с "VBT PROFIT SHARING POOL". Вывод usdt / внести vbt, Вывести на кошелёк, закрыть свчет и вывести всё

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент SharingPool.
- `ui/index.test.tsx`: Содержит тесты для компонента SharingPool.
- `ui/index.stories.tsx`: Истории для компонента SharingPool, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента SharingPool.
- `model/index.ts`: бизнес логика

## Props
Отсутствуют. Все данные берутся по апи.

## Использование
```jsx
import { SharingPool } from 'features/sharing-pool';
<SharingPool />
```