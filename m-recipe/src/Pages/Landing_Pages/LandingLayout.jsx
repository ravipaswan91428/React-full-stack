import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useState } from 'react'

const LandingLayout = () => {

   const [theme, setTheme] = useState('light')

  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white'
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }
  return (
    <div className={`${themes[theme]}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Outlet theme={theme}/>
      <Footer theme={theme}/>
    </div>
  )
}

export default LandingLayout
