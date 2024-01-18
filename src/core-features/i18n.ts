import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import packageJSON from '../../package.json';

i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        ns: ['translations'],
        load: "currentOnly",
        defaultNS: 'translations',
        saveMissing: true,
        saveMissingTo: "current",
        keySeparator: "->",
        debug: false,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
            format: (value, format) => {
                if (format === 'uppercase') return value.toUpperCase();
                return value;
            },
        },
        backend: {
            loadPath: `${process.env.NODE_ENV == "production" ? packageJSON.homepage.trim() : "" }/locales/{{lng}}/{{ns}}.json`,
            addPath: `${process.env.NODE_ENV == "production" ? packageJSON.homepage.trim() : "" }/locales/add/{{lng}}/{{ns}}.missing.json`,
        },
        initImmediate: false,
        lng: "en",
        fallbackLng: "en", // use en if detected lng is not available
    });

export default i18n;