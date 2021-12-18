import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from '../Layout'
import Semantics from '../routes/Semantics'


const AppRouter: React.FC = () =>{
  console.log('basename', BASENAME)

  return <Router basename={BASENAME}>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Semantics />} />
      </Route>
    </Routes>
  </Router>
}

export default AppRouter
