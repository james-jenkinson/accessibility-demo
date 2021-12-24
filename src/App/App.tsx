import React from 'react'
import AppRouter from '../Router'
import '../i18n'
import LanguageContext from '../contexts/LanguageContext'
import './App.css'

const App: React.FC = () => (
  <div className='application-root'>
    <LanguageContext>
      <AppRouter />
    </LanguageContext>
  </div>
)

export default App
