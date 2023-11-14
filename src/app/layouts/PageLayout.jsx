import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchSection/SearchBar'

const PageLayout = () => {
  return (
    <section>
        <Header/>
        <SearchBar />
        <div className='test' style={{marginTop: '103px', height: '85vh', }}>
          <Outlet />
        </div>
        <Footer />
    </section>
  )
}

export default PageLayout