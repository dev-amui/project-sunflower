'use client'


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const EventCard = () => {
    return (
        <div className='eventCard bg-white rounded-md w-full overflow-x-hidden'>
            {/* event banner */}
            <div className="eventBanner ">
                <Avatar className='w-full size-24 rounded-sm'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{'Maxwell'.at?.(0)}{'Konadu'.at?.(0)}</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default EventCard
