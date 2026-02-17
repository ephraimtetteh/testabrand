import React from 'react'
import Button from './Button'
import { assets } from '../assets/assets'

const CTA = ({text, title, desc}) => {
  return (
    <div
      className=" bg-[url('./src/assets/Sheenah 2.png')] bg-cover bg-center flex flex-col items-center w-full lg:max-w-7xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30"
      style={{ backgroundImage: `url(${assets.footerbg})` }}
    >
      <div className="text-black/90 lg:p-10 p-3">
        <p className="py-3 lg:px-5 px-2 uppercase text-[18px]">{text}</p>
        <h2 className="px-5 py-2 lg:text-6xl md:text-3xl sm:text-xl text-white/90">
          {title}
        </h2>
        <p className="break-all lg:px-5 pb-4 w-[70%]">{desc}</p>
        <Button text="Book a demon" className="bg-green-800 text-black" />
      </div>
    </div>
  );
}

export default CTA