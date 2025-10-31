import React from 'react'
import { NavLink } from 'react-router'

export default function Footer() {
  return (
    <div className='bg-slate-400'>
        <div className='flex h-51 p-2'>
            <div className='w-100 h-51'><img  className='h-46 hover:h-47 duration-200 ml-10 justify-between flex rounded-bl-4xl rounded-tr-4xl p-2 border-2' src="..\public\Logos\logo(2).jpg" alt="" /></div>
            <div className='flex-col flex justify-center text-xl p-2'>
                <ul>
                    <li>
                        <NavLink to="/recepi" className='hover:text-orange-600 duration-200 hover:font-bold'>All Recipe</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='hover:text-orange-600 duration-200 hover:font-bold'>Main Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className='hover:text-orange-600 duration-200 hover:font-bold'>Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center text-xl bg-slate-700 text-white p-2'>All &copy; copyrights are reserved for the creator Ravi Kumar Paswan</div>
    </div>
  )
}
