# Компонент ConnnectWallet

## Обзор
Компонент, который отвечает за подлючение кошельков, отображение.

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент ConnnectWallet.
- `ui/index.stories.tsx`: Истории для компонента ConnnectWallet, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента ConnnectWallet.

## Props
- `size` (small | large) :  Размер кнопки.

## Использование
```jsx
import { ConnectWallet } from 'features/connect-wallet';
<ConnectWallet size='small' />
```