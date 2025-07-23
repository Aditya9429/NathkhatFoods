import React from 'react'
import Home from './Pages/Home/Home'
import OurMenu from './Pages/OurMenu/OurMenu'
import Services from './Pages/Services/Services'
import Testiminoal from './Pages/Testiminoal/Testiminoal'
import Navabar from './component/Navabar'
import { Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
import Table from './Pages/Table/Table'
import Menu from './Pages/Menu/Menu'
import FoodDetails from './Pages/FoodDetails/FoodDetails'
import FavouriteItem from './Pages/FavfoodItems/FavouriteItem'
import Account from './Pages/Account/Account'
import Recovery from './Pages/Recovery/Recovery'
import About from './Pages/About/About'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
export default function App() {
  
  return (
    <div className='w-full overflow-hidden'>
      <Navabar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testi" element={<Testiminoal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sevice/" element={<Blog />} />
        <Route path="/booktable/" element={<Table />} />
        <Route path='/menu'  element={<Menu />} />
        <Route path='/item/:id' element={<FoodDetails />} />
        <Route path="/fav" element={<FavouriteItem/>} />
        <Route path="/account" element={<Account />}  />   
        <Route path="/recovery" element={<Recovery/>} />
        <Route path="/about" element={<About/>} />
         </Routes>
      <Footer />
    </div>
  )
}
