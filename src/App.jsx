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
export default function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testi" element={<Testiminoal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sevice/:id" element={<Blog />} />
        <Route path="/booktable/:id" element={<Table />} />
      </Routes>
      <Footer />
    </div>
  )
}
