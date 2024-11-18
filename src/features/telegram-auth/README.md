# Компонент TelegramAuth

## Обзор
Компонент, который отвечает за регистрацию, авторизацию с помощью telegram.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент TelegramAuth.
- `ui/index.stories.tsx`: Истории для компонента TelegramAuth, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента TelegramAuth.

## Props
- `openConditionsModal`? ((onContinue: () => void) => () => void): до вызова подключение телеграмма, вызвать модалку соглашения с условиями

## Использование
```jsx
import { TelegramAuth } from 'features/telegram-auth';
<TelegramAuth />
```