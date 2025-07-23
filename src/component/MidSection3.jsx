import React from 'react';
import { FaShippingFast, FaTags, FaServicestack } from "react-icons/fa";

export default function MidSection3() {
  return (
    <div className="w-full  px-4 mt-20 mb-20">
      <div className="flex flex-col md:flex-row items-start gap-16 h-screen max-w-6xl mx-auto">
        
        
        <div className="w-full md:w-[750px] flex  md:flex-row items-center md:items-start gap-4 justify-center">
          <div>
            <img src="/images/Mid5.png" alt="Mid5" className="w-[200px] md:w-[500px]" />
          </div>
          <div className="mt-6 md:mt-10 flex flex-col  lg:items-center md:items-start">
            <img src="/images/Mid6.png" alt="Mid6" className="mb-4 w-[190px] md:w-[290px]" />
            <img src="/images/Mid7.png" alt="Mid7" className="w-[190px] md:w-[290px]" />
          </div>
        </div>

        
        <div className="py-6 md:py-10 md:ml-[70px] w-full md:w-[280px]">
          <div className="flex flex-col items-center lg:items-start gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C2F24] my-font ">
              Fastest Food Delivery in City
            </h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quibusdam, voluptatem maiores quod culpa inventore quam odio quaerat fuga.
            </p>
            <div className="flex flex-col gap-4 font-semibold text-[#2C2F24] space-y-1 mt-10">
              <div className='flex items-center gap-2'> 
                <span><FaShippingFast className='text-red-600'/></span>
              <p>Delivery within 30 minutes</p>
              </div>
              <div className='flex items-center gap-2'>
                <span><FaTags  className='text-blue-400'/></span>
              <p>Best Offer & Prices</p>
              </div>
              <div className='flex  items-center gap-2'>
                <span><FaServicestack className='text-orange-500' /></span>
              <p>Online Services Available</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
