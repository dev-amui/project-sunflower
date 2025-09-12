'use client';

import React from 'react'

const GuardianForm = () => {
  return (
    <div className='guardianForm testr h-full'>
      <div className="pageHeader text-center ">
        <p className="title text-xl font-semibold">
          Guardian Form
        </p>

        <p className='subHeaderText text-gray-400 text-sm'>A guardian is anyone (Parent, or Care taker)</p>

      </div>

      <div className="pageContent">
        {/* form section */}
        <section className="Form"></section>

        {/* Hero section */}
        <section className="hero"></section>
      </div>
    </div>
  )
}

export default GuardianForm
