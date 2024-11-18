import { invoke } from '@withease/factories';
import { createEffect, createEvent, createStore, sample } from 'effector';
import i18n from 'shared/config/i18n';
import { selectFactory } from 'shared/lib/factories';

export const settedLanguages = createEvent<string[]>();
export const $languages = createStore<string[]>([]);

$languages.on(settedLanguages, (_, languages) => languages);

export const {
    $select: $language,
    choosedSelect: choosedLanguage
} = invoke(selectFactory, {defaultValue: ''});

const changeMultiLanguageFx = createEffect((language: string) => {
    i18n.changeLanguage(language.toLocaleLowerCase());
});

sample({
    clock: settedLanguages,
    fn: (languages) => languages[0],
    target: $language
});

sample({
    clock: choosedLanguage,
    fn: ({option}) => option,
    target: changeMultiLanguageFx
});
