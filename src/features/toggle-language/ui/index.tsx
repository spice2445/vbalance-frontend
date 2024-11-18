import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/select';

import { $language, choosedLanguage, settedLanguages, $languages } from '../model';

import s from './style.module.scss';

type Languages = {
  [key: string]: {
    isReferenceLanguage: boolean;
    name: string;
    nativeName: string;
  }
}

export const ToggleLanguage = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [languages, onSetLanguages] = useUnit([$languages, settedLanguages]);

  useEffect(() => {
    i18n?.services?.backendConnector?.backend?.getLanguages((_err: Error, languages: Languages) => {
      onSetLanguages(Object.values(languages).map((language) => language.name.slice(0, 2)));
    });
  }, [i18n]);

  const toggleLanguage = () => {
    const language = i18n.language.slice(0, 2).toLowerCase();
    language === 'ru' ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
  }; 

  const changeLanguageProps = {
    ['data-testid']: 'toggle-theme',
    ['aria-label']: 'Toggle theme',
    className: s.btn
  };

  if (languages.length > 2) {
    return (
      <Select
        options={languages}
        $chooseOption={$language}
        onChoosed={choosedLanguage}
        isWithoutCheckbox
        classList={s.select_list}
        {...changeLanguageProps}
      />
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      {...changeLanguageProps}
    >
      {i18n.language.slice(0, 2)}
    </button>
  );
};
