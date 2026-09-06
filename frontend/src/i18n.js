import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES } from './constants/languages';

const supportedLngs = SUPPORTED_LANGUAGES.map((language) => language.code);

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;