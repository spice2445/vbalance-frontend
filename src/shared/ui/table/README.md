# Компонент Table

## Обзор
Компонент для использования таблиц.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Table.
- `ui/index.test.tsx`: Содержит тесты для компонента Table.
- `ui/index.stories.tsx`: Истории для компонента Table, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Table.
- `ui/index.type.ts`: Типы пропсов для компонента.
- `components/default-cell.tsx`: Ячейка компонента.
- `components/head.tsx`: Ячейка из шапки таблицы.
- `components/index.ts`: файл для импорта.
- `components/index.type.ts`: файл с типами для компонентов.

## Table Prop
- `head`(TableHeadProps[]) - массив головы таблицы 
- `$content`(StoreWritable<TableContentProps | null>) - контент в сторе эффектора
- `fixedSpeaker?`(number) - какую колонку закрепить при скролле
- `$isDataRanedOut`(StoreWritable<boolean>) - закончились данные в таблице на беке или нет
- `reachedEndOfTable`(EventCallable<void>) - дошел ли пользователь пользователь до конца таблицы. Нужно чтобы подгрузить пачку данных
- `loaddedTable`(EventCallable<void>) - в зоне видимости ли таблица
- `gridX`(string) - ширина колонки
- `gridY`(string) - высота колонки


## Использование
```jsx
import { Table } from 'shared/ui/table';
<Table 
    {...historyTokens} // data
/>
```