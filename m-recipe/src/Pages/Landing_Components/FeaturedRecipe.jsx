import React, { useEffect, useState } from 'react'
import RecipeCard from '../../Components/RecipeCard'
import recipes from '../../Utils/Data'
import { Link } from 'react-router-dom'



const FeaturedRecipe = () => {
 const [featuredRecipeData,setFeaturedRecipeData] = useState([])

 useEffect(()=>{


 },[])
  return (
    <div>
        <div className='m-10'>
        <div className='font-serif space-between flex w-full'>
            <div className='w-full'>
                <h1 className='font-serif text-5xl font-bold'>Featured Recipe</h1>
                <p className='text-2xl mt-8 text-gray-500'>Our top 6 handpickes recipes for you</p>
            </div>
            <span className='justify-end w-full flex'>
              <Link  
                to="/recipe"
              >
                <button className='cursor-pointer p-2 bg-amber-600 h-10 mt-4 text-white hover:scale-105 duration-200 rounded-4xl'>View Recipe</button>
              </Link>
            </span>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 space-evenly mt-15 justify-center'>
          {recipes.slice(0,6).map((item)=>(
          <RecipeCard 
            key={item?.id}
            id={item?.id}
            image={item?.image}
            alt={item?.name}
            name={item?.name}
            description={item?.description}
            prepTime={item?.prepTime}
            cookTime={item?.cookTime}
            rating={item?.rating}
            reviews={item?.reviews}
            calories={item?.calories}
          />
          ))}      
        </div>
      </div>
      
    </div>
  )
}

export default FeaturedRecipe;
