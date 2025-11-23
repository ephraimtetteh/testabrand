import React from 'react'
import logo from '../assets/tlogo.png'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";

const menus = [
  {name: 'Work', href: '/work'},
  {name: 'About', href: '/about'},
  {name: 'Services', href: '/services'},
  {name: 'Contact', href: '/contact'},
  {name: 'Testimonials', href: '/testimonials'},
]

const services = [
  { name: "Strategy", href: "/services" },
  { name: "Design", href: "/services" },
  { name: "Insight", href: "/services" },
  { name: "Creative Content", href: "/services" },
  { name: "Web Development", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
];

const socials = [
  { name: "Instagram", href: "/services" },
  { name: "Twitter", href: "/services" },
  { name: "LinkedIn", href: "/services" },
  { name: "Facebook", href: "/services" },
  
];





const Footer = () => {
  return (
    <footer className="bg-white bottom-0 right-0 left-0 relative flex flex-col  mt-20 text-gray-600">
      <section className=" lg:flex md:grid-cols-2 justify-between items-center border-t border-b border-gray-200 py-10 lg:px-20 px-6">
        {/* ============= right */}
        <div className="">
          <img src={logo} alt="" className="w-24" />
        </div>
        <div className="grid lg:flex gap-24">
          <div className="grid lg:flex flex-col gap-2">
            <h3 className="font-semibold text-2xl pb-4">Menu</h3>
            {menus.map((menu) => (
              <Link to={menu.href} key={menu.length} className="text-gray-600">
                {menu.name}
              </Link>
            ))}
          </div>

          <div className="grid lg:flex flex-col gap-2">
            <h3 className="font-semibold text-2xl pb-4">Services</h3>
            {services.map((service) => (
              <Link
                to={service.href}
                key={service.length}
                className="text-gray-600"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <div className="grid lg:flex flex-col gap-2">
            <h3 className="font-semibold text-2xl pb-4">Socials</h3>
            {socials.map((service) => (
              <Link
                to={service.href}
                key={service.length}
                className="text-gray-600"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============= location */}
      <section className="py-10 lg:px-20 px-6 border-b border-gray-200 grid lg:flex justify-between items-center">
        <div className="grid lg:flex">
          <IoLocationOutline className="text-orange-500 w-24" />
          <p>Spintex Flower port, palace mall</p>
        </div>
        <div className="gird lg:flex">
          <IoLocationOutline className="text-orange-500 w-24" />
          <p>123 445 676 </p>
        </div>
      </section>

      {/* ============= copyrght */}
      <section className="py-10 lg:px-20 px-6 border-b border-gray-200 grid lg:flex justify-between items-center">
        <div>
          <p>&copy; 2020 Testa Brands</p>
        </div>
        <div className="flex gap-12">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </section>
    </footer>
  );
}

export default Footer