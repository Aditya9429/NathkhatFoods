import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function MidSection4() {
    const [item,setItem] = useState(0);
    const data = [
        {
            id :1,
            heading : "The best restaurant",
            review : "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            img : "/images/Mid9.png",
            name : "Sophire Robson",
            city : "Los Angeles,CA"
        },
        {
            id :2,
            heading : "The best restaurant",
            review : "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            img : "/images/Mid8.png",
            name : "Sophire Robson",
            city : "Los Angeles,CA"
        },
        {
            id :3,
            heading : "The best restaurant",
            review : "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            img : "/images/Mid7.png",
            name : "Sophire Robson",
            city : "Los Angeles,CA"
        },
    ]
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
     setItem((prev) => (prev+1) % bestFoodFor.length)
    },2000)

    return () =>  clearInterval(interval);
  })
  return (
    <div className='w-full py-16 bg-white px-4'>
      <div className='flex flex-col items-center max-w-6xl mx-auto gap-10'>
        <h1 className='text-4xl sm:text-5xl font-bold text-center text-[#2C2F24]'>What our Customer Say {bestFoodFor[item]} </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
          {
            data.map((item,index) => (
                <div key={index} 
                className='w-full max-w-[320px] flex flex-col   gap-5 bg-[#F9F9F7] px-6 py-8 shadow-md hover:scale-112 transition-transform duration-300'>
                 
                    <h1 className='font-semibold text-red-800 text-xl'>{item.heading}</h1>
                    <p className='text-[#414536] italic text-base'>{item.review}</p>
                    <hr className='text-gray-300 w-full'/>
                    <div className='flex items-center gap-5'>
                          <img src={item.img} className='w-[30%] rounded-full object-cover' />
                          <div>
                            <p className='font-medium '>{item.name}</p>
                            <p className='text-gray-700'>{item.city}</p>
                          </div>
                    </div>
                  
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
