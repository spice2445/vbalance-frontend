## Запуск проекта 

```
npm install - устанавливаем зависимости
npm run prebuild - делаем prebuild зависимостей (делается один раз)
npm run start - запуск frontend проекта в dev режиме
```


`Ссылка на деплой проекта` - https://dev-front.vbalance.club/
`Ссылка на storybook` - https://dev-storybook.vbalance.club/

----

## Работа с Git

- [Нейминг коммитов](/docs/git-commits/README.md)
- [Работа с Gitflow](/docs/gitflow/README.md)

----

## Скрипты

- `npm run start` - Запуск frontend проекта
- `npm run build:prod` - Сборка в prod режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run storybook` - запуск storybook
- `npm run storybook:build` - Сборка storybook билда

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design
Мы используем на проекте `kebab-case`

Проект на FSD состоит из слоев `(layers)`, каждый слой состоит из слайсов `(slices)` и каждый слайс состоит из сегментов `(segments)`.

Слои стандартизированы во всех проектах и расположены вертикально. Модули на одном слое могут взаимодействовать лишь с модулями, находящимися на слоях строго ниже. На данный момент слоев семь (снизу вверх):

- `shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса (например, UIKit, libs, API). 
- `entities (сущности)` — бизнес-сущности (например, User, Product, Order). 
- `features (фичи)` — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя (например, SendComment, AddToCart, UsersSearch).
- `widgets (виджеты)` — композиционный слой для соединения сущностей и фич в самостоятельные блоки (например, IssuesList, UserProfile).
- `pages (страницы)` — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- `processes (процессы)` — сложные сценарии, покрывающие несколько страниц (например, авторизация).
- `app` — настройки, стили и провайдеры для всего приложения.

Затем есть слайсы, разделяющие код по предметной области. Они группируют логически связанные модули, что облегчает навигацию по кодовой базе. Слайсы не могут использовать другие слайсы на том же слое, что обеспечивает высокий уровень связности (cohesion) при низком уровне зацепления (coupling).

В свою очередь, каждый слайс состоит из сегментов. Это маленькие модули, главная задача которых — разделить код внутри слайса по техническому назначению. Самые распространенные сегменты — `ui, config, types, model (store, actions), api и lib (utils/hooks)`, но в вашем слайсе может не быть каких-то сегментов, могут быть другие, по вашему усмотрению.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next, i18next-react, locize для работы с переводами.
Файлы с переводами хранятся на бэкенде и вытягиваются с помощью locize.
Все missingKeys автоматически отправляются на сервер, там автоматически переводятся и приходят на фронтэнд.
Также есть плагин, который показывает неиспользуемые ключи.

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

Файл с тестами создаем рядом с компонентом с расширением .test.ts

В проекте используются 2 вида тестов:
1) Обычные unit тесты на jest - `npm run unit`
2) Тесты на компоненты с React testing library - `npm run unit`

[Более детально](/docs/tests/README.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создаем рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Собрать билд сторибука можно командой:
- `npm run storybook:build`

Подробнее о [Storybook](https://storybook.js.org/)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CenterDecorator } from 'shared/config/storybook';

import { VariantsIcon } from './index.type';

import { Icon } from '.';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  decorators: [CenterDecorator],
  tags: ['autodocs'],
  args: {
    variant: 'balance',
    onClick: fn(),
    size: 'm',
    fill: 'green'
  },
  argTypes: {
    variant: {
      description: 'Вариант иконки',
      defaultValue: 'confrim',
      options: VariantsIcon,
      control: {
        type: 'select'
      }
    },
    fill: {
      description: 'Цвет иконки',
      defaultValue: 'green',
      options: ['light', 'green', 'green-dark'],
      control: {
        type: 'radio'
      }
    },
    size: {
      description: 'Размер иконки',
      defaultValue: 's',
      control: {
        type: 'select'
      }
    },
    onClick: {
      description: 'Функция, которая вызветс при клике на иконку'
    },
    className: {
      description: 'Сторонний класс'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
```

----

## Конфигурация проекта
В проекте используется webpack в качестве основного сборщика, для сторибука используется vite.

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

----

## CI pipeline
Конфигурация находится в .cicd, .gitlab-ci.yml
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.
