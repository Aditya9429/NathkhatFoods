import React from 'react'

export default function Details() {
  return (
    <div className='mt-30 mb-30'>
      <div className='flex  flex-col lg:flex-row items-center justify-center gap-15 mx-auto '>
        <div className='flex items-center gap-3'>
            <img src="/images/Tag.png" />
            <h1 className='text-lg bg-gradient-to-r from-[#FB3C00]  to-[#FFB800] bg-clip-text text-transparent font-bold'>Daily Discounts</h1>
        </div>
                <hr class="w-[200px] lg:w-[100px] h-[1px]  lg:rotate-90 bg-gray-300 border-none" />

        <div className='flex items-center gap-3'>
            <img src="/images/Location.png"/>
            <h1 className='text-lg bg-gradient-to-r from-[#FB3C00]  to-[#FFB800] bg-clip-text text-transparent font-bold'>Live Tracking</h1>

        </div>
                <hr class="w-[200px] lg:w-[100px] h-[1px]  lg:rotate-90 bg-gray-300 border-none" />
        <div className='flex items-center gap-3'>
            <img src="/images/Time.png" />
            <h1 className='text-lg bg-gradient-to-r from-[#FB3C00]  to-[#FFB800] bg-clip-text text-transparent font-bold'>Quick Deilvery</h1>
        </div>
      </div>
    </div>
  )
}
