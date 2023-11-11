import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const PageLayout = () => {
  return (
    <section>
        <Header/>
        <div className='test' style={{marginTop: '68px', height: '85vh', }}>
          <Outlet />
        </div>
        <Footer />
    </section>
  )
}

export default PageLayout
