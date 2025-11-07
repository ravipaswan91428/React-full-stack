import React from 'react'
import { NavLink } from 'react-router'
import Card from './Card'
import Gallary from './Gallary'

export default function LandingPage() {
  return (
    <div>
      <div className='flex p-2 m-2 h-126 font-serif'>
        <div className='m-6 w-200  font-medium  h-36'>
            <h1 className='text-4xl text-orange-500'>Hey,</h1>
            <h1 className='text-4xl text-orange-500'>Wann'a make something special for yourself or the loving one's</h1>
            <div className='mt-8 text-xl bg-orange-200 flex w-95 p-2 rounded-4xl text-amber-900'>Good night - delicious and regional dish</div>
            <h2 className='mt-6 text-xl w-200'><b className='text-3xl'>Litti Chokha </b>beloved traditional Bihari dish featuring round. This nutrient-dense comfort food is typically cooked over charcoal or in an oven for an authentic smoky flavor and crispy exterior. Traditionally served hot with generous dollops of ghee. Can be enjoyed for lunch or dinner with a side of dal tadka</h2>

            <div className='gap-10 flex'>
            <button className='mt-6 hover:scale-110 duration-200'>
            <NavLink 
                to="#"
                className='mt-6 bg-amber-600 p-2 rounded-2xl cursor-pointer duration-200 hover:text-white'
            >View Recipe
            </NavLink></button>

            <button className='mt-6 hover:scale-110 duration-200'>
            <NavLink 
                to="#"
                className='mt-6 hover:bg-amber-600 border border-slate-400 p-2 rounded-2xl cursor-pointer duration-200 hover:text-white hover:border-white'
            >View Recipe
            </NavLink></button>
            </div>
        </div>
        <div className='h-100 flex justify-between p-5 mt-5'><img className='h-106 w-130 rounded-4xl' src="..\src\Components\images\litti-chokha-dal-image for demo.webp" alt="Litti-Chokha image" />
        </div>
      </div>

      <div className='font-serif m-10 flex space-between'>
        <div className='space-between'>
          <h1 className='text-4xl font-bold'>Featured Recipes</h1>
          <p className='text-xl font-serif font-semibold mt-3 text-gray-600'>And the top 6 of them are here</p>
        </div>
        <div>
          <button className='flex w-full justify-center ml-150'>
            <NavLink
              to="#"
              className="mt-6 bg-amber-600 rounded-2xl cursor-pointer duration-200 hover:text-white px-4 py-2 hover:scale-105"
            >View all
            </NavLink></button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden'>
        <Card
        name="Thakua"
        desc="A traditional sweet from Bihar, mainly prepared as a sacred offering during Chhath Puja. Thakua is a deep-fried biscuit"
        />
        <Card 
        //image={ChickenBiryani}
        name="Daal Baati Churma"
        desc="A traditional Rajasthani dish featuring baked wheat balls (baati) served with spicy, flavorful mixed lentil curry (daal) and sweet churma. It is hearty, rich, and best enjoyed with ghee."
        />
        <Card 
        //image={ChickenBiryani}
        name="Dhokla"
        desc="A soft and spongy steamed snack from Gujarat made with fermented chickpea flour (besan) mustard seeds, curry leaves, and green chilies. Light, fluffy, and mildly tangy—perfect for breakfast or tea time."
        />
        <Card 
        //image={ChickenBiryani}
        name="Fafda-Jalebi"
        desc="A traditional Gujarati breakfast pairing of crisp, gram-flour sticks (fafda) and sweet, golden jalebi spirals. This combination perfectly balances savory crunch and syrupy sweetness, usually enjoyed on festive mornings like Dussehra."
        />
        <Card 
        //image={ChickenBiryani}
        name="Gatte Ki Sabzi"
        desc="A Rajasthani delicacy made from gram flour (besan) dumplings, steamed and simmered in a spiced yogurt-based gravy. It is rich, tangy, and aromatic, best enjoyed with hot puris, roti, or steamed rice."
        />
        <Card 
        //image={ChickenBiryani}
        name="Ker Sangri"
        desc="A traditional Rajasthani dry curry made from dried desert berries (ker) and beans (sangri), cooked with a blend of local spices, yogurt, and oil. It delivers earthy, tangy, and spicy flavors and pairs perfectly with bajra roti or rice."
        /></div>


        <div className='m-8 font-serif'>
          <h1 className='justify-center flex text-5xl font-bold '>Recipe Gallery</h1>
          <p className='justify-center flex text-2xl text-gray-600 mt-5'>Here you can visit our delicious cusins available for you</p>
        </div>
        <div className='ml-20 mr-30'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center transition-transform cursor-pointer'>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
            <Gallary name="Thakua"/>
          </div>
          <button className='flex w-full justify-center'>
            <NavLink
              to="#"
              className="mt-6 bg-amber-600 p-2 rounded-2xl cursor-pointer duration-200 hover:text-white hover:scale-105"
            >              
            Explore all Recipes
            </NavLink></button>
        </div>
      <div>Blog</div>
    </div>
  )
}
