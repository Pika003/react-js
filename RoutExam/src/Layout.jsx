import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function Layout() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout