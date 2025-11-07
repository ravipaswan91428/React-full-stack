import React from 'react'
import recipes from '../../Utils/Data'
import { useState } from 'react';
import { Search } from 'lucide-react';
import RecipeCard from '../../Components/RecipeCard'

const Recipe = () => {
    const [query, setQuery] = useState("");

    const filteredRecipes =
    query.trim() === ""
      ? recipes
      : recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase())
        );

        const handleSearch = () => {
        if (username.trim() !== "") {
        navigate(`/github/${username.trim()}`);
        }
        }

        const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        handleSearch();
        }
    }
  return (
    <div className='m-14 '>
        <div>
            <h1 className='text-5xl font-serif'>Discover Recipes</h1>
            <p className='text-2xl font-serif mt-6 text-gray-500'>Find the perfect recipe for your next meal</p>
        </div>
        
    <div className='gap-4 mt-10 flex'>
        <div className='border p-4 rounded-2xl w-300 h-100 sticky'>
            <h1 className='text-2xl'>Filters</h1>
            <div className='mt-10'>
                <div className='flex flex-col'>
                    <h1>Category</h1>
                    <button 
                    type='button' 
                    role='checkbox'
                    
                    >Veg</button>
                    <button type='button' role='checkbox'>Non-Veg</button>
                    <button type='button' role='checkbox'>Others</button>
                </div>
                <div className='flex flex-col'>
                    <h1>Popularity</h1>
                    <button type='button' role='checkbox'>Most Polular</button>
                    <button type='button' role='checkbox'>Most Viewed</button>
                </div>
                <div className='flex flex-col'>
                    <h1>Sort by</h1>
                    <button type='button' role='checkbox'>Less than 30 min</button>
                    <button type='button' role='checkbox'>More than 30 min</button>
                </div>
            </div>
        </div>     
      <div>
        <div className='flex gap-4 w-250 '>
            <input 
            type='text'
            placeholder='Find your recipe'
            className='border rounded-3xl h-12 w-full p-2'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown} 
            />
        <button className='cursor-pointer p-2 bg-amber-600 text-white hover:scale-105 duration-200 rounded-4xl w-30'
        onClick={() => setQuery(query.trim())}
        >
            Search</button>
       </div>
       <div className='mt-6'>
             {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredRecipes.map((item) => (
               <RecipeCard 
                  key={item?.id}
                  id={item?.id}
                  image={item?.image}
                  alt={item?.name}
                  name={item?.name}
                  description={item?.description}
                  prepTime={item?.prepTime}
                  cookTime={item?.cookTime}
                  calories={item?.calories}
                  rating={item?.rating}
                  reviews={item?.reviews}
                />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No recipes found for "{query}".
          </p>
        )}
       </div>
      </div>
      </div>
    </div>
  )
}

export default Recipe
