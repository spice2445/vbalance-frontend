# factories/handle-toast-mutation-state

## Обзор
Возращает `handleToastMutationStateFactory`. Нужно для post(Mutation) api запросов, чтобы вызывать `toast`'ы при разных сценариях отработки запроса.

### props
- `mutation`(Mutation): Mutation запрос
- `succeeded?`(string): сообщение в тосте, при **удачном** исполнение запроса
- `pending?`(string): сообщение в тосте, при **не удачном** исполнение запроса