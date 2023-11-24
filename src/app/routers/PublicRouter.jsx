import React, { Fragment } from 'react'
import Auth from '../pages/login/Auth'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import PageLayout from '../layouts/PageLayout'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import CategoryPage from '../pages/CategoryPage/CategoryPage'

const PublicRouter = () => {
  return (
    <Routes>
        <Route element={<PageLayout />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/product/:productId' element={<ProductDetail />}/>
          <Route path='/categoria/:categoryId' element={<CategoryPage />}/>
        </Route>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth />}/>
    </Routes>
  )
}

export default PublicRouter