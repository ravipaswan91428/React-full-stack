import React from 'react'
import useTheme from './useTheme'

export default function Footer() {
  const {theme,setTheme}= useTheme() 
  const footerBg = theme === 'light' ? 'text-gray-200 bg-gray-600' : 'bg-slate-900 text-gray-200'

  return (
<div className={`flex justify-center p-2 text-gray-100 ${footerBg}`}>
      <h2>&copy; All rights are reserved for this website Demo Theme Changer</h2>
    </div>
  )
}