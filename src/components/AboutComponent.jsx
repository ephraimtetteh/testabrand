import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDownRight } from "react-icons/fi";


const AboutComponent = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-14 xl:px-20">
      <div className="border-t py-10 border-gray-300 lg:flex gap-28">
        <div className="lg:flex flex-col gap-4 py-4">
          <h2 className="font-semibold">About us</h2>
          <Link className="flex text-[14px] items-center border border-gray-300 rounded-full px-4 w-fit">
            More
            <FiArrowDownRight />
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="lg:text-4xl font-semibold">
            We blend strategic intelligence, design thinking, communication
            clarity, and digital craft into one integrated practice. Every
            engagement passes through the Testa Method: Diagnose, Distill,
            Design, Deploy Develop.
          </p>
          <div className="flex flex-col py-6">
            <h3 className="text-4xl pb-4">Our Goal</h3>
            <p>
              Help African organisations communicate better, design smarter and
              build systems that lust
            </p>
          </div>
        </div>
      </div>
      <div className="border-t py-10 border-gray-300 flex gap-28">
        <div>
          <h3 className="font-semibold">In Number</h3>
        </div>
        <div className="lg:flex justify-between gap-24">
          <article className='pb-6'> 
            <p className="text-4xl font-bold">2M+</p>
            <small className="text-gray-500 ">
              People reached through our communication systems
            </small>
          </article>

          <article className='pb-6'>
            <p className="text-4xl font-bold">70+</p>
            <small className="text-gray-500 ">
              Projects delivered across Africa
            </small>
          </article>

          <article className=" pb-6">
            <p className="text-4xl font-bold">12 Sectors</p>
            <small className="text-gray-500 ">
              Public, Private, and development experience
            </small>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent