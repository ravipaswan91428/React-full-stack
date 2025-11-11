import React from 'react'
import recipes from '../Utils/Data'
import { Clock,Star,Flame } from 'lucide-react'
import { Link } from 'react-router-dom'


const RecipeCard = ({ id, image, name, description, prepTime, cookTime, calories, rating, reviews,isHighProtein }) => {

  return (
    <Link key={id} to={`/recipe/${id}`}>
    <div className='border rounded-2xl h-100 gap-1 hover:shadow-2xl w-105 duration-200 cursor-pointer overflow-visible'>
      <div className='h-65 border-b rounded-t-2xl overflow-hidden'>
        <img
          id={id}
          src={image}
          alt={name}
          className="w-full h-full object-cover overflow-hidden duration-300 hover:scale-115"
        />
        <div>
          <span className='text-9xl flex text-white'>High</span>
        </div>
      </div>
      <div>
        <div className='p-2'>
          <h1 className='font-semibold font-serif'>{name}</h1>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-3 p-2 text-xl">
            <div className="scale-120 flex items-center p-2 gap-2">
              <Star className="h-5 w-5 stroke-amber-600 fill-amber-600" />
              <span className='text-sm'>{rating} / {reviews}</span>
            </div>
            <div className="scale-110 flex items-center gap-1 p-2">
              <Clock className="h-5 w-5 stroke-amber-600" />
              <span className="text-sm">{prepTime} + {cookTime}</span>
            </div>
            <div className="flex items-center  p-2 gap-2">
              <Flame className="h-5 w-5 stroke-amber-600 scale-120" />
              <span className="text-sm">{calories}</span>
            </div>
          </div>
      </div>
      </div>
      </Link>
  )
}

export default RecipeCard
