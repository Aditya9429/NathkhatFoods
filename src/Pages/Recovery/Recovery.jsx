import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Recovery() {
    const navigate = useNavigate();
    function handleClick(){
   navigate('/account')
    }
  return (
    <div className='w-full  mt-10 p-10'>
      <div className='flex flex-col items-center max-w-3xl mx-auto gap-10  p-5'>
        <div className='text-center font-bold'>
            <h1 className='my-font text-3xl '>Recovery Password</h1>
            <p className='font-medium max-w-[300px] mt-5'>We'll send you an email to reset your password.</p>
        </div>
        <div className='w-full flex flex-col max-w-[400px] gap-1'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your email'  className='w-full border outline-none py-3 px-3 rounded-[5px]  focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400'/>
            </div>
      <div className='w-full max-w-[400px]'>
      <button className='w-full bg-blue-600 py-3 font-bold text-white hover:bg-blue-500'>Send</button>
      </div>
      <p className='border-b cursor-pointer' onClick={handleClick}>Back to login</p>
      </div>
    </div>
  )
}
