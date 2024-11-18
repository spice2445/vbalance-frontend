import { RouteInstance } from 'atomic-router';
import { routes } from 'shared/config/router';
import { IconVariant } from 'shared/ui/icon';

const icons: Record<string, IconVariant> = {
    profile: 'user',
    tokenomics: 'token',
    'profile/statuses': 'user',
    'my-organization': 'hierarchy',
    directions: 'panel',
    investments: 'graphic',
    academy: 'education'
};
  
const getPath = (paths: string[]): string[] => {
    if (paths[1] === '') return ['', 'profile'];
  
    return paths;
};
  
const getTitle = (paths: string[]): {title: string, to: RouteInstance<object>}[] => {
    if (paths[1] === 'directions') return [{title: 'Directions', to:routes.directions.menu}];
    if (paths[1] === 'my-organization') return [{title: 'My organization', to: routes.my_organization}];
    if (paths[1] === 'tokenomics') return [{title: 'Менеджер токенов', to: routes.tokenomics }];
    if (paths[1] === 'academy') return [{title: 'Академия VBALANCE', to: routes.academy}];
    if (paths[2] === 'redactor') return [{title: 'Profile', to:routes.profile._}, {title: 'Редактирование', to:routes.profile.redactor}];
    if (paths[2] === 'statuses') return [{title: 'Profile', to:routes.profile._}, {title: 'Карьерный план и статусы', to:routes.profile.statuses}];
    if (paths[2] === 'arb') return [{title: 'Investments', to:routes.investments._}, {title: 'ARB', to:routes.investments.arb}];
    if (paths[2] === 'index') return [{title: 'Investments', to:routes.investments._}, {title: 'Index', to:routes.investments.index}];
    if (paths[1] === 'investments') return [{title: 'Investments', to:routes.investments._}];
    
    return [{title: 'Profile', to: routes.profile._}];
};

export const breadCrumbs = {
    icons,
    getPath,
    getTitle
};