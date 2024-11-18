import { directionCard } from 'entities/academy';
import { IconVariant } from 'shared/ui/icon';

import {categories} from '../assets';

interface directionsI {
    name: string,
    icon: IconVariant,
}

export const DIRECTIONS: directionsI[] = [
    {
        name: 'История выбора направлений',
        icon: 'time'
    },
    {
        name: 'Категории направлений',
        icon: 'education'
    }
];

interface categoriesI {
    title: string,
    cards: directionCard[],
}

export const CATEGORIES: categoriesI[] = [
    {
        title: 'Школы Виталия Бринкманна',
        cards: [
            {
                image: categories.school.SchoolOfSenseLanguage,
                direction: 'Brinkmann',
                name: 'Школа языка чувств',
                short_description: 'О жизни в гармонии с собой и окружающими',
                url: '/SchoolOfSenseLanguage'
            },
            {
                image: categories.school.MlmHighSchool,
                direction: 'Brinkmann', 
                name: 'Высшая школа млм',
                short_description: 'Освоение профессии сетевого маркетинга',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: 'Мастер своей жизни',
                short_description: 'Целостная программа о каждой сфере в жизни',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '1',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '2',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '3',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '4',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '5',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '6',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '7',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '8',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '9',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '10',
                short_description: '',
                url: '/MlmHighSchool'
            },
            {
                image: categories.school.MasterOfHisLife,
                direction: 'Brinkmann', 
                name: '11',
                short_description: '',
                url: '/MlmHighSchool'
            }
        ]
    }
];