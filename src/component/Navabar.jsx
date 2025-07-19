import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiShoppingBagOpen } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    const toggleSidebar = () => {
        setVisible(!visible);
    };

    return (
        <div className='relative flex items-center justify-between w-full h-[100px] bg-gray-100 shadow-2xl px-4'>
            <h1 className='text-3xl font-extrabold'>Nathkhat</h1>


            <ul className='lg:flex items-center gap-6 text-sm  text-black'>
                <NavLink to="/" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Home</NavLink>
                
            <NavLink to="/booktable/1">
                <button className='border p-2 rounded-2xl outline-none font-semibold focus:border-white  sm:block'>
                    Book a table
                </button>
            </NavLink>
                <NavLink to="/ourmenu" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">OurMenu</NavLink>
                <NavLink to="/service" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Service</NavLink>
                <NavLink to="/testi" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Pages</NavLink>
                <NavLink to="/contact" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Contact</NavLink>
            </ul>




        </div>
    );
}
