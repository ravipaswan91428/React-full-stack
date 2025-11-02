import React from 'react'

export default function Gallary(props) {
  return (
    <div>
      <div className='h-70 w-75 border rounded-2xl hover:scale-105 duration-200'>
        <p className='p-2' id='rece-img'>{props.name}</p>
      </div>
    </div>
  )
}
