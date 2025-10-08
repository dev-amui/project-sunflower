import React from 'react'
import { Hero } from './partials/HeroSection'
import { Programs } from './partials/Programs'
import { Values } from './partials/Values'
import { Features } from './partials/Features'
import { CTA } from './partials/CTA'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <Programs />
      <Values />
      <Features />
      <CTA />
    </div>
  )
}

export default page
