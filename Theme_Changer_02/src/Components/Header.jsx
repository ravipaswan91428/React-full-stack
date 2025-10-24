import React from 'react'
import useTheme from './useTheme'


export default function Header() {
    const {theme,setTheme}= useTheme()
  const headerBg = theme === 'light' ? 'text-gray-900 bg-gray-500' : 'bg-slate-900 text-gray-200'

  return (
    <div className={`flex justify-between p-4 items-center ${headerBg}`}>
      <h1 className='text-3xl font-bold'>Welcome</h1>
      <button
        onClick={()=>{
            if(theme=='light'){
                setTheme("dark")
            }
            else{
                setTheme("light")
            }
        }}
        className='p-2 px-4 bg-blue-600 text-gray-50 rounded-3xl hover:bg-blue-800 duration-200'
      >
        Change Theme
      </button>
    </div>
  )
}