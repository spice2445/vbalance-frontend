# Компонент Modal

## Обзор
Компонент для использования модального окна.

## Файлы
- `ui/index.tsx`: Основной файл, в котором определяется компонент Modal.
- `ui/index.test.tsx`: Содержит тесты для компонента Modal.
- `ui/index.stories.tsx`: Истории для компонента Modal, иллюстрирующие различные сценарии использования.
- `ui/style.module.scss`: SCSS-модуль, предоставляющий стили для компонента Modal.
- `ui/index.type.ts`: Типы пропсов для компонента.

## Modal Props
- `children`: Что отображаем в модальном окне.
- `title`: Тайтл для модального окна.
- `keyModal`: Уникальный ключ для модального окна. Используется для логики-эффектора.

## Как работает, подробнее:
Создаётся обьект для открытия/закрытия модалки, **пример**:
const modalProps: ModalI = {
  ModalElement: TicketsModal, // Компонент модельного окна
  isOpen: true, // при создании модалки, открыть модальное окна сразу или нет
  dataProps: { // пропсы для компонента модального окна
    keyModal: TICKETS_MODAL_KEY, // обязательный пропс, уникальный ключ
    modalStep: 1 // пропс для модального окна
  }
};

Создать окно:
onSetModal(modalProps)

Закрыть окно:
closeModal(TICKETS_MODAL_KEY) - передаём ключ

## Использование
```jsx
import { Modal } from 'shared/ui/modal';

const modalProps: ModalI = {
  ModalElement: TicketsModal, // Компонент модельного окна
  isOpen: true, // при создании модалки, открыть модальное окна сразу или нет
  dataProps: { // пропсы для компонента модального окна
    keyModal: TICKETS_MODAL_KEY, // обязательный пропс, уникальный ключ
    modalStep: 1 // пропс для модального окна
  }
};

onSetModal(modalProps)
```