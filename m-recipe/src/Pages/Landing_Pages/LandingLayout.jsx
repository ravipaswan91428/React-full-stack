import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingLayout
