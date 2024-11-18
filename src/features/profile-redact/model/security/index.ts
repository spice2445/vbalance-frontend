import { invoke } from '@withease/factories';
import { selectFactory } from 'shared/lib/factories';


export const optionsSecurity = [
    'Улица, где вы выросли',
    'Девичья фамилия матери',
    'Кличка первого питомца',
    'Марка первой машины',
    'Любимый персонаж книги',
    'Любимый персонаж фильма'
];

export const selectSecurity = invoke(selectFactory, {
    defaultValue: optionsSecurity[0]
});