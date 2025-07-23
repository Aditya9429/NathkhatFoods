import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const navigate = useNavigate();
    function handlehome(){
    navigate('/')
    }
    return (
        <>

            <div className='sticky top-0 z-50 flex items-center lg:justify-evenly justify-between w-full h-[90px] bg-gray-100 shadow-md px-4'>
                <h1 className='text-3xl font-bold my-font italic cursor-pointer' onClick={handlehome}>Nathkhat</h1>

                <ul className='hidden lg:flex items-center gap-4 text-sm text-black my-font'>
                    <NavLink to="/" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl" >Home</NavLink>

                    <NavLink to="/about" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">About</NavLink>
                    <NavLink to="/testi" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Pages</NavLink>
                    <NavLink to="/account" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Login</NavLink>
                    <NavLink to="/contact" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Contact</NavLink>
                    <NavLink to="/menu" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Menu</NavLink>
                    <NavLink to="/fav" className="hover:bg-yellow-500 px-3 py-2 rounded-2xl">Favorite</NavLink>

                </ul>
                <NavLink to="/booktable">
                    <button className='hidden border px-4 py-1 rounded-2xl hover:bg-yellow-400 transition lg:block'>Book a Table</button>
                </NavLink>

                <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleSidebar}>
                    <FaBars />
                </div>
            </div>


            <div className={`fixed top-[0%] left-[0%] h-full w-[370px] bg-white shadow-lg overflow-hidden transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-y-full'}`}>
                <div className="flex justify-between items-center p-4 ">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <RiCloseLine className="text-2xl cursor-pointer" onClick={toggleSidebar} />
                </div>
                <nav className="flex flex-col items-center gap-7 p-4 space-y-3  text-gray-800 text-2xl my-font font-semibold">
                    <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleSidebar}  >About</NavLink>

                    <NavLink to="/testi" onClick={toggleSidebar}>Pages</NavLink>
                    <NavLink to="/account" onClick={toggleSidebar}>Login</NavLink>
                    <NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink>
                    <NavLink to="/menu" onClick={toggleSidebar}>Menu</NavLink>
                    <NavLink to="/fav" onClick={toggleSidebar}>Favorite</NavLink>
                    <NavLink to="/booktable" onClick={toggleSidebar}>Book a Table</NavLink>

                </nav>

            </div>



        </>
    );
}
