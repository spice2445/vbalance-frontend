# Компонент CommunityBalance

## Обзор
Карточка, которая отображает балансы + их актуальную стоимость сообщества. Используется на странице пользователя.

## Файлы
- `index.tsx`: Основной файл, в котором определяется компонент CommunityBalance.
- `index.stories.tsx`: Истории для компонента CommunityBalance, иллюстрирующие различные сценарии использования.
- `style.module.scss`: SCSS-модуль, предоставляющий стили для компонента CommunityBalance.

## CommunityBalance Props
- `className?`: (string): класс для враппера карточки

## Использование
```jsx
import { CommunityBalance } from 'entities/community';
<CommunityBalance />
```