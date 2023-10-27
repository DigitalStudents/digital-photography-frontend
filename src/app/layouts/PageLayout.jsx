import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const PageLayout = () => {
  return (
    <section>
        <Header/>
          <Outlet />
        <Footer />
    </section>
  )
}

export default PageLayout