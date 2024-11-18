# Компонент ReferralUser

## Обзор
Карточка, которая отображает реферальную ссылку, которую можно скопировать по клике на ссылку иликнопку. Используется на странице пользователя.

## Файлы

- `ui/index.tsx`: Основной файл, в котором определяется компонент ReferralUser.
- `ui/index.test.tsx`: Содержит тесты для компонента ReferralUser.
- `ui/index.stories.tsx`: Истории для компонента ReferralUser, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента ReferralUser.

## Props
Отсутствуют. Все данные берутся по апи.

## Использование
```jsx
import { ReferralUser } from 'features/referral-link';
<ReferralUser />
```