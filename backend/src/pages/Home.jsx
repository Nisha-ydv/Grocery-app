import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/category'
import BestSeller from '../components/BestSeller'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Category/>
    <BestSeller/>
    <NewsLetter/>
    </div>
  )
}

export default Home
