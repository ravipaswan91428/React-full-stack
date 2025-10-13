import React from 'react'

export default function Footer({theme}) {

  const footerBg = theme === 'light' ? 'text-gray-300 bg-gray-500' : 'bg-slate-900 text-gray-200'

  return (
<div className={`flex justify-center bg-slate-700 p-2 text-gray-100 ${footerBg}`}>
      <h2>&copy; All rights are reserved for this website Demo Theme Changer</h2>
    </div>
  )
}
