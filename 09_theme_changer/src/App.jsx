import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'

export default function App() {
  const [theme, setTheme] = useState('light')

  const themes = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white'
  }

  const toggleTheme = () => {
    setTheme(color => (color === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`${themes[theme]}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Home theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}
