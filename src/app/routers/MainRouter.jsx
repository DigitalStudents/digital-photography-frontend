import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../pages/login/Auth'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import PrivateRoutes from './PrivateRoutes'

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={
                    <PrivateRouter>
                        <PrivateRoutes />
                    </PrivateRouter>
                }/>
            </Routes>
            <PublicRouter />
            
        </BrowserRouter>
    )
}

export default MainRouter