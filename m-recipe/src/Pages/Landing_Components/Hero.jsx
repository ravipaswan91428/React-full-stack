import React from 'react'
import recipes from '../../Utils/Data'
import { Star,Clock,TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';


const HeroPage = () => {

    const recipe = recipes[Math.floor(Math.random() * recipes.length)];

      const getTimeGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
      }

  return (
    <div className='font-serif m-10'>
        <div className='gird md:grid-cols-2 gap-12 items-center flex p-2'>
            <div className='flex w-[50%]'>
                <div>
                    <div className='p-2 bg-gray-100 text-yellow-600 font-semibold rounded-4xl w-75'>{getTimeGreeting()} - High in Protein</div>
                    <h1 className='text-4xl mt-4 font-bold font-serif tracking-widest'>{recipe?.name}</h1>
                    <p className=' text-xl text-gray-500 tracking-widest'>{recipe?.description}</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2'>
                        <div className='flex gap-2 p-2 font-sans mt-10'>
                            <div className='flex'>
                                <Star className="w-12 h-10 fill-amber-600 "/></div>
                                <div className='mt-1 text-xl'>{recipe.rating}/5</div>
                            <div className='flex gap-2 ml-15'>
                                <Clock className="w-10 h-10 flex border-black bg-orange-400 rounded-full"/><div className='mt-1 text-xl'>{recipe.prepTime}+{recipe.cookTime}</div>
                            </div>
                            <div className='flex gap-2 ml-15'>
                                <TrendingUp className="w-10 h-10 rounded-full bg-green-600 flex border-black border-2"/><div className='mt-1 w-50 text-xl'>{recipe.protein}g Per Serveing</div>
                            </div>                            
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10'>
                        <Link to='recipe/:id'>                       
                            <button className='cursor-pointer h-10 p-2 bg-amber-600 text-white hover:scale-105 duration-200 rounded-4xl'>View Recipe</button>
                        </Link> 
                        <Link to="/recipe">
                            <button className='cursor-pointer p-2 hover:bg-amber-600 h-10 hover:text-white hover:scale-105 duration-200 rounded-4xl'>View all Recipe</button>
                        </Link>
                    </div>
                </div>
                <div>
                                 
                </div>
            </div>
            <div className='flex w-[50%] px-10 py-15'>
                <div className=''>
                    <img className='h-150 rounded-2xl w-150 drop-shadow-2xl hover:scale-105 duration-200' src={recipe?.image} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroPage
