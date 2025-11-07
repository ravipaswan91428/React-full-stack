import React from 'react'
import recipes from '../../Utils/Data'
import { Link } from 'react-router-dom'


const Gallery = () => {

  
  return (
    <div className='m-10 mt-15'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-serif text-5xl font-bold'>Recipe Gallery</h1>
            <p className='text-2xl font-serif mt-8 text-gray-500'>Explore our diverse collection of authentic Indian recipes</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-18 mt-20">
          {recipes.slice(0, 8).map((item) => (
            <Link key={item?.id} to={`/recipe/${item?.id}`}>
              <img
                src={item?.image}
                alt={item?.name}
                className="h-70 w-70 border rounded-2xl hover:shadow-2xl hover:scale-105 duration-200 cursor-pointer object-cover"
              />
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Gallery
