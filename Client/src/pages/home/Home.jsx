import React from 'react'
import HeroSection from './HeroSection'
import FeaturedCategories from './FeaturedCategories'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-gray-800 '>
      <HeroSection />
      <FeaturedCategories />
    </div>
  )
}

export default Home