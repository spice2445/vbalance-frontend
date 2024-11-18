# Компонент CalculatorCapital

## Обзор
Карточка калькулятора "За 7 лет к финансовой независимости".

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент CalculatorCapital.
- `ui/index.stories.tsx`: Истории для компонента CalculatorCapital, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента CalculatorCapital.
- `model/index.ts`: Код, который отвечает за закрытие/открытие модального окна.

## CalculatorCapital Props
Отсутствуют. Все данные берутся по апи.

## Использование
```jsx
import { CalculatorCapital, } from 'features/calculator-capital';
<CalculatorCapital />
```