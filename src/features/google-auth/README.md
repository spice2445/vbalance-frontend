# Компонент GoogleAuth

## Обзор
Компонент, который отвечает за подключение гугл аккаунта

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент GoogleAuth.
- `ui/index.stories.tsx`: Истории для компонента GoogleAuth, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента GoogleAuth.

## Props
- `openConditionsModal`? ((onContinuation: () => void) => () => void): до вызова подключение гугла, вызвать модалку соглашения с условиями

## Использование
```jsx
import { GoogleAuth } from 'features/google-auth';
<GoogleAuth />
```