import React from 'react'
import { FiPhone, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
export default function MidSection() {
  const navigate = useNavigate();
  function handleAbout(){
navigate('/about')
  }
  return (
     <div className='w-full flex flex-wrap items-center justify-center mt-10 mb-44 px-4 gap-30'>
         <div className='flex items-center justify-between  relative '>
           <div className='w-[280px] h-[340px] lg:w-[530px]  rounded-2xl'>
            <img src="/images/Mid18.jpg"/>
           </div>
           <div className='flex  items-start  w-[78%] h-[60%] lg:w-[60%] lg:h-[80%] absolute top-1/2 left-[33%] lg:top-[80%] lg:left-[48%] bg-[#474747] py-4  rounded-2xl'>
             <div className='flex flex-col gap-2 px-8 lg:py-5 lg:gap-3'>
      
               <h1 className='mt-3 text-white font-medium text-lg' >Come and visit us</h1>
               <div className='mt-3 text-sm font-light'>
               <div className='flex items-center gap-4 mb-3 '>
                 <span className='text-white'><FiPhone /></span>
                 <p className='gap-3 text-gray-300 font-medium lg:font-semibold'> 9654469604</p>
   
               </div>
               <div className='flex items-center gap-4 mb-3'>
                 <span><FiMessageCircle className='text-white'/></span>
                 <p className='=gap-3 text-gray-300 font-medium lg:font-semibold'>nathkhat23@gmail.com</p>
   
               </div>
               <div className='flex items-center gap-4'>
                 <span><FiMapPin className='text-white'/></span>
                 <p className='gap-3 text-gray-300 font-medium lg:font-semibold'>81-A,Syria Ist Lane,Yria-14321</p>
   
               </div>
               </div>
             </div>
           </div>
         </div>
         <div className='w-full flex flex-col items-start gap-8 max-w-[500px]   ml-8 px-3 py-3 lg:mt-40'>
           <h1 className='text-5xl font-medium my-font'>We provide healthy food for your family</h1>
           <p className='text-shadow-amber-200 lg:text-lg font-light lg:font-medium text-[#0b0a0a]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
           <p className=' lg:text-lg font-light lg:font-medium text-gray-800'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
           <button className='py-3 px-3 mt-3 rounded-3xl font-semibold  border border-0.5 hover:bg-red-800  hover:text-white' onClick={handleAbout}>More About Us</button>
         </div>
       </div>


  )
}
