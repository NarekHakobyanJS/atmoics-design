import React from 'react'
import Header from '../organisms/Header/Header'
import { Outlet } from 'react-router-dom'
import './Layout.css'
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout