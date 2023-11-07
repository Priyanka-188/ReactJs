// import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// where we need dynamic element in our web page , we make use of Outlet
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>  
      <Footer/>

    </div>
  )
}

export default Layout
