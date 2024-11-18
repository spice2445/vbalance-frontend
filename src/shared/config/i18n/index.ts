import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocizeBackend from 'i18next-locize-backend';
import { locizePlugin } from 'locize';
import lastUsed from 'locize-lastused';
import { initReactI18next } from 'react-i18next';

const lociseOptions = {
  projectId: __LOCIZE_PROJECT_ID__,
  apiKey: __IS_DEV__ ? __LOCIZE_API_KEY__ : undefined
};

if (__IS_DEV__) i18n.use(lastUsed);

i18n
  .use(LocizeBackend)
  .use(locizePlugin)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false
    },
    react: {
      bindI18n: 'languageChanged editorSaved'
    },
    backend: {
        ...lociseOptions, 
        referenceLng: 'ru' 
    },
    locizeLastUsed: lociseOptions,
    saveMissing: __IS_DEV__
  });

export default i18n;
