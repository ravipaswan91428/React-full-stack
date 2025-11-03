import React from 'react'

export default function Card(props) {
  return (
    <div className='m-8 font-serif hover:shadow-2xl rounded-2xl'>
        <div className='h-108 border w-103 rounded-2xl'>
            <div className='h-80 border-b'></div>
            <div className='p-2 text-wrap'>
              <img id='rece-img'>{props.image}</img>
              <h1 className=' text-xl font-bold' id='rece-name'>{props.name}</h1>
              <p className='text-gray-700 text-sm'>{props.desc}</p>    
            </div>
      </div>
    </div>
  )
}
