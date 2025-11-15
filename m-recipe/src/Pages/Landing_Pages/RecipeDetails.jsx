import React from 'react'
import recipes from '../../Utils/Data'
import RecipeCard from '../../Components/RecipeCard'
import { Star } from 'lucide-react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === (id))

  const currentRecipe = recipes.filter(
  (item) => item.category === recipe?.category && item.id !== recipe.id
);

  return (
    <div className='overflow-hidden gap-2'>
      <div className='justify-center flex'>
        <img 
          src={recipe?.image}
          alt={recipe?.name}
          className='object-cover hover:scale-105 rounded-2xl duration-200 overflow-hidden h-100 w-250'/>
      </div>
      <h1 className='font-bold font-serif text-5xl px-15 py-5'>{recipe?.name}</h1>
      <div className='md:grid-cols-2 mt-4 p-2 flex m-16 gap-10'>
        <div className='font-serif w-[70%]'>
          <h1 className='text-4xl font-bold font-serif'>About the recipe</h1>
          <p className='font-serif text-gray-500 text-xl leading-8 mt-4 wrap-anywhere'>{recipe?.description}</p>
          <div className='mt-10 text-2xl'>
            <h1 className='text-4xl font-bold font-serif wrap-break-word whitespace-normal'>Ingridents</h1>
            <div className='border mt-5 rounded-2xl'>
              <ul className="list-none ml-6 text-gray-700 m-5">
               {recipe?.ingredients?.map((item, index) => (
                 <li key={index}>
                   {item.name} — <span>{item.quantity}</span>
                </li>
                ))}
           </ul>
            </div>
          </div>
          <div className='mt-15'>
            <h1 className='font-bold text-4xl font-serif'>Pre Cooking</h1>
            <div className='mt-5 rounded-2xl border wrap-break-word whitespace-normal relative text-2xl p-5'>
              <ul className='list-disc p-2'>
                {recipe?.preCookingProcess?.map((step, index)=>(
                  <li key={index}>
                      {step}  
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <section className='mt-15'>
          <h2 className="text-4xl font-semibold mb-4 font-serif">Cooking Process</h2>
          {Object.entries(recipe?.cookingProcess || {} ).map(([sectionTitle, steps]) => (
              <div key={sectionTitle} className="mt-8">
                <h3 className="text-2xl font-bold ml-1 font-serif">{sectionTitle}</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 text-2xl mt-5">
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <div className='mt-15'>
            <h1 className='font-serif font-bold text-4xl'>Post Cooking Process</h1>
            <div className='border rounded-2xl wrap-break-word whitespace-normal relative mt-10 p-2 text-2xl'>
              <ul className="list-decimal ml-6 text-gray-700 mt-2 ">
                {recipe?.postCookingProcess?.map((step, index) => (
                 <li key={index} className="py-1">
                   {step}
                 </li>
               ))}
             </ul>
            </div>
          </div>
          <div className='mt-15'>
            <h1 className='font-bold font-serif text-4xl'>Serving Suggestion</h1>
            <div className='border rounded-2xl wrap-break-word whitespace-normal relative mt-10 p-2 text-2xl'>
              <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ol>
            </div>
            <div className='mt-15'>
              <h1 className='text-4xl font-bold font-serif'>Tips & Tricks</h1>
              <div className='mt-10 p-2 text-2xl rounded-2xl border border-orange-500 bg-slate-100'>
                <ul className="list-decimal ml-6 text-gray-700">
                   {recipe?.postCookingProcess.map((step, index) => (
                   <li key={index} className="py-1">
                     {step}
                   </li>
                   ))}
               </ul>
              </div>
            </div>
          <div className='mt-15'>
            <h1 className='font-bold font-serif text-4xl'>Feedback</h1>
            <div className='h-75 border rounded-2xl mt-10 p-4'>
              <h2 className='justify-center flex text-2xl font-serif font-semibold'>How would you rate us ?</h2>
              <div className='mt-5 flex gap-5 text-gray-500'>
                <Star className='h-10 w-10'/>
                <Star className='h-10 w-10'/>
                <Star className='h-10 w-10'/>
                <Star className='h-10 w-10'/>
                <Star className='h-10 w-10'/>
              </div>
              <div className='mt-5'>
                  <input 
                    type='text'
                    role='textbox'
                    placeholder='Help us to improve.......'
                    className='border h-20 rounded-2xl w-190 border-gray-400 p-2'
                  />
                  <button type='submit' className='cursor-pointer h-10 px-5 bg-amber-600 text-white hover:scale-105 duration-200 rounded-4xl mt-5'>Submit</button>
                </div>
            </div>
          </div>
          </div>
          
        </div>
        <div className='justify-between place-items-center m-4'>
          <div className=' wrap-break-word whitespace-normal w-105 p-4 rounded-2xl border justify-center'>
            <h1 className='text-2xl font-bold font-serif'>Nutrition classification</h1>
            <ul className='list-none text-gray-500 text-xl mt-5'>
            {Object.entries(recipe?.nutritionClassification || {}).map(([step, index])=>(
                <li key={step} className='flex justify-between p-1'>
                  <span>{step}</span>{index}<span></span>
                </li>
            ))}
            </ul>
              
          </div>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold font-serif mb-5'>Suggested Recipe</h1>
            {currentRecipe.length > 0 ? (
              currentRecipe.slice(0,1).map((item) => (
                <RecipeCard 
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  alt={item.name}
                  name={item.name}
                  rating={item.rating}
                  reviews={item.reviews}
                  calories={item.calories}
                  prepTime={item.prepTime}
                  cookTime={item.cookTime}
                />
              ))
            ) : (
              <p>No related recipes found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
