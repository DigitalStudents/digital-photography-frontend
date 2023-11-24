import React from 'react'
import Auth from '../pages/login/Auth'
import { Route, Routes } from 'react-router-dom'

const PublicRouter = () => {
  return (
    <Routes>
        <Route path='/register' element={<Auth />}/>
    </Routes>
  )
}

export default PublicRouter