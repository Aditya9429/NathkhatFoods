import React from 'react'

export default function Blog() {
    const items = [
        {
            id: 1,
            img: "/images/Mid12.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 2,
            img: "/images/Mid13.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 3,
            img: "/images/Mid14.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 4,
            img: "/images/Mid15.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
         {
            id: 5,
            img: "/images/Mid12.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 6,
            img: "/images/Mid13.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 7,
            img: "/images/Mid14.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 8,
            img: "/images/Mid15.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
         {
            id: 9,
            img: "/images/Mid12.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 10,
            img: "/images/Mid13.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 11,
            img: "/images/Mid14.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
        {
            id: 12,
            img: "/images/Mid15.jpg",
            date: "January 3, 2023",
            title: "How to prepare the perfect French fries in an air fryer"
        },
    ];
    return (
        <div className='px-4 py-10'>
           <div className='max-w-7xl mx-auto flex flex-col items-center gap-10'>
            <div className='text-center'>
                <h1 className='text-[#5c4c4c] text-4xl lg:text-[100px] font-semibold'>Our Blog and Articles</h1>
                <p className="text-[#495460] text-sm md:text-base mt-4 max-w-1xl">We consider all the drivers of change gives you the components you need to change to create a truly happen</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 m-4'>
                {
                    items.map((item,index) => (
                        <div key={item} className=' rounded-2xl bg-[#f9f2f2]'>
                            <img src={item.img} className='w-full h-[200px] object-cover rounded-2xl ' />
                            <div className='mt-5 p-4'>
                            <p className='text-[#737865] text-sm'>{item.date}</p>
                            <p className='text-[#2C2F24] font-medium text-base mt-3'>{item.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
           </div>
        </div>
    )
}
