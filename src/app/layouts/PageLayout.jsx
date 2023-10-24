import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const PageLayout = () => {
  return (
    <section className='main-layout'>
        <Header/>
        <div style={{marginTop: '68px', height: '85vh'}}>
          <Outlet />
        </div>
        <Footer />
    </section>
  )
}

export default PageLayout