import React from 'react'
import AppRouter from '../Router'
import initI18n from '../i18n'
import LanguageContext from '../contexts/LanguageContext'
import './App.css'

initI18n()

const App: React.FC = () => (
  <div className='application-root'>
    <LanguageContext>
      <AppRouter />
    </LanguageContext>
  </div>
)

export default App
