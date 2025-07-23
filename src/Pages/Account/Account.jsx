import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const [currentState, setCurrentState] = useState("Login");
    const navigate = useNavigate();
   function handleClick(){
    navigate('/recovery');
   }

    return (
        <div className='mt-10 p-10'>
            <div className='w-full flex flex-col items-center justify-center  max-w-[500px] mx-auto gap-10   rounded-2xl p-5'>
                <div className='text-5xl  lg:text-7xl my-font text-center font-bold'>
                    <h1>{currentState}</h1>
                </div>
                <div className='w-full flex flex-col gap-5 max-w-[500px]'>
                    {
                        currentState === "Login" ? <></> : <div className='flex flex-col gap-2 '> <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name'  className='w-full py-3 px-2 border outline-none rounded-[4px]  focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400'/></div>
                    }
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Email</label>
                    <input type='email' placeholder='Enter your email ' className='w-full py-3 px-2 border outline-none rounded-[4px]  focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400' required />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Password</label>
                    <input type='password' placeholder='Enter your password' className='w-full py-3 px-2 border outline-none rounded-[4px]   focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400' required />
                    </div>
                </div>
                <div className='w-full max-w-[500px]'>
                <button className='w-full bg-red-600 py-3 text-white mt-5 mb-4 rounded-[5px] hover:bg-red-500 font-semibold' >{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                </div>
                <p className='border-b cursor-pointer ' onClick={handleClick}>Forget Your Password ?</p>
                <div className='flex items-center gap-3'>
                    <input type="checkbox" required />
                    <p className='text-sm'>By continuing, i agree to the terms of use & privact policy.</p>
                </div>
                <div className='text-center mt-4'>
                {
                    currentState == "Login" ?
                        <p>Create a new Account ? <span onClick={() => setCurrentState("Sign Up")} className='cursor-pointer hover:text-green-400'>Click here</span></p> :
                        <p>Already have an account <span onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</span></p>
                }
                </div>
            </div>
            </div>
        
    )
}
