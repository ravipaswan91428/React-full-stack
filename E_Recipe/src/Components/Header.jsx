import React from 'react'
import LandingPage from './LandingPage'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='h-21 w-full bg-gray-600 text-white justify-between p-2 flex space-between'>
      <div className='flex text-3xl gap-4'><img className='h-17 rounded-[50px] justify-between p-1 border flex hover:h-18 duration-100' src="..\public\Logos\logo(1).jpg" alt="profileImage" />
        <div className='leading-0'>
            <h1 className='p-3 ml-2 justify-between'>Ravi Kumar Paswan</h1>
            <p className='flex text-2xl p-2 ml-3 '>Welcome</p>
        </div>
      </div>
      <div className='flex gap-4 items-center p-2'>
        <NavLink 
            to="/"
            className='hover:text-orange-600 duration-100 hover:text-xl cursor-pointer'>
            Main Menu</NavLink>
        <NavLink 
            to="/recepi"
            className='hover:text-orange-600 duration-100 hover:text-xl cursor-pointer'>
            All Recepie
        </NavLink>
        <img className='h-17 rounded-[50px] justify-between p-1 border flex hover:h-18 duration-100' src="..\public\images\profileImage.JPG" alt="profileImage" />
      </div>
    </div>
  )
}
