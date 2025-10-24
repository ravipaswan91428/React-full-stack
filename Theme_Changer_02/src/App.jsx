import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import useTheme from './Components/useTheme'

export default function App() {

  const {theme} = useTheme()

  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white'
  }

  return (
    <div className={`${themes[theme]}`}>
      <Header />
      <Home  />
      <Footer />
    </div>
  )
}