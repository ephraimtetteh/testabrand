import React from 'react'
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <section className=" bg-black text-white ">
      <div className="flex px-4 md:px-10 lg:px-14 xl:px-20 flex-col lg:py-40 py-20">
        <p className="uppercase text-2xl text-white/80 py-10">
          "Strategy & Design"
        </p>
        <h1 className="lg:text-[10rem] md:text-6xl sm:text-4xl">
          Testa Brand. <br /> Creative Powerhouse
        </h1>
        <small className="py-10">
          Testa is a mordern creative-strategy firm helping African
          institutions, brands, and programmes turn complexity into clarity{" "}
          <br />
          we design systems-brands systems, digital systems-that move people and
          deliver measurable impact
        </small>

        <Link to={'/contact'} className="text-[16px] bg-orange-600 lg:px-10 lg:py-20 rounded-full w-fit lg:absolute lg:right-95 top-110 px-4 py-2 cursor-pointer sm:mb-4 md:mb-4">
          Start a Project
        </Link>
      </div>
      <div className="py-10 lg:px-20  px-4 border-t border-gray-200 mt-4">
        <p>&copy; 2019</p>
      </div>

      <div>
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero