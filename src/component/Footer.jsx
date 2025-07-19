import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black text-white py-10 px-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto ">
        
      
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Nathkhat Foods</h1>
          <p className="text-sm text-gray-300">
            In the new era of technology we look to the future with certainty and pride for our company.
          </p>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaGithub /></a>
          </div>
        </div>

        <div className="flex flex-col gap-3 cursor-pointer">
          <h2 className="text-lg font-semibold">Pages</h2>
          <p className="text-sm text-gray-300">Home</p>
          <p className="text-sm text-gray-300">About</p> 
          <p className="text-sm text-gray-300">Menu</p> 
          <p className="text-sm text-gray-300">Pricing</p> 
          <Link to="/sevice/1" className="text-sm text-gray-300 hover:text-white transition">Blog</Link>
          <p className="text-sm text-gray-300">Contact</p>
          <p className="text-sm text-gray-300">Delivery</p>
        </div>

      
        <div className="flex flex-col gap-3 cursor-pointer ">
          <h2 className="text-lg font-semibold">Utility Pages</h2>
          <p className="text-sm text-gray-300">Start Here</p>
          <p className="text-sm text-gray-300">Styleguide</p>
          <p className="text-sm text-gray-300">Password Protected</p>
          <p className="text-sm text-gray-300">404 Not Found</p>
          <p className="text-sm text-gray-300">Licenses</p>
          <p className="text-sm text-gray-300">Changelog</p>
          <p className="text-sm text-gray-300">View More</p>
        </div>

       
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-2">Food Items</h2>
          <div className="grid grid-cols-2 gap-2">
            <img src="/images/Grp1.jpg" alt="Food 1" className="w-full h-20 object-cover rounded" />
            <img src="/images/Grp1.jpg" alt="Food 2" className="w-full h-20 object-cover rounded" />
            <img src="/images/Grp1.jpg" alt="Food 3" className="w-full h-20 object-cover rounded" />
            <img src="/images/Grp1.jpg" alt="Food 4" className="w-full h-20 object-cover rounded" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
