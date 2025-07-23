import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({ item }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/item/${item.id}`)
    }
    return (
        <div className='p-4 hover:scale-112 transition-transform duration-300 ' key={item.id} onClick={handleClick} >
            <div className='w-full max-w-[300px] mx-auto rounded-2xl   shadow-2xl bg-[#f6f2f2]'>
                <img src={item.image} className='w-full h-[150px] rounded-2xl  object-cover ' />
                <div className='flex flex-col items-center  px-3 py-5 gap-3'>
                    <h1 className='font-semibold text-gray-700'>{item.name}</h1>
                    <p className='text-sm font-medium max-w-[250px] text-center '>{item.instructions[1]}</p>
                    <div className='flex items-center gap-5'>
                        <p>{item.rating}</p>
                        <div className='flex items-center gap-1 text-sm '>
                            {Array(5).fill().map((_, i) => (
                                <span key={i} className='text-yellow-300 text-2xl ' >
                                    {i < Math.round(item.rating) ? "★" : "☆"}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
