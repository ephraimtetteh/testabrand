import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WorkDetails from './pages/WorkDetails';

const App = () => {
  return (
    <div className='flex flex-col flex-1 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:id' element={<WorkDetails />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App