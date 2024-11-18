# Компонент TicketsModal

## Обзор
Компонент, который отвечает за модальное окно покупки тикетов.

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент TicketsModal.
- `ui/index.stories.tsx`: Истории для компонента TicketsModal, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента TicketsModal.
- `model/index.ts`: Код, который отвечает за закрытие/открытие модального окна.

## TicketsModal Props
Отсутствуют. Все данные берутся по апи.

## Использование
```jsx
import { TicketsModal, $toggleModal } from 'features/buy-tickets';
<BuyTickets />
```