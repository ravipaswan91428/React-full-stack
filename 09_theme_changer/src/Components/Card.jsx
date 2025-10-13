import React from 'react'

export default function Card({ cardno, theme }) {
  const cardTheme =
    theme === 'light'
      ? 'bg-gray-200 hover:bg-gray-300 hover:text-black text-gray-900'
      : 'bg-gray-700 hover:text-black text-gray-200 hover:bg-gray-500'

  return (
    <div
      className={`border p-4 w-110 rounded-2xl duration-300 ${cardTheme}`}
    >
      <h1 className='text-xl font-semibold mb-2'>{cardno}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        provident doloremque aspernatur repudiandae nam nemo repellendus
        laudantium temporibus magni voluptates!
      </p>
    </div>
  )
}
