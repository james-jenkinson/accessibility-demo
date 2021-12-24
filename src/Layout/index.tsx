import React from 'react'
import { Outlet } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector'

const Layout: React.FC = () =>
  <>
    <LanguageSelector />
    <Outlet />
  </>

export default Layout
