import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='sticky top-0 h-21 w-full bg-white hover:bg-white border-b justify-between p-2 flex space-between font-serif'>
      <div className='flex text-3xl gap-4'><img className='h-17 rounded-[50px] justify-between p-0.5 border flex hover:scale-105 duration-100' src="..\public\Logos\logo(1).jpg" alt="profileImage" />
        <div className='leading-0'>
            <h1 className='p-3 ml-2 justify-between font-bold'>Ravi Kumar Paswan</h1>
            <p className='flex text-2xl p-2 ml-3 '>Welcome</p>
        </div>
      </div>
      <div className='flex gap-4 items-center p-2'>
        <NavLink 
            to="/"
            className='hover:text-orange-600 duration-100 hover:scale-110 cursor-pointer'>
            Main Menu</NavLink>
        <NavLink 
            to="/recepi"
            className='hover:text-orange-600 duration-100 hover:scale-110 cursor-pointer'>
            All Recepie
        </NavLink>
        <img className='h-17 rounded-[50px] justify-between p-1 border flex hover:scale-110 duration-100' 
        src="..\public\Logos\profileImage.JPG" alt="profileImage" />
      </div>
    </div>
  )
}
