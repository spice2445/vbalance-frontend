import { RouteInstance } from 'atomic-router';
import { routes } from 'shared/config/router';
import { IconVariant } from 'shared/ui/icon';

type NavMenu = {
  route: RouteInstance<object>;
  text: string;
  variant: IconVariant
}

export const navmenu: NavMenu[] = [
  {
    route: routes.profile._,
    text: 'Панель управления',
    variant: 'part'
  },
  {
    route: routes.directions.menu,
    text: 'Направление',
    variant: 'panel'
  },
  {
    route: routes.my_organization,
    text: 'Моя организация',
    variant: 'hierarchy'
  },
  {
    route: routes.academy,
    text: 'Обучение',
    variant: 'education'
  },
  {
    route: routes.investments._,
    text: 'Инвестиции',
    variant: 'investment'
  },
  {
    route: routes.tokenomics,
    text: 'Менеджер токенов',
    variant: 'token'
  },
  {
    route: routes.profile._,
    text: 'Документация',
    variant: 'docs'
  }
];
