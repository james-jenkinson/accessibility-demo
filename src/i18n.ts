import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    backend: {
      loadPath: `${BASENAME}/locales/{{lng}}/{{ns}}.json`
    },
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  })
  .catch(err => {
    console.log(err)
  })

export default i18n
