import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WorkDetails from './pages/WorkDetails';
import Pricing from './pages/Pricing';
import Newsletter from './components/NewLetter';

const App = () => {
  return (
    <div className='flex flex-col flex-1 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/pricing' element={ <Pricing />} />
        <Route path='/our-work' element={<Work />} />
        <Route path='/work/:id' element={<WorkDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App