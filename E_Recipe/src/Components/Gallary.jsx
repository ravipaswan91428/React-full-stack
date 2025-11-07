import React from 'react'
import recipes from '../meals/meals'

export default function Gallary(props) {
  return (
    <div>
      <div className='h-70 w-75 border overflow-hidden rounded-2xl group hover:scale-105 duration-200'>
        <img src={recipes?.image}/>
        <p className='p-2' id='rece-img'>{props?.name}</p>
      </div>
    </div>
  )
}
