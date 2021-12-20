import React, { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface LanguageContextInterface {
	language: string
	setLanguage: (language: string) => void
}

export const languageContext = React.createContext<LanguageContextInterface>({
	language: 'en',
	setLanguage: () => {}
})

const LanguageContext: React.FC = (props) => {
	const [language, _setLanguage] = useState('en')
	const { i18n } = useTranslation()

	const setLanguage = useCallback((lang: string) => {
		_setLanguage(lang)
		i18n.changeLanguage(lang)
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
