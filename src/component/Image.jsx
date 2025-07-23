import React, { useEffect, useState } from 'react';
import './Image.css';
import { useNavigate } from 'react-router-dom';

export default function Image() {
  const [item, setItem] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const bestFoodFor = [
    "cravings",
    "mood",
    "family",
    "date night",
    "cheat day",
    "lunch break",
    "celebrations",
    "weekend",
    "health kick",
    "late night hunger"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setItem(prev => (prev + 1) % bestFoodFor.length);
      setAnimateKey(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();
function handleClick(){
  navigate('/booktable/')
}
function handleMenu(){
  navigate('/menu')
}
  return (
    <div className='img-container'>
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center gap-6 md:gap-8 max-w-5xl mx-auto'>
        <h1 className='heading-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#black] my-font'>
          Best food for your <span key={animateKey} className='slide-up'>{bestFoodFor[item]}</span>
        </h1>
        <p className='paragraph-text font-semibold sm:text-lg md:text-xl text-[#917979]  max-w-[90%] mx-auto '>
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven
        </p>
        <div className='btn-group flex flex-wrap justify-center items-center gap-3 mt-2'>
          <button className='py-2 px-5 border border-gray-700 rounded-3xl font-medium hover:bg-red-600 hover:text-white transition' onClick={handleClick} >
            Book A Table
          </button>
          <button className='py-2 px-5 border border-gray-700 rounded-3xl font-medium  hover:bg-white hover:text-black transition' onClick={handleMenu}>
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}
