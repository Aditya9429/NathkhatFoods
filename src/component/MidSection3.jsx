import React from 'react';

export default function MidSection3() {
  return (
    <div className="w-full  px-4">
      <div className="flex flex-col md:flex-row items-start gap-16 h-screen max-w-6xl mx-auto">
        
        
        <div className="w-full md:w-[750px] flex  md:flex-row items-center md:items-start gap-4 justify-center">
          <div>
            <img src="/images/Mid5.png" alt="Mid5" className="w-[200px] md:w-[500px]" />
          </div>
          <div className="mt-6 md:mt-10 flex flex-col items-center md:items-start">
            <img src="/images/Mid6.png" alt="Mid6" className="mb-4 w-[190px] md:w-[290px]" />
            <img src="/images/Mid7.png" alt="Mid7" className="w-[190px] md:w-[290px]" />
          </div>
        </div>

        
        <div className="py-6 md:py-10 md:ml-[70px] w-full md:w-[280px]">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C2F24]">
              Fastest Food Delivery in City
            </h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quibusdam, voluptatem maiores quod culpa inventore quam odio quaerat fuga.
            </p>
            <div className="font-semibold text-[#2C2F24] space-y-1">
              <p>Delivery within 30 minutes</p>
              <p>Best Offer & Prices</p>
              <p>Online Services Available</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
