import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import Home_EN from './translations/en/home.json';
import Home_ES from './translations/es/home.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                home: Home_EN,
            },
            es: {
                home: Home_ES
            },
        },
    });

export default i18n;
