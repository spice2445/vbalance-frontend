# Компонент ArbitrageDeposit

## Обзор
Компонент отввечает за создание автопокупок в index

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент ArbitrageDeposit.
- `ui/index.stories.tsx`: Истории для компонента ArbitrageDeposit, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента ArbitrageDeposit.
- `model/index.ts`: Бизнес логика карточки

## ArbitrageDeposit Props
Отсутствуют. Все данные берутся по апи.

## Использование
```jsx
import { AutopurchaseVBTI } from 'features/autopurchase-VBTI';
<AutopurchaseVBTI />
```