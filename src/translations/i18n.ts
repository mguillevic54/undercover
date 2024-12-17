import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/en.json';
import frTranslation from './fr/fr.json';

const resources = {
  // list of languages
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources,
    lng: 'fr', // default language to use.
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false
    }
  });

i18n.services.formatter?.add('lowercase', (value) => {
  return value.toLowerCase();
});

export default i18n;
