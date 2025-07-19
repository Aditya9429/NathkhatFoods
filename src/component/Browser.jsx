import React from 'react';
import { FiCoffee } from 'react-icons/fi';
import { ImGlass } from 'react-icons/im';
import { MdRamenDining } from 'react-icons/md';
import { RiCake2Line } from 'react-icons/ri';

export default function Browser() {
  const data = [
    {
      id: 1,
      heading: 'Breakfast',
      icon: <FiCoffee />,
    },
    {
      id: 2,
      heading: 'Main Dishes',
      icon: <MdRamenDining />,
    },
    {
      id: 3,
      heading: 'Drinks',
      icon: <ImGlass />,
    },
    {
      id: 4,
      heading: 'Desserts',
      icon: <RiCake2Line />,
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-10 px-4 mb-40'>
      <h1 className='text-4xl font-semibold mb-8 text-center'>Browse Our Menu</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center w-full h-[300px] max-w-[320px] text-center border rounded-xl p-4 shadow-md hover:shadow-lg transition hover:scale-110 transition-transform duration-300'>
            <span className='bg-gray-200 p-4 rounded-full text-3xl text-gray-800'>
              {item.icon} 
            </span>

            <div className='mt-4'>
              <p className='text-lg font-semibold text-black mb-2'>{item.heading}</p>
              <p className='text-sm text-gray-600 mb-4'>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <button className='text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition'>
                Explore Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
