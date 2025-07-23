import React from 'react'

export default function Table() {

    const item =[

    ]
    return (
        <div className='w-full relative py-5 px-10 '>
            <div className='max-w-4xl mx-auto flex flex-col items-center gap-20'>
                <div className='text-center'>
                    <h1 className='text-5xl lg:text-[100px] font-extralight my-font'>Book A Table </h1>
                    <p className='max-w-[520px] mt-5 text-sm md:text-[18px;\] '>We consider all the drivers of change gives you the components you need to change to create a truly happens</p>
                </div>
                <div className='w-full flex flex-col gap-5  bg-white p-6 md:p-10 rounded-2xl shadow-md '>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="" className='mb-2 text-sm font-medium'>Date</label>
                            <input type='date' className='w-full border rounded-4xl p-2' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 text-sm font-medium'>Time</label>
                            <input type='time' className='w-full border rounded-4xl p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 mt-6'>
                        <div className='flex flex-col w-full'>
                        <label  className='mb-2 text-sm font-medium'>Name</label>
                        <input type='text' className='border rounded-4xl p-2 px-4' placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col w-full'>
                        <label className='mb-2 text-sm font-medium'>Phone</label>
                        <input type='text' className='border rounded-4xl p-2 px-5' placeholder='xx-xxx-xxxxx' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-6'>
                        <label htmlFor="" className='mb-2 text-sm font-medium'>Total Person</label>
                        <input text="text" className='border rounded-4xl p-2' />
                    </div>
                    <button className='w-full bg-amber-500 p-3 rounded-4xl mt-10 font-bold '>Book a Table</button>
                </div>
            </div >
            <div className='w-full absolute top-[82%] right-[0%]  lg:top-1/2 lg:right-[0%] z-[-100] '>
                <img src="/images/Map.png"  className='w-full '/>
            </div>
        </div>
    )
}
