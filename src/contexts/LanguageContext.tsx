import React, { useCallback, useState } from 'react'
import config from 'config'
import { useTranslation } from 'react-i18next'
import cookie from 'js-cookie'

interface LanguageContextInterface {
  language: string
  setLanguage: (language: string) => void
}

export const languageContext = React.createContext<LanguageContextInterface>({
  language: 'en',
  setLanguage: () => {}
})

const LanguageContext: React.FC = (props) => {
  const savedLanguage = cookie.get('language')
  const initialLanguage = savedLanguage === undefined ? config.languageOptions.default : savedLanguage
  const [language, _setLanguage] = useState(initialLanguage)
  const { i18n } = useTranslation()

  const setLanguage = useCallback((lang: string) => {
    _setLanguage(lang)
    cookie.set('language', lang)
    i18n.changeLanguage(lang)
      .catch(() => console.error(`Unable to update language ${lang}`))
  }, [])

  return (
    <>
      <languageContext.Provider
        value={{
          language,
          setLanguage
        }}
      >
        {props.children}
      </languageContext.Provider>
    </>
  )
}

export default LanguageContext
