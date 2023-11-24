import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/login/Auth'

const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Auth />}/>
    </Routes>
  )
}

export default PrivateRoutes