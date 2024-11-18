# factories/input

## Обзор
Возращает 2 фабрики `inputFactory` и `numberInputFactory`(которая внутри себя использует `inputFactory`).
Фабрики для работы с компонентом инпута.
- Применяют `debounce`(Event из petronum)
- Могут в себе использовать `filter` 

### inputFactory
Применяется для **текстового** инпута
#### props
- `defaultValue`(string)
- `filter?`((clk: string) => boolean) - фильтр для ввода в инпут. Пример: ограничить ведённое число

#### отдаёт
- `$value`(StoreWritable<string>) - значение для инпута, обновляется моментально при вводе
- `$debouncedValue` - значение инпута через debounce. Обновляется каждые 0.3s(300ms), если значение `$value` не обновляется
- `fieldUpdated` - евент для инпута, чтобы обноввлять $value
- `debouncedValue` - евент, который срабатывает, при дебоунса, обновляет `$debouncedValue`

---

### numberInputFactory
Применяется для **числового** инпута. Имеет доп. event'ы
#### props
Теже самые, что и из inputFactory

#### отдаёт
Теже самые, что и из inputFactory, **а так же:**
- `incremented`(Event<void>) - евент для **уменьшения** стора на 1 
- `decremented`(Event<void>) - евент для **увелечения** стора на 1 