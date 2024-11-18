import { RouteInstance } from 'atomic-router';
import { routes } from 'shared/config/router';

export interface DirectionCardProps {
    title: string,
    description: string,
    link: RouteInstance<object>
} 

export const directionsInvestments: DirectionCardProps[] = [
    {
        title: 'ARB',
        description: 'Цифровые инвестиции в топовые криптовалюты',
        link: routes.investments.arb
    },
    {
        title: 'INDEX',
        description: 'Безопасные инвестиции через арбитраж',
        link: routes.investments.index
    }
];