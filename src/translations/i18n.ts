import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import Auth_EN from './en/auth.json';
import Auth_ES from './es/auth.json';

import Global_EN from './en/global.json';
import Global_ES from './es/global.json';

import Home_EN from './en/home.json';
import Home_ES from './es/home.json';

import Legal_EN from './en/legal.json';
import Legal_ES from './es/legal.json';

import NoMatch_EN from './en/no_match.json';
import NoMatch_ES from './es/no_match.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        load: 'languageOnly',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                auth: Auth_EN,
                global: Global_EN,
                home: Home_EN,
                legal: Legal_EN,
                no_match: NoMatch_EN,
            },
            es: {
                auth: Auth_ES,
                global: Global_ES,
                home: Home_ES,
                legal: Legal_ES,
                no_match: NoMatch_ES,
            },
        },
    });

export default i18n;
