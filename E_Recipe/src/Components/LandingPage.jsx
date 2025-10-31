import React from 'react'
import { NavLink } from 'react-router'

export default function LandingPage() {
  return (
    <div>
      <div className='flex border-2 p-2 rounded-4xl m-2 h-126 font-serif bg-amber-100'>
        <div className='m-6 w-126  font-medium  h-36'>
            <h1 className='text-4xl text-orange-500'>Hey,</h1>
            <h1 className='text-4xl text-orange-500'>Wann'a make something special for yourself or the loving one's</h1>
            <p className='mt-6 font-semibold leading-tight'>We'll love to serve you the best food recipe to you and manke you feel like a master chief</p>
            <p>And also make your day full of energy</p>
            <h2 className='mt-6 text-xl w-200'><b className='text-3xl'>Litti Chokha </b>beloved traditional Bihari dish featuring round. This nutrient-dense comfort food is typically cooked over charcoal or in an oven for an authentic smoky flavor and crispy exterior. Traditionally served hot with generous dollops of ghee. Can be enjoyed for lunch or dinner with a side of dal tadka</h2>
            <button className='mt-6'>
            <NavLink 
                to="#"
                className='mt-6 bg-amber-600 p-2 rounded-2xl cursor-pointer hover:text-xl duration-100 hover:text-white'
            >View Recipe
            </NavLink></button>
        </div>
        <div className='h-100 w-100 justify-between flex ml-90 m-8 hover:h-105 duration-150 hover:w-105'><img className='rounded-full border' src="..\public\images\litti-chokha-dal-image for demo.webp" alt="" />
        </div>
      </div>
      <div>Featured Recipe</div>
      <div>Gallery</div>
      <div>Blog</div>
    </div>
  )
}
