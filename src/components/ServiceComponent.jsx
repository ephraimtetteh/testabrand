import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowDownRight } from "react-icons/fi";


const services = [
  { id: "01", name: "Design", href: "/services" },
  { id: '02', name: "Insight", href: "/services" },
  { id: "03", name: "Strategy", href: "/services" },
  { id: "04" ,name: "Creative Content", href: "/services" },
  { id: '05', name: "Web Development", href: "/services" },
  { id: '06', name: "Digital Marketing", href: "/services" },
];

const ServiceComponent = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 lg:px-14 xl:px-20">
      
      <div>
        <h4 className='text-2xl py-4 border-b'>Our Services</h4>
      </div>

      {services.map((service) => {
        return (
          <div
            key={service.length}
            className="items-center justify-between  transition-all flex py-10 border-b border-gray-200 text-gray-200 font-sans"
          >
            <div className='text-gray-200'>
              <p className='text-gray-200'>{service.id}</p>
            </div>
            <div className='lg:text-7xl text-2xl'>
              <h3>{service.name}</h3>
            </div>
            <Link to={service.href} className='text-gray-100'>
              <FiArrowDownRight className='text-gray-200' />
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceComponent