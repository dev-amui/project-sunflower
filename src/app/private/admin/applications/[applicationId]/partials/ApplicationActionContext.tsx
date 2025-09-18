'use client';


import React from 'react'

const ApplicationActionContext = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            {/* header */}
            <div className="headerText flex items-center gap-4">
                {/* <ShieldUserIcon className='w-' /> */}
                <p className='font-semibold '>
                    Review Actions
                </p>
            </div>
            <p className="subheader text-sm text-gray-500">
                Add notes and update the application status
            </p>
        </div>
    )
}

export default ApplicationActionContext
