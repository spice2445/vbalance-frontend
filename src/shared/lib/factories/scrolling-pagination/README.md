# factories/scrolling-pagination

## Обзор
Возращает фабрику `scrlollingPaginationFactory`
Фабрики для работы подгрузки данных при помощи **пагинации скролла**.
- Используется в таблице

### scrlollingPaginationFactory

#### props Отсутствуют

#### отдаёт
- `$page`(StoreWritable<number>) - страница пагинации
- `$dataRanOut`(StoreWritable<boolean>) - закончились ли данные на беке
- `reachedEndOf` - евент, который вызывается, когда юзер доскроллил до конца
- `dataRanedOut` - евент, который срабатывает, когда данные закончились. Обновляет только `$dataRanOut`
