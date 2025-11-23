import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars2 } from "react-icons/hi2";
import logo from '../assets/tlogo.png'
import { FaWodu } from 'react-icons/fa';


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 lg:px-14 xl:px-20 transition-all text-white ${
        isScrolled
          ? "bg-black/10 shadow-lg text-white/60 backdrop-blur-lg py-3 md:py-4"
          : "py-2 md:py-3"
      }`}
    >
      {/*================= Left side of the navbar  */}
      <div className="flex gap-10 items-center justify-center">
        <Link to={"/"}>
          <img src={logo} alt="testa brands" className="invert w-14" />
        </Link>

        <div className="flex gap-6">
          <Link to={"/work"}>Work</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/work"}>Services</Link>
          <Link to={"/work"}>Contact</Link>
        </div>
      </div>

      {/* ================ right side of  */}
      <div>
        <HiBars2 size={24} />
      </div>
    </div>
  );
}

export default Navbar