
import React from 'react'
import Card from './Card'
import useTheme from './useTheme'

export default function Home() {
  const {theme,setTheme}= useTheme() 
  const homeBg = theme === 'light' ? 'text-gray-900 bg-gray-300' : 'bg-slate-800 text-gray-200'

  return (
    <div className={`p-5 duration-300 ${homeBg}`}>
      
      <div>
        <h1 className='text-2xl font-bold'>Welcome</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officiis corporis quasi!</p>
      </div>

      <div className='gap-4 mt-6 flex'>
        <Card cardno="Card One" theme={theme} />
        <Card cardno="Card Two" theme={theme} />
        <Card cardno="Card Three" theme={theme} />
      </div>
    </div>
  )
}
