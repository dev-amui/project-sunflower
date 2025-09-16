'use client';

import React from 'react'

const page = () => {
  return (
    <div className='externalUserApplicationListPage mt-4 h-full'>
      {/* form headers */}
      <div className="headerText">
        <p className="subHeader text-[24px] text-darkGrey">
          Applications List
        </p>

        <p className='subText text-base mt-2 text-darkGrey'>Manage all your submitted application forms here.</p>
      </div>

      {/* application cards */}
      <div className="applicationCards mt-10 bg-white h-10">

      </div>
    </div>
  )
}

export default page
