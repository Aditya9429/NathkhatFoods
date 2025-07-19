import React from 'react';
import { FaPlay } from 'react-icons/fa';

export default function AboutSection2() {
  const items = [
    {
      id: 1,
      image: "/images/Group.png",
      heading: "Multi Cuisine",
      title: "In the new era of technology, we look into the future with certainty of life"
    },
    {
      id: 2,
      image: "/images/Group1.png",
      heading: "Easy to order",
      title: "In the new era of technology, we look into the future with certainty of life"
    },
    {
      id: 3,
      image: "/images/timer1.png",
      heading: "Fast Delivery",
      title: "In the new era of technology, we look into the future with certainty of life"
    },
  ];

  return (
    <div className='w-full relative'>
      {/* Background Image */}
      <div className='w-full'>
        <img src="/images/Resturant.jpg" alt="Restaurant" className='w-full h-auto object-cover' />
      </div>

      <div className='absolute top-[16%] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center gap-6 px-4'>
        <div className='flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-fuchsia-300 rounded-full'>
          <FaPlay className='text-red-500 text-xl md:text-2xl' />
        </div>
        <h1 className='hidden text-lg sm:text-2xl  lg:block md:text-3xl lg:text-4xl font-semibold text-white max-w-[90vw]'>
          Feel the authentic & original taste from us
        </h1>
      </div>

      {/* Info Items */}
      <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14 px-4 mt-20'>
        {items.map((item, index) => (
          <div key={index} className='flex items-start gap-4 max-w-sm'>
            <img src={item.image} alt={item.heading} className='w-7 h-9 lg:w-12 lg:h-12 object-contain' />
            <div className='flex flex-col gap-1'>
              <p className='text-[#2C2F24] font-medium text-lg'>{item.heading}</p>
              <p className='text-[#414536] text-sm'>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
