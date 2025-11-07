import React from 'react'
import Hero from '../Landing_Components/Hero'
import FeaturedRecipe from '../Landing_Components/FeaturedRecipe'
import Gallery from '../Landing_Components/Gallery'
import recipes from '../../Utils/Data'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <FeaturedRecipe />
      <Gallery />
    </>
  )
}

export default LandingPage
