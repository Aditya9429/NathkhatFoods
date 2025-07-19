import React from 'react';

export default function AboutSection3() {
  const items = [
    {
      id: 1,
      main: "3",
      title: "Locations"
    },
    {
      id: 2,
      main: "1995",
      title: "Founded"
    },
    {
      id: 3,
      main: "65+",
      title: "Staff Members"
    },
    {
      id: 4,
      main: "100%",
      title: "Satisfied Customers"
    }
  ];

  return (
    <div className='w-full mt-50'>
      <div className='w-full max-w-5xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-50'>
          
       
          <div className='flex flex-col gap-6 w-full md:w-1/2'>
            <div>
              <h1 className="text-4xl italic font-bold mb-2">A little information for our valuable guest</h1>
              <p className="text-gray-700 text-sm">
                At place, we believe that dining is not just about food, but also about the overall experience.
                Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {
                items.map((item, index) => (
                  <div key={index} className='flex flex-col items-center justify-center w-full h-[180px] border rounded-xl shadow-md'>
                    <p className="text-3xl font-bold">{item.main}</p>
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>

        
          <div className='w-full md:w-1/2'>
            <img src="/images/Mask.png" alt="Info visual" className='w-full h-auto rounded-lg' />
          </div>

        </div>
      </div>
    </div>
  );
}
