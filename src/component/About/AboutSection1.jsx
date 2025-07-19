import React from 'react'
import { FiPhone, FiMessageCircle, FiMapPin } from 'react-icons/fi';
export default function AboutSection1() {
  return (
    <div className='w-full flex flex-wrap items-center justify-center mt-17 mb-44 px-4 gap-30'>
      <div className='flex items-center justify-between  relative '>
        <div className='w-[280px] h-[340px]  rounded-2xl'>
         <img src="/images/Mid18.jpg"/>
        </div>
        <div className='flex  items-start  w-[78%] h-[60%] absolute top-1/2 left-[37%] bg-[#474747] py-4  rounded-2xl'>
          <div className='flex flex-col gap-2 px-8 '>
   
            <h1 className='mt-3 text-white font-medium'>Come and visit us</h1>
            <div className='mt-3 text-sm font-light'>
            <div className='flex items-center gap-4 mb-3 '>
              <span className='text-white'><FiPhone /></span>
              <p className='gap-3 text-gray-300'> 9654469604</p>

            </div>
            <div className='flex items-center gap-4 mb-3'>
              <span><FiMessageCircle /></span>
              <p className='gap-3 text-gray-300 '>nathkhat23@gmail.com</p>

            </div>
            <div className='flex items-center gap-4'>
              <span><FiMapPin /></span>
              <p className='gap-3 text-gray-300'>81-A,Syria Ist Lane,Yria-14321</p>

            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-start gap-4 max-w-[500px]   ml-8 px-3 py-3'>
        <h1 className='text-3xl font-semibold'>We provide healthy food for your family</h1>
        <p className='text-shadow-amber-200 text-[#281f1f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non atque suscipit ut ipsa
          asperiores libero nemo impedit! Blanditiis voluptates suscipit ad iusto, nihil culpa quod incidunt accusamus a beatae.</p>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cupiditate numquam harum vel ab asperiores facilis eos nesciunt.
          Dolores, cumque dicta. Eius dicta voluptatum beatae ducimus voluptas velit repellendus sunt.</p>
        <button className='py-3 px-3 mt-3 rounded-3xl font-light  border'>More About Us</button>
      </div>
    </div>


  )
}
