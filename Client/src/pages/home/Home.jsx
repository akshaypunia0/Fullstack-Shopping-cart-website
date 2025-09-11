import React from 'react'
import HeroSection from './HeroSection'
import FeaturedCategories from './FeaturedCategories'
import Products from '../products/Products'

const Home = ({ products }) => {

  return (
    <div className='w-full min-h-screen bg-gray-800 '>
      <HeroSection />
      <FeaturedCategories />
      <Products products={products} />
    </div>
  )
}

export default Home