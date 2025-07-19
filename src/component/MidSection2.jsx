import React from 'react'

export default function MidSection2() {
    const items = [
        {
            id: 1,
            img: "/images/Mid1.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainity for life",
        },
        {
            id: 2,
            img: "/images/Mid2.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainity for life",
        },
        {
            id: 3,
            img: "/images/Mid3.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainity for life",
        },
        {
            id: 4,
            img: "/images/Mid4.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainity for life",
        },
    ]
    return (
        <div className='w-full flex items-center justify-center  mx-15 mb-40'>
            <div className=''>
            <h1 className='text-5xl max-w-[500px] text-[#2C2F24] font-[var(--heading-font)'>We also offer unique services for your events</h1>
            <div className='grid grid-cols-1 sm:grid-cols-4 lg-grid-cols-4 gap-7 mt-20 '>
                {
                    items.map((item, index) => (
                       
                            <div key={index} className='w-full max-w-[300px]  transition hover:scale-110 transition-transform duration-300'>
                                
                             <img src={item.img} className='rounded-2xl'/>
                             <div className='mt-3'>
                             <h1 className='text-[#2C2F24] font-bold'>{item.heading}</h1>
                             <p className='text-[#414536] not-italic text-base font-medium'>{item.title}</p>
                             </div>
                            </div>
                        )
                    )
                }
            </div>
            </div>
        </div>
    )
}
